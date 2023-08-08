import { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import SectionTitle from "../../Components/SectionTitle";
// import BannerImg from '../../assets/aboutUs/aboutUs1.jpg'
import './Blogs.css'
import Blog from "./blog";


const Blogs = () => {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div>
            <section className="blogs_banner">
               <Banner BannerHeader={"BLOGS"}></Banner>
            </section>
            <section>
                 <div >
                    <div className='md:w-7/12 mx-auto text-center'><SectionTitle  subHeading={"Blogs"} heading={"Let's life become easyer"}></SectionTitle></div>
                    <div className='blogsHome  lg:grid grid-cols-2 gap-4 mt-9 '>
                        {
                            blogs.map(blog=><Blog
                             key={blog._id}
                             blogItem={blog}
                            ></Blog>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;