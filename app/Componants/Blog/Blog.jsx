import Link from 'next/link'
import './Blog.css'
import { Blogs } from '@/app/data/Blogs'
export default function Blog() {
    return (
    <div className='continar blog-section'>
        <div className="item1">
            <p>Insights</p>
            <h2>Latest from the blog</h2>
        </div>
        <div className="item3">
            {Blogs.map((Blog,index)=>(
                <div className="blog" key={`${Blog.title},${index}`}>
                <Link href=""><h3>{Blog.title}</h3></Link>
                <p>{Blog.description}</p>
                <Link href=""><p className='link-p'>{Blog.Tags}</p></Link>
            </div>
            ))}
            
            
        </div>
    </div>
    )
}
