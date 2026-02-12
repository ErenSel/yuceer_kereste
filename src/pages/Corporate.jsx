import SeoHead from '../components/SeoHead'
import aboutFactoryImg from '../assets/about-factory.png' // Utilizing existing asset

const Corporate = () => {
    return (
        <>
            <SeoHead
                title="Kurumsal - Hakkımızda"
                description="Yüceer Kereste hakkında detaylı bilgi. 1954'ten beri Isparta'da kereste ve palet üretimi yapıyoruz. Tarihçemiz, misyonumuz ve vizyonumuz."
            />

            <section className="page-header bg-dark text-white section-padding-sm">
                <div className="container">
                    <h1 className="page-title">Hakkımızda</h1>
                    <ul className="breadcrumbs">
                        <li><a href="/">Anasayfa</a></li>
                        <li>Kurumsal</li>
                    </ul>
                </div>
            </section>

            <section className="section-padding">
                <div className="container grid-2 align-center">
                    <div className="about-image-wrapper">
                        <img src={aboutFactoryImg} alt="Yüceer Kereste Factory" className="about-image" />
                        <div className="experience-badge">
                            <span className="years">70</span>
                            <span className="text">Yıllık<br />Tecrübe</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-title">Köklü Geçmiş, Güçlü Gelecek</h2>
                        <p className="mb-md">
                            1954 yılında Isparta'da küçük bir atölye olarak başlayan yolculuğumuz, bugün 10.000 m² kapalı alana sahip modern bir entegre tesise dönüşmüştür.
                            Yüceer Kereste olarak, 3. kuşak yöneticilerimizle birlikte geleneksel ahşap ustalığını modern teknolojilerle birleştiriyoruz.
                        </p>
                        <p className="mb-md">
                            Yıllık 50.000 m³ tomruk işleme kapasitemiz ile inşaat sektörüne, mobilya sanayisine ve lojistik sektörüne hammadde sağlıyoruz.
                            Sürdürülebilirlik ilkemiz gereği, işlediğimiz her tomruğun Orman Genel Müdürlüğü denetiminde endüstriyel plantasyonlardan elde edildiğini garanti ediyoruz.
                        </p>

                        <h3 className="h4 mt-lg mb-sm">Vizyonumuz</h3>
                        <p className="mb-md">
                            Türkiye'nin ahşap sektöründeki öncü markalarından biri olarak, yenilikçi üretim teknikleriyle global pazarda rekabet edebilir ürünler sunmak.
                        </p>

                        <h3 className="h4 mt-md mb-sm">Misyonumuz</h3>
                        <p>
                            Müşterilerimize en kaliteli ahşap ürünlerini, zamanında ve doğru fiyatla sunarak projelerine değer katmak.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Corporate
