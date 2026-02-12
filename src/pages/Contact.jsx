import SeoHead from '../components/SeoHead'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <SeoHead
                title="İletişim"
                description="Yüceer Kereste Isparta fabrika iletişim bilgileri, adres, telefon ve e-posta. Ahşap ihtiyaçlarınız için teklif alın."
            />

            <section className="page-header bg-dark text-white section-padding-sm">
                <div className="container">
                    <h1 className="page-title">İletişim</h1>
                    <ul className="breadcrumbs">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li>İletişim</li>
                    </ul>
                </div>
            </section>

            <section className="section-padding">
                <div className="container grid-2">
                    <div className="contact-info">
                        <h2 className="section-title">Bize Ulaşın</h2>
                        <p className="mb-lg opacity-80">
                            Sorularınız, siparişleriniz ve iş birlikleri için aşağıdaki kanallardan bize ulaşabilirsiniz.
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
                                    <p><a href="tel:+902461234567" style={{ color: 'inherit' }}>+90 (246) 123 45 67</a></p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="ph ph-envelope"></i>
                                <div>
                                    <h4>E-posta</h4>
                                    <p><a href="mailto:bilgi@yuceerkereste.com.tr" style={{ color: 'inherit' }}>bilgi@yuceerkereste.com.tr</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="map-embed mt-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245963577!2d30.5!3d37.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b3a3f0f3f2d%3A0x1c3c9c9c9c9c9c9c!2sS%C3%BCleyman%20Demirel%20Organize%20Sanayi%20B%C3%B6lgesi!5e0!3m2!1str!2str!4v1620000000000"
                                width="100%" height="300" style={{ border: 0, borderRadius: '14px', opacity: 0.8 }} allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                    </div>

                    <div className="contact-form-wrapper bg-light p-xl" style={{ borderRadius: '16px' }}>
                        <form className="contact-form">
                            <h3 className="mb-md">Hızlı Teklif Formu</h3>
                            <div className="form-group">
                                <label>Ad Soyad / Firma Adı</label>
                                <input type="text" placeholder="Örn: Ahmet Yılmaz" required className="form-input" />
                            </div>
                            <div className="form-group grid-2-sm">
                                <div>
                                    <label>Telefon</label>
                                    <input type="tel" placeholder="0555 123 45 67" required className="form-input" />
                                </div>
                                <div>
                                    <label>E-posta</label>
                                    <input type="email" placeholder="ornek@firma.com" className="form-input" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Konu</label>
                                <select className="form-input">
                                    <option>Fiyat Teklifi Almak İstiyorum</option>
                                    <option>Ürün Bilgisi Sormak İstiyorum</option>
                                    <option>Lojistik / Sevkiyat</option>
                                    <option>Diğer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Mesajınız / Talep Detayları</label>
                                <textarea rows="5" placeholder="Ürün, miktar ve teslimat adresi detaylarını buraya yazınız..." className="form-input"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary full-width">Teklif İste</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
