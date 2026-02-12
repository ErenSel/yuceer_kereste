import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'
import prodTimberImg from '../assets/prod-timber.png'
import prodPanelingImg from '../assets/prod-paneling.png'
import prodChipsImg from '../assets/prod-chips.png'
import prodPalletsImg from '../assets/prod-pallets.png'

const Products = () => {
    return (
        <>
            <SeoHead
                title="Ürünlerimiz"
                description="İnşaatlık kereste, lambiri, yonga cips ve EPAL/TURPAL palet çeşitlerimiz. Isparta fabrikamızdan tüm Türkiye'ye sevkiyat."
            />

            <section className="page-header bg-dark text-white section-padding-sm">
                <div className="container">
                    <h1 className="page-title">Ürünlerimiz</h1>
                    <ul className="breadcrumbs">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li>Ürünler</li>
                    </ul>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-2 products-list-grid">
                        {/* Product 1 */}
                        <div className="product-card-horizontal">
                            <div className="product-image">
                                <img src={prodTimberImg} alt="İnşaatlık Kereste" />
                            </div>
                            <div className="product-content">
                                <h3>İnşaatlık Kereste</h3>
                                <p>Kızılçam ve Karaçam tomruklarından, isteğe bağlı ebatlarda üretilen inşaatlık keresteler. Çatı, kalıp ve iskele yapımında kullanılır.</p>
                                <ul className="feature-bullets">
                                    <li>Fırınlanmış veya fırınlanmamış seçenekler</li>
                                    <li>5x10, 10x10 standart ölçüler</li>
                                    <li>Özel ölçü kesim imkanı</li>
                                </ul>
                                <Link to="/urunler/insaatlik-kereste" className="btn btn-outline mt-md">İncele</Link>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card-horizontal">
                            <div className="product-image">
                                <img src={prodPanelingImg} alt="Lambiri ve Kaplama" />
                            </div>
                            <div className="product-content">
                                <h3>Lambiri & Kaplama</h3>
                                <p>İç ve dış mekan dekorasyonu için doğal ahşap lambiri ve kaplama ürünleri. Estetik ve dayanıklı yüzeyler.</p>
                                <ul className="feature-bullets">
                                    <li>1. Sınıf budaksız seçenekler</li>
                                    <li>Kolay montaj (Geçmeli sistem)</li>
                                    <li>Vernik ve boyaya uygun yüzey</li>
                                </ul>
                                <Link to="/urunler/lambiri-kaplama" className="btn btn-outline mt-md">İncele</Link>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card-horizontal">
                            <div className="product-image">
                                <img src={prodPalletsImg} alt="EPAL ve TURPAL Palet" />
                            </div>
                            <div className="product-content">
                                <h3>EPAL & TURPAL Palet</h3>
                                <p>Lojistik ve depolama çözümleri için uluslararası standartlarda ahşap palet üretimi.</p>
                                <ul className="feature-bullets">
                                    <li>ISPM-15 Isıl İşlemli</li>
                                    <li>EPAL Lisanslı Üretim</li>
                                    <li>80x120 ve özel ölçüler</li>
                                </ul>
                                <Link to="/urunler/epal-turpal-palet" className="btn btn-outline mt-md">İncele</Link>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="product-card-horizontal">
                            <div className="product-image">
                                <img src={prodChipsImg} alt="Yonga Cips" />
                            </div>
                            <div className="product-content">
                                <h3>Yonga Cips</h3>
                                <p>Kağıt, sunta/MDF ve enerji sektörü için yüksek kaliteli yonga cips hammaddesi.</p>
                                <ul className="feature-bullets">
                                    <li>Kabuksuz temiz içerik</li>
                                    <li>İstenilen nem oranında</li>
                                    <li>Düzenli tedarik imkanı</li>
                                </ul>
                                <Link to="/urunler/yonga-cips" className="btn btn-outline mt-md">İncele</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
