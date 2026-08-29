import { Blogs } from "../data/Blogs"
import Link from "next/link"
import "./Blog.css"
export default function Blog() {
    return (
    <div className='continar'>
        <div className="item1">
            <p>Blog</p>
            <h2> blog</h2>
        </div>
        <div className="item3">
            {Blogs.map((Blog,index)=>(
                <div className="blog" key={`${Blog.title},${index}`}>
                <h3>{Blog.title}</h3>
                <p>{Blog.description}</p>
                <div className="link-p" aria-label="Article tags">
                    {Blog.Tagsp.split("•").map((tag) => (
                        <span className="tag" key={tag.trim()}>{tag.trim()}</span>
                    ))}
                </div>
            </div>
            ))}
            
            
        </div>
    </div>
    )
}
