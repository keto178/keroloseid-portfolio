import React from 'react'
import Image from 'next/image'
import './Project.css'
import { projects } from '../../data/projects'

export default function Project() {
    return (
        <section id="projects" className="home-projects">
            <div className="home-projects__header">
                <div>
                    <p>Selected Work</p>
                    <h2>Projects</h2>
                </div>
                <a href="/Projects" className="home-projects__all">All projects <span aria-hidden="true">&#8599;</span></a>
            </div>
            <div className="home-projects__grid">
                {projects.map((project, index) => (
                    <article className="home-project-card" key={`${project.title}-${index}`}>
                        <Image src={project.image} alt={project.title} width={480} height={315} className="home-project-card__image" />
                        <div className="home-project-card__content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="home-project-card__tech">
                                {project.tech.map((item) => <span key={item}>{item}</span>)}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
