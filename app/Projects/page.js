import './Projects-page.css'
import Image from 'next/image';
import { projects } from '../data/projects';
export default function Projects() {
    const skils = ["All","Frontend","React",'Next.js',"Javascript"];
    return (
    
    <div className='continer projects-page'>
        <div className="item1">
            <p>Portfolio</p>
            <h2>Projects</h2>
            <div className="skils-p">
                {skils.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </div>
        <div className="item2">
            <div className="continer">
                <div className="projects-grid">
                    {projects.map((project, index)=>(
                        <article className="card" key={`${project.title}-${index}`}>
                            <Image 
                            src={project.image}
                            alt={project.title}
                            width={350}
                            height={200}
                            className="project-img"
                            />
                            <div className="card-content">
                            <h5>{project.title}</h5>
                            <p>{project.description}</p>
                            <div className='tech'>
                                {project.tech.map((item) => <span key={item}>{item}</span>)}
                            </div>
                            <div className='buttons'>
                            <a href={project.demo}>Live Dimo</a>
                            <a href={project.github}>Github</a>
                            </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
    );
}
