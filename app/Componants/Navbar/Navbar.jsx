import Link from "next/link"
import "../Navbar/Navbar.css"
export default function Navbar() {
    return (
    <div >
        <nav className="site-navbar">
            <div className="continer" >
                <div className="name">
                    <Link href="/"><h3>Kerolos eid</h3></Link>
                </div>
                <div className="nav-link">
                    <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    {/* <Link href="/Experience">Experience</Link> */}
                    <Link href="/Projects">Projects</Link>
                    <Link href="/Services">Services</Link>
                    <Link href="/Blog">Blog</Link>
                    <Link href="/Contact">Contact</Link>
                </div>
                <div className="Btn">
                    <Link href="/cv-kerolos-eid-159.pdf" className="btn-cv" >
                    <span>Download CV</span>
                    <span className="btn-cv__icon" aria-hidden="true">↓</span>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
    )
}
