import { useParams, Link, Navigate } from 'react-router-dom'
import SeoHead from '../components/SeoHead'

// Blog Data Store
export const blogPosts = [
    {
        id: 1,
        slug: 'kereste-secerken-nelere-dikkat-edilmeli',
        title: 'Kereste Seçerken Nelere Dikkat Edilmeli?',
        excerpt: 'İnşaat ve marangozluk projeleriniz için doğru kereste seçiminin püf noktaları. Ağaç türü, nem oranı ve sınıflandırma.',
        image: '/src/assets/prod-timber.png', // Placeholder
        date: '12 Şubat 2026',
        content: `
            <p>Ahşap, yapı sektörünün en eski ve en güvenilir malzemelerinden biridir. Ancak her proje için her ağaç türü uygun değildir. İşte kereste seçerken dikkat etmeniz gereken temel faktörler:</p>
            
            <h3>1. Ağaç Türü: Kızılçam mı Karaçam mı?</h3>
            <p><strong>Kızılçam:</strong> Lif yapısı yumuşaktır, kolay işlenir. Genellikle doğrama, lambiri ve iç dekorasyonda tercih edilir.</p>
            <p><strong>Karaçam:</strong> Daha sert ve reçinelidir. Suya ve dış etkenlere karşı dayanıklılığı daha yüksektir. Bu yüzden çatı iskeletlerinde, dış cephe kaplamalarında ve taşıyıcı elemanlarda Karaçam tercih edilmelidir.</p>

            <h3>2. Nem Oranı (Kuru vs. Yeşil)</h3>
            <p>Kerestenin "çalışması" yani zamanla eğilmesi veya çatlaması büyük oranda nem ile ilgilidir. İnşaatlık kalıp kerestesinde "yeşil" (kurutulmamış) kereste kullanılabilirken, mobilya ve dekorasyon işlerinde mutlaka <strong>fırınlanmış kereste</strong> (%12-15 nem) kullanılmalıdır.</p>

            <h3>3. Sınıflandırma ve Budak Yapısı</h3>
            <p>Görünür yüzeylerde (lambiri vb.) budaksız veya az budaklı 1. sınıf kereste tercih edilirken, görünmeyen taşıyıcı kısımlarda sağlam budaklı 2. sınıf keresteler maliyet avantajı sağlar.</p>

            <p>Yüceer Kereste olarak, projenize en uygun tomruğu seçip, ihtiyacınıza göre ebatlıyor ve fırınlıyoruz.</p>
        `
    },
    {
        id: 2,
        slug: 'epal-palet-nedir',
        title: 'EPAL Palet Nedir ve Neden Önemlidir?',
        excerpt: 'Lojistik dünyasının standartı EPAL Euro Palet hakkında bilmeniz gerekenler. Ölçüler, standartlar ve avantajlar.',
        image: '/src/assets/prod-pallets.png',
        date: '10 Şubat 2026',
        content: `
            <p>EPAL (Avrupa Palet Birliği), dünya genelinde palet standartlarını belirleyen ve denetleyen kuruluştur. EPAL damgalı bir palet, dünyanın her yerinde aynı kalite ve ölçü standartlarını garanti eder.</p>

            <h3>Standart Ölçüler</h3>
            <p>En yaygın kullanılan Euro Palet ölçüsü <strong>80x120 cm</strong>'dir. Standart bir EPAL palet ağırdır (yaklaşık 25 kg) ve 1500 kg'a kadar dinamik yük taşıyabilir.</p>

            <h3>Neden EPAL Palet Kullanmalısınız?</h3>
            <ul>
                <li><strong>Değişim Havuzu:</strong> EPAL paletler, geniş bir değişim ağına sahiptir. Gönderdiğiniz paletin yerine boş palet alabilirsiniz.</li>
                <li><strong>Güvenlik:</strong> Standartlara uygun üretildiği için raf sistemlerinde ve forklift operasyonlarında iş kazası riskini minimize eder.</li>
                <li><strong>İhracat Uyumluluğu:</strong> ISPM-15 ısıl işlem standardına sahip olduğu için uluslararası ticarette gümrük sorunu yaşatmaz.</li>
            </ul>

            <p>Yüceer Kereste, yetkili EPAL ve TURPAL üreticisidir.</p>
        `
    },
    {
        id: 3,
        slug: 'kizilcam-vs-karacam-farklari',
        title: 'Kızılçam vs Karaçam Farkları',
        excerpt: 'Türkiye\'nin en yaygın iki iğne yapraklı ağacı arasındaki teknik ve kullanım farkları.',
        image: '/src/assets/prod-timber.png',
        date: '08 Şubat 2026',
        content: `
            <p>Ülkemiz ormanlarında en çok bulunan iki tür olan Kızılçam ve Karaçam, sıklıkla karıştırılır ancak kullanım alanları farklıdır.</p>
            
            <h3>Dayanıklılık</h3>
            <p>Karaçam, kendine has reçinesi sayesinde böceklenmeye ve çürümeye karşı Kızılçam'dan daha dirençlidir. Bu yüzden dış mekan (bahçe mobilyası, veranda, iskele) uygulamaları için Karaçam idealdir.</p>
            
            <h3>İşlenebilirlik</h3>
            <p>Kızılçam daha yumuşak dokuludur. Vida ve çivi tutma kabiliyeti yüksektir ancak çok sert darbelerde ezilebilir. Karaçam ise daha serttir, işlemesi ve vidalaması biraz daha güç olabilir ancak yük taşıma kapasitesi yüksektir.</p>
            
            <h3>Görünüm</h3>
            <p>Kızılçam daha pembemsi/kızıl bir tona sahipken, Karaçam daha sarımsı ve yaşlandıkça koyulaşan bir renge sahiptir.</p>
        `
    },
    {
        id: 4,
        slug: 'lambiri-metraj-hesaplama',
        title: 'Lambiri Metraj Hesaplama Rehberi',
        excerpt: 'Duvar veya tavan kaplaması yaparken ne kadar lambiriye ihtiyacınız olduğunu nasıl hesaplarsınız?',
        image: '/src/assets/prod-paneling.png',
        date: '05 Şubat 2026',
        content: `
            <p>Lambiri siparişi verirken en sık yapılan hata, "net alan" ile "işleyen alan"ın karıştırılmasıdır.</p>

            <h3>Hesaplama Formülü</h3>
            <p>Lambiriler birbirine geçmeli (lamba-zıvana) yapıda olduğu için, birleşme yerlerinde yaklaşık 1 cm kayıp oluşur.</p>
            <p>Örneğin: 10 cm genişliğinde bir lambirinin, yüzeyde kapatacağı net alan yaklaşık 9 cm'dir.</p>
            <p><strong>Formül:</strong> (Kaplanacak Alan m²) x 1.10 = Sipariş Edilecek Miktar</p>
            <p>%10 fire payı, kesim hataları ve uç birleşim kayıpları için mutlaka eklenmelidir.</p>
        `
    },
    {
        id: 5,
        slug: 'ispm-15-nedir',
        title: 'ISPM-15 Nedir? İhracatta Ahşap Ambalaj',
        excerpt: 'Uluslararası ticarette kullanılan ahşap palet ve sandıklar için zorunlu olan ISPM-15 standardı hakkında.',
        image: '/src/assets/certificate-placeholder.png',
        date: '01 Şubat 2026',
        content: `
            <p>ISPM-15 (International Standards for Phytosanitary Measures No. 15), ahşap ambalaj malzemelerinin (palet, sandık, kasa) uluslararası ticarette zararlı böcek ve larvaları taşımasını önlemek için geliştirilmiş bir standarttır.</p>

            <h3>Isıl İşlem (Heat Treatment)</h3>
            <p>Bu standart gereği, ahşabın öz sıcaklığının en az 56°C'ye ulaşacak şekilde 30 dakika boyunca fırınlanması gerekir. Bu işlem ahşabın içindeki tüm zararlıları öldürür.</p>

            <h3>Neden Zorunlu?</h3>
            <p>Bir ülkeden diğerine giden ahşaplar, üzerlerinde taşıdıkları böceklerle o ülkenin yerel ormanlarına zarar verebilir (Örn: Çam kese böceği). ISPM-15 damgası olmayan ahşap ambalajlar gümrüklerden geçemez ve imha edilir veya iade edilir.</p>
            
            <p>İhracat yapıyorsanız, mutlaka ISPM-15 damgalı Yüceer Palet ürünlerini tercih ediniz.</p>
        `
    }
]

