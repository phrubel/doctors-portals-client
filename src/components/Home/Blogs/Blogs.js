import React from 'react';
import './Blogs.css'
import BlogDetails from '../BlogDetails/BlogDetails';
import ryan from '../../../images/ryan.png'
import cristina from '../../../images/cristina.png'

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: ryan,
        date: '15 June 2020'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: cristina,
        date: '23 Feb 2021'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Ryan',
        authorImg: '',
        date: '12 April 2018'
    }
]




const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogDetails blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>

    );
};

export default Blogs;