import { useEffect, useState } from 'react';
import './BlogHome.css'
import BlogHome from './BlogHome';
import SectionTitle from '../../../Components/SectionTitle';

const BlogsHome = () => {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div >
            <div className='md:w-7/12 mx-auto text-center'><SectionTitle  subHeading={"Blogs"} heading={"Let's life become easyer"}></SectionTitle></div>
            <div className='blogsHome  lg:grid grid-cols-3 gap-4	mt-9 '>
                {
                    blogs.map(blog=><BlogHome
                     key={blog._id}
                     blogItem={blog}
                    ></BlogHome>)
                }
            </div>
        </div>
    );
};

export default BlogsHome;