import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'
import certPlaceholderImg from '../assets/certificate-placeholder.png'

const Documents = () => {
    return (
        <>
            <SeoHead
                title="Belgelerimiz & Sertifikalar"
                description="Kalite standartlarımızı belgeleyen ISPM-15, EPAL ve TURPAL lisanslarımız."
            />

            <section className="page-header bg-dark text-white section-padding-sm">
                <div className="container">
                    <h1 className="page-title">Belgelerimiz</h1>
                    <ul className="breadcrumbs">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li>Belgelerimiz</li>
                    </ul>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-3 certificates-grid">
                        <div className="cert-card">
                            <div className="cert-image">
                                <img src={certPlaceholderImg} alt="ISPM-15 Sertifikası" />
                            </div>
                            <h3>ISPM-15 Uygunluk Belgesi</h3>
                            <p>Tarım ve Orman Bakanlığı tarafından onaylanmış, ahşap ambalaj malzemeleri ısıl işlem lisansı.</p>
                            <button className="btn btn-sm btn-outline mt-sm">Görüntüle</button>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image">
                                <img src={certPlaceholderImg} alt="EPAL Lisans Belgesi" />
                            </div>
                            <h3>EPAL Üretim Lisansı</h3>
                            <p>Avrupa Palet Birliği (EPAL) standartlarına uygun UIC 435-2 normunda üretim yetki belgesi.</p>
                            <button className="btn btn-sm btn-outline mt-sm">Görüntüle</button>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image">
                                <img src={certPlaceholderImg} alt="TURPAL Lisans Belgesi" />
                            </div>
                            <h3>TURPAL Üretim Lisansı</h3>
                            <p>TACE (Tüm Ahşap Palet ve Sandıkçılar Derneği) tarafından verilen yerli palet üretim sertifikası.</p>
                            <button className="btn btn-sm btn-outline mt-sm">Görüntüle</button>
                        </div>
                        <div className="cert-card">
                            <div className="cert-image">
                                <img src={certPlaceholderImg} alt="ISO 9001" />
                            </div>
                            <h3>ISO 9001:2015</h3>
                            <p>Kalite Yönetim Sistemi sertifikası.</p>
                            <button className="btn btn-sm btn-outline mt-sm">Görüntüle</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Documents