export const Blog = () => {
    return (
        <>
            <SeoHead
                title="Blog & Sektörel Bilgiler"
                description="Kereste, palet ve ahşap sektörü hakkında rehber niteliğinde yazılar. Teknik bilgiler, ipuçları ve güncel gelişmeler."
            />

            <section className="page-header bg-dark text-white section-padding-sm">
                <div className="container">
                    <h1 className="page-title">Blog</h1>
                    <ul className="breadcrumbs">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-3 blog-grid">
                        {blogPosts.map(post => (
                            <div key={post.id} className="blog-card project-card"> {/* Reusing project-card style or creating new */}
                                <div className="blog-image">
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                                </div>
                                <div className="blog-content mt-md">
                                    <span className="date text-sm opacity-60 mb-sm block">{post.date}</span>
                                    <h3 className="h4 mb-sm"><Link to={`/blog/${post.slug}`} className="text-dark">{post.title}</Link></h3>
                                    <p className="text-sm opacity-80 mb-md">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="link-text">Devamını Oku <i className="ph ph-arrow-right"></i></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export const BlogPost = () => {
    const { slug } = useParams()
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        return <Navigate to="/blog" replace />
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "datePublished": "2026-02-12T00:00:00+03:00", // Dynamic date ideally
        "author": {
            "@type": "Organization",
            "name": "Yüceer Kereste"
        }
    }

    return (
        <>
            <SeoHead
                title={post.title}
                description={post.excerpt}
                schema={schema}
            />

            <section className="page-header bg-dark text-white section-padding-sm">
                <div className="container">
                    <h1 className="page-title text-center max-w-800 mx-auto">{post.title}</h1>
                    <ul className="breadcrumbs justify-center mt-sm">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li>{post.title}</li>
                    </ul>
                </div>
            </section>

            <section className="section-padding">
                <div className="container max-w-800">
                    <div className="blog-detail-content">
                        <img src={post.image} alt={post.title} className="mb-lg" style={{ width: '100%', borderRadius: '12px' }} />
                        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />

                        <div className="mt-xl pt-lg border-top">
                            <h4>Bu yazıyı beğendiniz mi?</h4>
                            <p>Ahşap projeleriniz için profesyonel destek almak isterseniz bizimle iletişime geçin.</p>
                            <Link to="/iletisim" className="btn btn-primary mt-sm">İletişime Geç</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
