import { useParams, Link, Navigate } from 'react-router-dom'
import SeoHead from '../components/SeoHead'
import prodTimberImg from '../assets/prod-timber.png'
import prodPanelingImg from '../assets/prod-paneling.png'
import prodChipsImg from '../assets/prod-chips.png'
import prodPalletsImg from '../assets/prod-pallets.png'

const productData = {
    'insaatlik-kereste': {
        title: 'İnşaatlık Kereste',
        image: prodTimberImg,
        description: 'Kızılçam ve Karaçam tomruklarından üretilen, yüksek mukavemetli inşaatlık kereste.',
        longDescription: `
            Isparta bölgesinin yüksek rakımlı ormanlarından elde edilen Kızılçam ve Karaçam tomrukları, 
            modern tesislerimizde özenle işlenerek inşaatlık kereste haline getirilir. 
            Çatı konstrüksiyonları, beton kalıpları ve iskele sistemlerinde güvenle kullanılabilir.
        `,
        specs: [
            { label: 'Ağaç Türü', value: 'Kızılçam, Karaçam' },
            { label: 'Standart Ebatlar', value: '5x10, 10x10, 5x5 cm' },
            { label: 'Boy', value: '3m - 6m arası' },
            { label: 'Nem Oranı', value: 'Fırınlı (%12-15) veya Yeşil' },
        ],
        faq: [
            { q: 'Metreküp fiyatı nedir?', a: 'Fiyatlar ebat ve piyasa koşullarına göre değişmektedir. Lütfen teklif alınız.' },
            { q: 'Nakliye hizmetiniz var mı?', a: 'Evet, tüm Türkiye\'ye sevkiyatımız bulunmaktadır.' }
        ]
    },
    'lambiri-kaplama': {
        title: 'Lambiri & Kaplama',
        image: prodPanelingImg,
        description: 'Doğal ahşap dokusuyla mekanlarınıza sıcaklık katan lambiri ve kaplama ürünleri.',
        longDescription: `
            Budaksız veya az budaklı tomrukların özel olarak seçilmesiyle üretilen lambirilerimiz, 
            duvar ve tavan kaplamalarında estetik bir görünüm sağlar. 
            Geçmeli yapısı sayesinde montajı kolaydır.
        `,
        specs: [
            { label: 'Ağaç Türü', value: 'Kızılçam, Sedir' },
            { label: 'Kalınlık', value: '18mm - 22mm' },
            { label: 'Genişlik', value: '8cm - 12cm' },
            { label: 'Yüzey', value: 'Zımparalı, Boyaya Hazır' },
        ],
        faq: [
            { q: 'Dış mekanda kullanılır mı?', a: 'Evet, ancak uygun koruyucu vernik/boya uygulaması önerilir.' },
        ]
    },
    'yonga-cips': {
        title: 'Yonga Cips',
        image: prodChipsImg,
        description: 'Enerji ve kağıt endüstrisi için kaliteli odun yongası.',
        longDescription: `
            Tomrukların kabukları soyulduktan sonra öğütülmesiyle elde edilen yonga cipslerimiz,
            yüksek kalori değeriyle biyoenerji santralleri için ideal bir yakıttır. 
            Ayrıca MDF ve kağıt sanayisinde hammadde olarak kullanılır.
        `,
        specs: [
            { label: 'Menşei', value: '%100 İğne Yapraklı Ağaç' },
            { label: 'Boyut', value: 'G30 - G50 Standart' },
            { label: 'Nem', value: '%30 - %45' },
            { label: 'Kül Oranı', value: '< %1' },
        ],
        faq: [
            { q: 'Minimum sipariş miktarı nedir?', a: 'Genellikle tır bazında (25-30 ton) sevkiyat yapılmaktadır.' },
        ]
    },
    'epal-turpal-palet': {
        title: 'EPAL & TURPAL Palet',
        image: prodPalletsImg,
        description: 'Uluslararası standartlarda, ISPM-15 ısıl işlemli ahşap paletler.',
        longDescription: `
            Avrupa Palet Birliği (EPAL) ve Türk Standartları (TURPAL) lisanslarımızla ürettiğimiz paletler,
            tedarik zincirinizin aksamadan yürümesini sağlar. 
            Otomasyonlu hatlarımızda standartlara %100 uygun üretim yapılır.
        `,
        specs: [
            { label: 'Standart', value: 'EPAL 1 / TURPAL' },
            { label: 'Ölçü', value: '800 x 1200 mm' },
            { label: 'Taşıma Kapasitesi', value: '1500 kg (Dinamik)' },
            { label: 'Isıl İşlem', value: 'ISPM-15 Mevcut' },
        ],
        faq: [
            { q: 'İkinci el palet alıyor musunuz?', a: 'Şu an sadece sıfır üretim yapmaktayız.' },
        ]
    }
}

const ProductDetail = () => {
    const { slug } = useParams()
    const product = productData[slug]

    if (!product) {
        return <Navigate to="/urunler" replace />
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.title,
        "image": product.image, // Should be full URL in prod
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "Yüceer Kereste"
        }
    }

    return (
        <>
            <SeoHead
                title={product.title}
                description={`${product.title} - ${product.description}`}
                schema={schema}
            />

            <section className="page-header bg-dark text-white section-padding-sm">
                <div className="container">
                    <h1 className="page-title">{product.title}</h1>
                    <ul className="breadcrumbs">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/urunler">Ürünler</Link></li>
                        <li>{product.title}</li>
                    </ul>
                </div>
            </section>

            <section className="section-padding">
                <div className="container grid-2">
                    {/* Left: Image & CTA */}
                    <div>
                        <div className="product-detail-image mb-lg">
                            <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '12px' }} />
                        </div>
                        <div className="bg-light p-lg" style={{ borderRadius: '12px' }}>
                            <h3 className="mb-md">Teklif Alın</h3>
                            <p className="mb-md">Bu ürün için güncel fiyat ve termin bilgisi almak için hemen iletişime geçin.</p>
                            <Link to="/iletisim" className="btn btn-primary full-width text-center">Teklif Formuna Git</Link>
                            <a href="https://wa.me/905550000000" className="btn btn-outline full-width text-center mt-sm">
                                <i className="ph ph-whatsapp-logo"></i> WhatsApp'tan Sor
                            </a>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="product-detail-content">
                        <h2 className="section-title">Ürün Özellikleri</h2>
                        <p className="description-text mb-lg">
                            {product.longDescription}
                        </p>

                        <div className="specs-table-wrapper mb-xl">
                            <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <tbody>
                                    {product.specs.map((spec, index) => (
                                        <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '12px', fontWeight: '600', color: '#555' }}>{spec.label}</td>
                                            <td style={{ padding: '12px', color: '#333' }}>{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {product.faq && (
                            <div className="faq-section">
                                <h3 className="h4 mb-md">Sıkça Sorulan Sorular</h3>
                                {product.faq.map((item, index) => (
                                    <div key={index} className="faq-item mb-md">
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.q}</h4>
                                        <p style={{ color: '#666' }}>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail
