import { useState, useEffect, useRef } from 'react'
import '../styles/chat-widget.css'

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Merhaba! 👋 Ben Yüceer Kereste'nin dijital asistanıyım. Projeniz için doğru ağaç türü, ölçüler ve metraj konusunda size yardımcı olabilirim. Nasıl başlayalım?",
            sender: 'ai'
        }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [history, setHistory] = useState([]) // For API context
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    const quickReplies = [
        { text: "🏠 Çatı Önerisi", prompt: "Çatı yapımı için hangi kereste türünü ve ebatlarını önerirsin?" },
        { text: "📦 Palet Çözümleri", prompt: "Lojistik ihtiyaçlarım için hangi palet türleri (EPAL, TURPAL) uygun?" },
        { text: "🪵 Lambiri Kaplama", prompt: "Duvar veya tavan kaplaması için lambiri seçenekleri nelerdir?" },
        { text: "📝 Teklif Al", prompt: "Teklif almak istiyorum, süreç nasıl işliyor?" }
    ]

    useEffect(() => {
        // Auto-open greeting after delay if first time
        const timer = setTimeout(() => {
            if (!isOpen) {
                setIsOpen(true)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        scrollToBottom()
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 300)
        }
    }, [messages, isOpen])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }

    const handleSend = async (messageText) => {
        const text = messageText || input.trim()
        if (!text || isLoading) return

        // Add user message
        const userMsg = { id: Date.now(), text, sender: 'user' }
        setMessages(prev => [...prev, userMsg])
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: history,
                    context: window.location.pathname // Send current page
                })
            })

            if (!response.ok) {
                try {
                    await response.json()
                } catch {
                    // Ignore parse errors and use fallback UI message.
                }
                setIsLoading(false)
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: "Üzgünüm, şu an bir bağlantı sorunu yaşıyorum. Lütfen daha sonra tekrar deneyin veya telefonla bize ulaşın.",
                    sender: 'ai error'
                }])
                return
            }

            let data
            try {
                data = await response.json()
            } catch {
                setIsLoading(false)
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: "Üzgünüm, şu an bir bağlantı sorunu yaşıyorum. Lütfen daha sonra tekrar deneyin veya telefonla bize ulaşın.",
                    sender: 'ai error'
                }])
                return
            }

            setIsLoading(false)

            if (data.error || !data.text) {
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: "Üzgünüm, şu an bir bağlantı sorunu yaşıyorum. Lütfen daha sonra tekrar deneyin veya telefonla bize ulaşın.",
                    sender: 'ai error'
                }])
            } else {
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    text: data.text,
                    sender: 'ai'
                }])

                // Update history
                setHistory(prev => [
                    ...prev,
                    { role: "user", parts: [{ text }] },
                    { role: "model", parts: [{ text: data.text }] }
                ])

                // Check for CTA
                if (data.text.includes("Teklif İste") || data.text.includes("Teklif Al")) {
                    // Logic handled by rendering, system messages could be added here if needed
                }
            }

        } catch (error) {
            console.error(error)
            setIsLoading(false)
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Üzgünüm, şu an bir bağlantı sorunu yaşıyorum. Lütfen daha sonra tekrar deneyin veya telefonla bize ulaşın.",
                sender: 'ai error'
            }])
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend()
    }

    // Basic Markdown Parser (simplified for React)
    const renderMessage = (text) => {
        // This is a simple parser. For production, consider using react-markdown
        let html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')

        return <div dangerouslySetInnerHTML={{ __html: html }} />
    }

    return (
        <div id="ai-chat-widget" className={`chat-widget ${isOpen ? 'open' : ''}`}>
            <button
                id="chat-launcher"
                className={`chat-launcher ${isOpen ? 'active' : ''}`}
                aria-label={isOpen ? "Kapat" : "Sohbeti Başlat"}
                onClick={toggleChat}
            >
                <i className={`ph ${isOpen ? 'ph-x' : 'ph-chat-teardrop-text'}`}></i>
                {!isOpen && <span className="notification-badge">1</span>}
                <span className="launcher-text">Kereste Danışmanı</span>
            </button>

            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="header-info">
                        <div className="chat-avatar">
                            <i className="ph ph-tree-evergreen"></i>
                        </div>
                        <div className="header-text">
                            <h3>Yüceer Asistan</h3>
                            <span className="status">Çevrimiçi</span>
                        </div>
                    </div>
                    <button id="chat-close" className="close-btn" aria-label="Kapat" onClick={toggleChat}>
                        <i className="ph ph-x"></i>
                    </button>
                </div>

                <div id="chat-messages" className="chat-messages">
                    {messages.map(msg => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            <div className="message-content">
                                {renderMessage(msg.text)}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message ai loading">
                            <div className="message-content">
                                <div className="typing-indicator"><span></span><span></span><span></span></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="quick-actions">
                    {quickReplies.map((reply, index) => (
                        <button
                            key={index}
                            className="quick-btn"
                            onClick={() => handleSend(reply.prompt)}
                        >
                            {reply.text}
                        </button>
                    ))}
                </div>

                <div className="chat-input-area">
                    <input
                        type="text"
                        id="chat-input"
                        placeholder="Sorunuzu yazın..."
                        aria-label="Mesaj yazın"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        ref={inputRef}
                    />
                    <button
                        id="chat-send"
                        className="send-btn"
                        aria-label="Gönder"
                        onClick={() => handleSend()}
                    >
                        <i className="ph ph-paper-plane-right"></i>
                    </button>
                </div>

                <div className="chat-footer">
                    <span>Powered by Google Gemini</span>
                </div>
            </div>
        </div>
    )
}

export default ChatWidget
