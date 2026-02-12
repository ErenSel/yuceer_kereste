import { Link } from 'react-router-dom'
import aboutFactoryImg from '../assets/about-factory.png'
import prodTimberImg from '../assets/prod-timber.png'
import prodPanelingImg from '../assets/prod-paneling.png'
import prodChipsImg from '../assets/prod-chips.png'
import prodPalletsImg from '../assets/prod-pallets.png'
import certPlaceholderImg from '../assets/certificate-placeholder.png'

const Home = () => {
    return (
        <>
            <section id="hero" className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title">Doğadan Gelen Sağlamlık:<br />Yüceer Kereste</h1>
                    <p className="hero-subtitle">Kızılçam, Karaçam ve Sedir kalitesinde üretim.</p>

                    <div className="hero-buttons">
                        <Link to="/urunler" className="btn btn-primary">Ürünleri İncele</Link>
                        <Link to="/iletisim" className="btn btn-secondary btn-hero-secondary">Hemen Teklif Al</Link>
                    </div>

                    <div className="trust-badges">
                        <div className="badge">
                            <i className="ph ph-calendar-check"></i>
                            <span>70+ Yıl Tecrübe</span>
                        </div>
                        <div className="badge">
                            <i className="ph ph-buildings"></i>
                            <span>500+ Kurumsal Müşteri</span>
                        </div>
                        <div className="badge">
                            <i className="ph ph-flag"></i>
                            <span>%100 Yerli Üretim</span>
                        </div>
                        <div className="badge">
                            <i className="ph ph-truck"></i>
                            <span>81 İle Sevkiyat</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="section-padding">
                <div className="container grid-2 align-center">
                    <div className="about-image-wrapper">
                        <img src={aboutFactoryImg} alt="Yüceer Kereste Factory" className="about-image" />
                        <div className="experience-badge">
                            <span className="years">70</span>
                            <span className="text">Yıllık<br />Tecrübe</span>
                        </div>
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">Ağaca Değer, Yapıya Güç Katıyoruz</h2>
                        <p className="section-subtitle">Since 1954</p>
                        <p className="mb-lg description-text">
                            Yüceer Kereste olarak, Isparta'daki modern tesislerimizde dünya standartlarında kereste ve palet üretimi
                            yapıyoruz.
                            Sürdürülebilir orman kaynaklarını en ileri teknoloji ile işleyerek, inşaat ve lojistik sektörüne değer
                            katıyoruz.
                        </p>

                        <ul className="feature-list">
                            <li>
                                <i className="ph ph-check-circle"></i>
                                <span>Yüksek Kapasiteli Üretim Hattı</span>
                            </li>
                            <li>
                                <i className="ph ph-check-circle"></i>
                                <span>ISPM-15 Standartlarında Isıl İşlem</span>
                            </li>
                            <li>
                                <i className="ph ph-check-circle"></i>
                                <span>Zamanında ve Güvenilir Teslimat</span>
                            </li>
                            <li>
                                <i className="ph ph-check-circle"></i>
                                <span>Özel Ebatlama ve Fırınlama</span>
                            </li>
                        </ul>

                        <Link to="/iletisim" className="btn btn-primary mt-lg">Fabrikamızı Tanıyın</Link>
                    </div>
                </div>
            </section>

            <section id="products" className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-xxl">
                        <h2 className="section-title">Ürün Kategorileri</h2>
                        <p className="section-subtitle max-w-600 mx-auto">
                            İhtiyacınıza uygun, yüksek kaliteli ve standartlara tam uyumlu ahşap çözümleri.
                        </p>
                    </div>

                    <div className="grid-4 products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src={prodTimberImg} alt="İnşaatlık Kereste" />
                            </div>
                            <div className="product-info">
                                <h3>İnşaatlık Kereste</h3>
                                <p>Kızılçam ve Karaçam tomruklarından özel üretim.</p>
                                <Link to="/urunler/insaatlik-kereste" className="link-text">Detaylı Bilgi <i className="ph ph-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img src={prodPanelingImg} alt="Lambiri" />
                            </div>
                            <div className="product-info">
                                <h3>Lambiri & Kaplama</h3>
                                <p>İç ve dış mekan için dekoratif ahşap çözümleri.</p>
                                <Link to="/urunler/lambiri-kaplama" className="link-text">Detaylı Bilgi <i className="ph ph-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img src={prodChipsImg} alt="Yonga Cips" />
                            </div>
                            <div className="product-info">
                                <h3>Yonga Cips</h3>
                                <p>Enerji ve kağıt sanayisi için hammadde.</p>
                                <Link to="/urunler/yonga-cips" className="link-text">Detaylı Bilgi <i className="ph ph-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image">
                                <img src={prodPalletsImg} alt="EPAL Palet" />
                            </div>
                            <div className="product-info">
                                <h3>EPAL & TURPAL Palet</h3>
                                <p>Lojistik ihtiyaçlarınız için standartlara uygun paletler.</p>
                                <Link to="/urunler/epal-turpal-palet" className="link-text">Detaylı Bilgi <i className="ph ph-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="certificates" className="section-padding">
                <div className="container">
                    <div className="text-center mb-xxl">
                        <h2 className="section-title">Belgelerimiz & Kalite Standartlarımız</h2>
                        <p className="section-subtitle">Uluslararası standartlarda üretim kalitesi.</p>
                    </div>
                    <div className="grid-3 certificates-grid">
                        <div className="cert-card">
                            <div className="cert-image">
                                <img src={certPlaceholderImg} alt="ISPM-15" />
                            </div>
                            <h3>ISPM-15</h3>
                            <p>Ahşap ambalaj malzemelerinin ısıl işlem ile zararlılardan arındırıldığını belgeler.</p>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image">
                                <img src={certPlaceholderImg} alt="EPAL Lisans" />
                            </div>
                            <h3>EPAL Lisans</h3>
                            <p>Avrupa Palet Birliği standartlarına uygun üretim yetki belgesi.</p>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image">
                                <img src={certPlaceholderImg} alt="TURPAL" />
                            </div>
                            <h3>TURPAL</h3>
                            <p>Türk Standartları Enstitüsü onaylı yerli palet üretim sertifikası.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section-padding bg-dark text-white">
                <div className="container grid-2">
                    <div className="contact-info">
                        <h2 className="section-title text-white">İletişime Geçin</h2>
                        <p className="mb-lg opacity-80">
                            Projeleriniz için özel fiyat teklifi almak veya tesisimizi ziyaret etmek için bize ulaşın.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="ph ph-map-pin"></i>
                                <div>
                                    <h4>Fabrika Adresi</h4>
                                    <p>Isparta Süleyman Demirel OSB<br />102. Cadde No:5, Isparta, Türkiye</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="ph ph-phone"></i>
                                <div>
                                    <h4>Telefon</h4>
                                    <p>+90 (246) 123 45 67</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="ph ph-envelope"></i>
                                <div>
                                    <h4>E-posta</h4>
                                    <p>bilgi@yuceerkereste.com.tr</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-embed mt-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245963577!2d30.5!3d37.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b3a3f0f3f2d%3A0x1c3c9c9c9c9c9c9c!2sS%C3%BCleyman%20Demirel%20Organize%20Sanayi%20B%C3%B6lgesi!5e0!3m2!1str!2str!4v1620000000000"
                                width="100%" height="250" style={{ border: 0, borderRadius: '14px', opacity: 0.8 }} allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <h3 className="mb-md">Teklif Formu</h3>
                            <div className="form-group">
                                <label>Ad Soyad / Firma Adı</label>
                                <input type="text" placeholder="Örn: Ahmet Yılmaz" required />
                            </div>
                            <div className="form-group grid-2-sm">
                                <div>
                                    <label>Telefon</label>
                                    <input type="tel" placeholder="0555 123 45 67" required />
                                </div>
                                <div>
                                    <label>E-posta</label>
                                    <input type="email" placeholder="ornek@firma.com" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Mesajınız / Talep Detayları</label>
                                <textarea rows="4" placeholder="Ürün ve miktar detaylarını buraya yazınız..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary full-width">Teklif İste</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
