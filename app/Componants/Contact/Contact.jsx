import Link from 'next/link'
import './Contact.css'

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
                <p className='pp'>Let&apos;s discuss how I can help build modern, responsive, and high-performance web experiences. I&apos;m open to Junior Front-End Developer roles, freelance projects, and collaborations, specializing in React, Next.js, and clean, maintainable code.</p>
                <a href="mailto:kerolos.eid159@gmail.com" className="contact-row"><span className="contact-label">Email</span><span className="contact-value">kerolos.eid159@gmail.com</span></a>
                <a href="tel:+201270233635" className="contact-row"><span className="contact-label">Phone</span><span className="contact-value">+20 12 70233635</span></a>
                <a href="https://wa.me/201270233635" target="_blank" rel="noreferrer" className="contact-row"><span className="contact-label">WhatsApp</span><span className="contact-value">WhatsApp</span></a>
                <a href="https://www.linkedin.com/in/kerolos-eid-70aa08388" target="_blank" rel="noreferrer" className="contact-row"><span className="contact-label">LinkedIn</span><span className="contact-value">LinkedIn</span></a>
                <a href="https://github.com/keto178" target="_blank" rel="noreferrer" className="contact-row"><span className="contact-label">GitHub</span><span className="contact-value">GitHub</span></a>
                <Link href="/Kerolos_Eid_FrontEnd_Developer_CV.pdf" className='btn-cv'>Download CV</Link>
            </div>
            <div className="item2 availability-card">
                <p className="availability-label">AVAILABILITY</p>
                <h3>Open to opportunities</h3>
                <p className="availability-description">Open to Junior Front-End Developer roles, freelance projects, and collaborations. I create modern, responsive, and high-performance web applications with React &amp; Next.js &mdash; focused on clean, maintainable code, smooth user experiences, and real business value.</p>
                <div className="availability-actions">
                    <p className="availability-status">Currently available for new work</p>
                    <a className="availability-cta" href="https://wa.me/201270233635" target="_blank" rel="noreferrer">Start a conversation</a>
                </div>
            </div>
        </div>
    </div>
    )
}
