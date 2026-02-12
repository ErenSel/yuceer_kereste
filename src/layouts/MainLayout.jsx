import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

const MainLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    )
}

export default MainLayout
