function Footer() {
    return (
    <div className="footer">
        <div className="footer-logo"><img alt="logo"></img></div>
        <ul className="doormat-nav"><h2 className="doormat-nav-title">DOORMAT NAVIGATION</h2>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>RESERVATIONS</li>
            <li>ORDER ONLINE</li>
            <li>LOGIN</li>
        </ul>
        <ul className="footer-contact"><h2 className="footer-contact-title">CONTACT</h2>
            <li>ADDRESS</li>
            <li>PHONE NUMBER</li>
            <li>EMAIL</li>
        </ul>
        <ul className="footer-social"><h2 className="footer-social-title">SOCIAL MEDIA LINKS</h2>
            <li>FACEBOOK</li>
            <li>INSTAGRAM</li>
            <li>TWITTER</li>
        </ul>
    </div>
    );
}

export default Footer;