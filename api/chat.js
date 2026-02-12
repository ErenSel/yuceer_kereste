import { GoogleGenerativeAI } from '@google/generative-ai'

const MODEL_CANDIDATES = ['gemini-1.5-flash', 'gemini-1.5-flash-latest', 'gemini-flash-latest']

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
`

const getContextPrompt = (context) => {
  if (!context) return ''
  if (context.includes('insaatlik-kereste')) return ' (Kullanıcı şu an İnşaatlık Kereste sayfasında. Bu ürünle ilgili teknik detayları ve ebatları vurgula.)'
  if (context.includes('epal-turpal-palet')) return ' (Kullanıcı şu an Palet sayfasında. EPAL/TURPAL standartlarını ve lojistik avantajlarını vurgula.)'
  if (context.includes('lambiri-kaplama')) return ' (Kullanıcı şu an Lambiri sayfasında. Dekoratif özelliklerini ve montaj kolaylığını vurgula.)'
  if (context.includes('iletisim')) return ' (Kullanıcı şu an İletişim sayfasında. Adres tarifi veya telefonla destek konusunda yardımcı ol.)'
  return ''
}

const createChatWithModel = async (genAI, modelName, message, history, contextPrompt) => {
  const model = genAI.getGenerativeModel({ model: modelName })
  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT + contextPrompt }],
      },
      {
        role: 'model',
        parts: [{ text: 'Anlaşıldı. Yüceer Kereste asistanı olarak hazırım.' }],
      },
      ...history,
    ],
    generationConfig: {
      maxOutputTokens: 4096,
    },
  })

  const result = await chat.sendMessageStream(message)
  const response = await result.response
  return response.text()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { message, history, context } = req.body || {}

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'API Key not configured' })
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  const safeHistory = Array.isArray(history) ? history : []
  const contextPrompt = getContextPrompt(context)

  let lastError = null

  for (const modelName of MODEL_CANDIDATES) {
    try {
      const text = await createChatWithModel(genAI, modelName, message, safeHistory, contextPrompt)
      return res.status(200).json({ text })
    } catch (error) {
      lastError = error
    }
  }

  console.error('Gemini API Error:', lastError)
  return res.status(500).json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' })
}
