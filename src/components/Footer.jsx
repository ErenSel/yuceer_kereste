import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container footer-content grid-4">
                <div className="footer-brand">
                    <Link to="/" className="logo text-white">
                        <i className="ph ph-tree-evergreen logo-icon"></i>
                        <span>YÜCEER KERESTE</span>
                    </Link>
                    <p className="mt-md opacity-60">
                        1954'ten beri doğadan gelen sağlamlık. Isparta'nın önde gelen kereste ve palet üreticisi.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Hızlı Menü</h4>
                    <ul>
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/kurumsal">Kurumsal</Link></li>
                        <li><Link to="/urunler">Ürünler</Link></li>
                        <li><Link to="/iletisim">İletişim</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Ürünler</h4>
                    <ul>
                        <li><Link to="/urunler/insaatlik-kereste">İnşaatlık Kereste</Link></li>
                        <li><Link to="/urunler/lambiri-kaplama">Lambiri</Link></li>
                        <li><Link to="/urunler/epal-turpal-palet">EPAL Palet</Link></li>
                        <li><Link to="/urunler/epal-turpal-palet">TURPAL Palet</Link></li>
                    </ul>
                </div>

                <div className="footer-legal">
                    <p>&copy; 2026 Yüceer Kereste.<br />Tüm hakları saklıdır.</p>
                </div>
            </div>

            <a href="https://wa.me/905550000000" target="_blank" className="whatsapp-float" aria-label="WhatsApp" rel="noreferrer">
                <i className="ph ph-whatsapp-logo"></i>
            </a>
        </footer>
    )
}

export default Footer
