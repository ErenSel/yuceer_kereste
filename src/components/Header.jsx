import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : ''
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = ''
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    <i className="ph ph-tree-evergreen logo-icon"></i>
                    <span>YÜCEER KERESTE</span>
                </Link>
                <nav className="nav-desktop">
                    <Link to="/" className="nav-link">Anasayfa</Link>
                    <Link to="/kurumsal" className="nav-link">Kurumsal</Link>
                    <Link to="/urunler" className="nav-link">Ürünler</Link>
                    <Link to="/belgeler" className="nav-link">Belgelerimiz</Link>
                    <Link to="/iletisim" className="nav-link">İletişim</Link>
                </nav>
                <div className="header-actions">
                    <Link to="/iletisim" className="btn btn-primary">Teklif Al</Link>
                    <button
                        className="mobile-menu-btn"
                        aria-label="Toggle Menu"
                        onClick={toggleMobileMenu}
                    >
                        <i className="ph ph-list"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`} id="mobileDrawer">
                <div className="drawer-header">
                    <span className="logo-text">YÜCEER KERESTE</span>
                    <button
                        className="drawer-close"
                        aria-label="Close Menu"
                        onClick={toggleMobileMenu}
                    >
                        <i className="ph ph-x"></i>
                    </button>
                </div>
                <nav className="nav-mobile">
                    <Link to="/" className="drawer-link" onClick={toggleMobileMenu}>Anasayfa</Link>
                    <Link to="/kurumsal" className="drawer-link" onClick={toggleMobileMenu}>Kurumsal</Link>
                    <Link to="/urunler" className="drawer-link" onClick={toggleMobileMenu}>Ürünler</Link>
                    <Link to="/belgeler" className="drawer-link" onClick={toggleMobileMenu}>Belgelerimiz</Link>
                    <Link to="/iletisim" className="drawer-link" onClick={toggleMobileMenu}>İletişim</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
