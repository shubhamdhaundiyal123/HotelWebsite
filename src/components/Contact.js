import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact" id="contact" >
        <h1 className="heading">
            Contact <span>Us</span>
        </h1>
        <div className="row">
        <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771590095!2d77.93473288161115!3d30.32555080624828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1695005660171!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe>
        <form action="">
            <h3>Get in Touch</h3>
            <div className="inputBox">
                <span className="fas fa-user"></span>
                <input type="text" placeholder="Name" />
            </div>
            <div className="inputBox">
                <span className="fas fa-envelope"></span>
                <input type="email" placeholder="Email" />
            </div>
            <div className="inputBox">
                <span className="fas fa-phone"></span>
                <input type="number" placeholder="Number" />
            </div>
            <input type="submit" value="contact-now" className='btn' />
        </form>
        </div>
    </section>
    </>
  )
}

export default Contact
