'use client'

import { useState } from 'react'
import Link from "next/link"
import "../Navbar/Navbar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <div>
        <nav className="site-navbar">
            <div className="continer">
                <div className="name">
                    <Link href="/"><h3>Kerolos eid</h3></Link>
                </div>

                <button
                    className={`hamburger${isOpen ? ' hamburger--active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                >
                    <span className="hamburger__line" />
                    <span className="hamburger__line" />
                    <span className="hamburger__line" />
                </button>

                <div className={`nav-link${isOpen ? ' nav-link--open' : ''}`}>
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/Projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="/Blog" onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link href="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
                <div className={`Btn${isOpen ? ' Btn--open' : ''}`}>
                    <Link href="/Kerolos_Eid_FrontEnd_Developer_CV.pdf" className="btn-cv">
                        <span>Download CV</span>
                        <span className="btn-cv__icon" aria-hidden="true">↓</span>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
    )
}
