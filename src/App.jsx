import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Corporate from './pages/Corporate'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Documents from './pages/Documents'
import Contact from './pages/Contact'
import { Blog, BlogPost } from './pages/Blog'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="kurumsal" element={<Corporate />} />
                    <Route path="urunler" element={<Products />} />
                    <Route path="urunler/:slug" element={<ProductDetail />} />
                    <Route path="belgeler" element={<Documents />} />
                    <Route path="iletisim" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:slug" element={<BlogPost />} />
                    <Route path="*" element={<Home />} /> {/* Fallback to Home or 404 */}
                </Route>
            </Routes>
        </Router>
    )
}

export default App
