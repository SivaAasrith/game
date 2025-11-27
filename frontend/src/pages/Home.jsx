import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="landing-page">
            <div className="container">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-text">
                        <h1>DISCOVER<br />COLLECT GAME<br />FROM US</h1>
                        <p>
                            Minecraft received critical acclaim, winning several awards and later being cited as one of the greatest video games.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start' }}>
                            <Link to="/signup" className="btn-primary">GET STARTED</Link>
                            <Link to="/events" className="btn-outline">EXPLORE</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        {/* Using a portal-like image from the provided list or a placeholder that fits */}
                        <img src="https://i.pinimg.com/1200x/eb/98/01/eb9801fad72bfe4c2988a851edc89767.jpg" alt="Portal" style={{ borderRadius: '20px', border: '2px solid var(--primary)' }} />
                    </div>
                </section>

                {/* Top Products */}
                <h2 className="section-header">CHECK OUR TOP PRODUCT</h2>
                <section className="top-products">
                    <div className="product-card">
                        <div className="product-img" style={{ backgroundImage: 'url(https://i.pinimg.com/1200x/76/f4/c1/76f4c19a466df5922af6fd5573bc7d5c.jpg)' }}></div>
                        <div className="product-info">
                            <h3>GENSHIN IMPACT - VERSION 3.3</h3>
                            <p>Meet the Wanderer and Faruzan, and join in Teyvat's most popular card game! Check out what's new at Gameloft!</p>
                            <Link to="/games/genshin" className="btn-outline" style={{ fontSize: '14px', padding: '8px 24px' }}>READ MORE</Link>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-img" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/07/a9/2e/07a92e366310255ac71f995c4e215336.jpg)' }}></div>
                        <div className="product-info">
                            <h3>HELLO GAMERS</h3>
                            <p>Wanderer and Faruzan, and join in Teyvat's most popular card game! Check out what's new at Gameloft!</p>
                            <Link to="/blog/hello" className="btn-outline" style={{ fontSize: '14px', padding: '8px 24px' }}>READ MORE</Link>
                        </div>
                    </div>
                </section>

                {/* Latest Games */}
                <h2 className="section-header">LATEST GAMES</h2>
                <div className="game-grid">
                    {[
                        'https://i.pinimg.com/736x/71/8b/d0/718bd02748429167b12b1b05a7e1da4f.jpg',
                        'https://i.pinimg.com/1200x/1c/8f/ff/1c8fff7cd9222f1a694be5d4f2f4428d.jpg',
                        'https://i.pinimg.com/1200x/f7/e0/a6/f7e0a65dd64d2975e1fa7d48bcbfd6ef.jpg',
                        'https://i.pinimg.com/736x/ad/ea/d2/adead29662c0c8692980b37cbc6ca805.jpg'
                    ].map((url, i) => (
                        <div key={i} className="game-card" style={{ height: '200px', backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Image only for this grid as per reference style */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter */}
            <section className="newsletter">
                <div className="container">
                    <h2>Join Our Newsletter</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="For Latest Update Send Mail" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
