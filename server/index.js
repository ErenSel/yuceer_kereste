import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

console.log("Server starting...");
console.log("API Key configured:", !!process.env.GEMINI_API_KEY);

// Security: Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later."
});

app.use(limiter);
app.use(cors());
app.use(express.json());

// Serve static files from the React app
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `
Sen Yüceer Kereste’nin (Isparta merkezli 70 yıllık kereste ve palet üreticisi) profesyonel satış ve proje danışmanı yapay zekâ asistanısın.

Görevin:
1. Kullanıcının projesini veya ihtiyacını anlamak (çatı, dekorasyon, inşaat, lojistik vb.).
2. En doğru ağaç türünü (Kızılçam, Karaçam, Sedir) ve sınıfını önermek.
3. Kabaca bir metraj veya ihtiyaç listesi çıkarmasına yardım etmek.
4. Teklif aşamasına hazırlık için gerekli bilgileri (Miktar, Ölçü, Teslimat Yeri) toplamak.

Kişiliğin:
- Profesyonel, yardımsever, teknik bilgiye hakim ama anlaşılır dilde konuşan bir ustasın.
- Asla rakip firma ismi verme. Sadece Yüceer ürünlerini öv.
- Fiyat bilgisi verme. Fiyat sorulursa "Güncel hammadde fiyatlarına göre değiştiği için net teklif almanız en doğrusu olacaktır" de ve teklif formuna yönlendir.

Yanıt Formatın:
Her cevabın sonunda, eğer konuşma bir sonuca vardıysa veya ürün netleştiyse, sadece en sonda olmak üzere şu formatta bir özet geç:
**A) Önerilen Ürün:** [Ürün Adı]
**B) Neden:** [Kısa açıklama]
**C) Sonraki Adım:** [Teklif İste / Detaylı Bilgi]

Eğer kullanıcıdan bilgi alman gerekiyorsa net sorular sor (Maksimum 3 soru).
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { message, history, context } = req.body;

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: "API Key not configured" });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        // Add context nuance
        let contextPrompt = "";
        if (context) {
            if (context.includes("insaatlik-kereste")) contextPrompt = " (Kullanıcı şu an İnşaatlık Kereste sayfasında. Bu ürünle ilgili teknik detayları ve ebatları vurgula.)";
            else if (context.includes("epal-turpal-palet")) contextPrompt = " (Kullanıcı şu an Palet sayfasında. EPAL/TURPAL standartlarını ve lojistik avantajlarını vurgula.)";
            else if (context.includes("lambiri-kaplama")) contextPrompt = " (Kullanıcı şu an Lambiri sayfasında. Dekoratif özelliklerini ve montaj kolaylığını vurgula.)";
            else if (context.includes("iletisim")) contextPrompt = " (Kullanıcı şu an İletişim sayfasında. Adres tarifi veya telefonla destek konusunda yardımcı ol.)";
        }

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: SYSTEM_PROMPT + contextPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Anlaşıldı. Yüceer Kereste asistanı olarak hazırım." }],
                },
                ...(history || [])
            ],
            generationConfig: {
                maxOutputTokens: 4096,
            },
        });

        const result = await chat.sendMessageStream(message);
        const response = await result.response;
        const text = response.text();

        res.json({ text });

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Bir hata oluştu. Lütfen tekrar deneyin." });
    }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use((req, res, next) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
