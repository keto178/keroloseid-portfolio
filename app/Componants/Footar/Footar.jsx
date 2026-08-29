import Link from "next/link"
import "./Footar.css"

export default function Footar() {
    return (
    <footer className="site-footer">
        <div className="site-footer__top">
            <div className="site-footer__identity">
                <h2>Kerolos Eid</h2>
                <p className="site-footer__role">JUNIOR FRONT-END DEVELOPER | REACT • NEXT.JS • TYPESCRIPT</p>
                <p className="site-footer__location">
                    <span className="site-footer__location-icon" aria-hidden="true">⌖</span>
                    Cairo, Egypt
                </p>
            </div>

            <div className="site-footer__links">
                <nav className="site-footer__nav" aria-label="Footer navigation">
                    <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Projects">Projects</Link>
                    <Link href="/Services">Services</Link>
                    <Link href="/Blog">Blog</Link>
                    <Link href="/Contact">Contact</Link>
                </nav>
                <nav className="site-footer__socials" aria-label="Social links">
                    <a href="https://www.linkedin.com/in/kerolos-eid-70aa08388" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/keto178" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://wa.me/201270233635" target="_blank" rel="noreferrer">WhatsApp</a>
                    <a href="mailto:kerolos.eid159@email.com">Email</a>
                </nav>
            </div>
        </div>

        <div className="site-footer__bottom">
            <p>&copy; {new Date().getFullYear()} Kerolos Eid. All rights reserved.</p>
        </div>
    </footer>
    )
}
