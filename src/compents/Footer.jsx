function Footer() {
    return ( 
        <footer>
            <div className="container">
                <div className="foot-top">
                    <div className="right">
                        <p>Our platform is trusted by millions & features best updated movies all around the world.</p>
                    </div>
                    <div className="left">
                        <ul className="nav-links">
                            <li><a href="#">Home </a></li>
                            <li>/</li>
                            <li><a href="#">Discover </a></li>
                            <li>/</li>
                            <li><a href="#">Influencec </a></li>
                            <li>/</li>
                            <li><a href="#">Release</a></li>
                        </ul>
                        <ul className="soial">
                            <li><i className="fa fa-instagram"></i></li>
                            <li><i className="fa fa-twitter-square"></i></li>
                            <li><i className="fa fa-facebook-square"></i></li>
                            <li><i className="fa fa-google" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="foot-down">
                    <ul>
                        <li>Privacy policy</li>
                        <li>Term of service</li>
                        <li>Language</li>
                    </ul>
                    <p className="copy-right">
                        &#169; Badawy | 2024
                    </p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;