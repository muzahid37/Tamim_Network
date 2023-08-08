

const Blog = ({blogItem}) => {
    // console.log(blogItem)
    const {img,blog,date,category}=blogItem;
    // console.log(img,blog,date,category)
    return (
        <div>
            <section className="blog border  rounded-xl padding-6">
                <img className="w-10/12 BlogHomeImg z-1 mx-auto lg:w-full" src={img} alt="" />
                <div className="w-10/12 mx-auto lg:w-full">
                    <span style={{background:"#fe9043"}} className="rounded-full z-10 text-white p-3 m-14 ">{category}</span>
                    <h1 style={{color:"#089fac"}} className="p-3 m-4 border-b-2	 ">{blog}</h1>
                </div>
                <div className="BlogHomeBottom w-10/12 mx-auto lg:w-full ">
                    <span className="p-3 uppercase">{date}</span>
                    <span className="BlogHomeBottomMorebtn">&#8594;</span>
                </div> 
             </section>
        </div>
    );
};

export default Blog;