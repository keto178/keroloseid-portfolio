import React from 'react'
import './About.css'

export default function About() {
    return (
    <section className='about-continer'>
        <div className="item1">
            <p>ABOUT KEROLOS EID</p>
            <h2>About kerolos eid</h2>
        </div>
        <div className="item2">
            <div className="section">
                <h3>Frontend Development</h3>
                <p>I craft high-quality responsive React interfaces, landing pages, and dashboards—with fast performance and clean architecture that streamline development and long-term maintenance.</p>
            </div>
            <div className="section">
                <h3>Web Applications</h3>
                <p>I build scalable real-world web applications such as e-commerce platforms, restaurant ordering systems, and inventory dashboards—featuring clear user flows and seamless end-to-end experiences.</p>
            </div>
            <div className="section">
                <h3>Clean Code & UX</h3>
                <p>I focus on writing well-structured, reusable components, maintaining professional Git workflows, and delivering simple yet polished user experiences that reflect product quality and attention to detail.</p>
            </div>
        </div>
    </section>
    )
}
