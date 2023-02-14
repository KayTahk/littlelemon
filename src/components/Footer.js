import footerlogo from './images/Asset 9@4x.png';

function Footer() {
    return (
        <>
    <div className="footer">
        <div className="footer-logo"><img src={footerlogo} alt="logo"></img></div>
        <ul className="footer-contact"><h2 className="footer-contact-title">CONTACT US</h2>
            <li>1441 Tator Patch Road, Chicago, IL 60605</li>
            <li>(555) 555-5555</li>
            <li>contact@littlelemon.com</li>
        </ul>
        <ul className="footer-social"><h2 className="footer-social-title">SOCIAL <br/>MEDIA LINKS</h2>
            <li><a href='https://www.facebook.com' target={'_blank'} rel="noopener noreferrer external">FACEBOOK</a></li>
            <li><a href='https://www.instagram.com' target={'_blank'} rel="noopener noreferrer external">INSTAGRAM</a></li>
            <li><a href='https://www.twitter.com' target={'_blank'} rel="noopener noreferrer external">TWITTER</a></li>
        </ul>
    </div>
    </>
    );
}

export default Footer;