import Link from 'next/link'
import './Contact.css'
Link
export default function Contact() {
    return (
    <div className='continar contact-section'>
        <div className="header">
            <p>Contact</p>
            <h2>Contact Kerolos Eid</h2>
        </div>
        <div className="continar-contact">
            <div className="item1">
                <h3>Get in touch</h3>
                <p className='pp'>Let’s discuss how I can help build modern, responsive, and high-performance web experiences. I’m open to Junior Front-End Developer roles, freelance projects, and collaborations, specializing in React, Next.js, and clean, maintainable code.</p>
                <a href="mailto:kerolos.eid159@gmail.com"><div><p>Email</p><p>kerolos.eid159@gmail.com</p></div></a>
                <a href="tel:+201270233635"><div><p>Phone</p><p>+20 12 70233635</p></div></a>
                <a href="https://wa.me/201270233635"><div><p>WhatsApp</p><p>WhatsApp</p></div></a>
                <a href="https://www.linkedin.com/in/kerolos-eid-70aa08388"><div><p>LinkedIn</p><p>LinkedIn</p></div></a>
                <a href="https://github.com/keto178"><div><p>GitHub</p><p>GitHub</p></div></a>
                <Link href="/cv kerolos-eid-159.pdf" className='btn-cv'>Download CV</Link>
            </div>
            <div className="item2 availability-card">
                <p className="availability-label">AVAILABILITY</p>
                <h3>Open to opportunities</h3>
                <p className="availability-description">Open to Junior Front-End Developer roles, freelance projects, and collaborations. I create modern, responsive, and high-performance web applications with React & Next.js — focused on clean, maintainable code, smooth user experiences, and real business value.</p>
                <div className="availability-actions">
                    <p className="availability-status">Currently available for new work</p>
                    <a className="availability-cta" href="https://wa.me/201270233635">Start a conversation</a>
                </div>
            </div>
        </div>
    </div>
    )
}
