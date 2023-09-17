import React from 'react'
import AboutImg from "../assets/images/about-img"
const About = () => {
  return (
    <>
    <section className="about" id="about">
    <h1 className='heading'><span>about</span> us</h1>
    <div className="row">
        <div className="image">
            <img src={AboutImg} alt="" />
        </div>
        <div className="content">
            <h3>What Makes Our Food Special </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem culpa dignissimos modi unde labore temporibus ullam reiciendis. A ducimus iste vero earum alias adipisci maxime optio dignissimos iure deleniti. Aliquam similique tempore ab aperiam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur? Qui quos, eos facere laborum repellendus hic nostrum neque officia.</p>
            <a href="#" className='btn'>Learn More</a>
        </div>
    </div>
    </section>
    </>
  )
}

export default About
