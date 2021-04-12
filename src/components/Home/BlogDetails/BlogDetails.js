import React from 'react';




const BlogDetails = (props) => {
        const {date,title,author,description,authorImg }=props.blog


    return (
        <div className="card shadow-sm">
        <div className="card-header d-flex  align-items-center">
            <img className="mx-3" src={authorImg} alt="" width="60"/>
            <div>
                <h6 style={{ color: "#1cc7c1" }}>{author}</h6>
                <p className="m-0">{date}</p>
            </div>
        </div>
        <div className="card-body">
            <h5>{title}</h5>
            <p className="card-text text-secondary mt-4">{description}</p>
        </div>
        
   </div>
    );
};

export default BlogDetails;