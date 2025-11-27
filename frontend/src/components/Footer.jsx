export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Gaming Portal</h3>
                    <p>Your ultimate destination for gaming events and community.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Platform</h4>
                        <a href="#">Events</a>
                        <a href="#">Tournaments</a>
                        <a href="#">Community</a>
                    </div>
                    <div className="link-group">
                        <h4>Support</h4>
                        <a href="#">Help Center</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Gaming Portal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
