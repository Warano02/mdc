import SignupDialog from '@/components/SignupDialog'
import React from 'react'

function ContactUs() {
  return (
    <main className='w-full h-full relative'>
      <section className='h-[32em] w-full relative' style={{
        background: `url(/img/bg/contact_us.jpg),
    linear-gradient(
      to left,
      rgb(25, 13, 136),
      rgba(9, 9, 243, 0.726),
      rgb(4, 0, 255)
    )`, backgroundPosition: "center"
      }}>
        <div className="w-[95%] h-full flex flex-col pl-[3em] justify-center" style={{
          background: ` linear-gradient(
    to left,
    rgba(89, 121, 209, 0.123),
    rgba(9, 19, 110, 0.904)
  )`}}>
          <div className="w-[41em] h-[26em] ml-[2em] relative">
            <div className="w-full h-[12em] flex items-center pl-[2em] relative">
              <h1 className='text-[3em]  text-white font-bold'>Contact Us</h1>
            </div>
            <p className='text-[1.2em] w-[80%] ml-[2em] text-white'>
              We provide the guidance and services to make your Canadian
              immigration process easy, affordable, and reliable.
            </p>
            <SignupDialog>
              <button className='w-[12em] h-[2.5em] font-bold text-white mt-[2em] ml-[2em] border border-white cursor-pointer transition-all hover:bg-white hover:text-primary'>GET STARTED</button>
            </SignupDialog>
          </div>
        </div>
      </section>

      <section className='h-[55em] flex gap-[2em] relative justify-center items-center'>
        <div className="w-[22em] h-[95%] ml-[1em] relative">
          <h1 className='mt-[1em] text-3xl text-primary mb-[1em]'>Regulated Canadian Immigration Consultants</h1>
          <div className="w-full relative space-y-[1em]">
            <div className="w-[95%]">
              <h2  className='text-[1.3em] text-primary'>ADDRESS</h2>
              <p className='text-[rgb(59, 58, 58)]'>
                700 W Pender St, Vancouver,<br />
                BC V6C 1GB <br />
                Canada
              </p>
            </div>
            <div className="w-[95%]">
              <h2>PHONE</h2>
              <a href="#" title="number of phone">+1 604 449 1100</a>
            </div>
            <div className="w-[95%]">
              <h2>EMAIL</h2>
              <a href="#" title="EMAIL">support@mdccanada.ca</a>
            </div>
            <div className="w-[95%] i">
              <span title="Facebook"><i className="bx bxl-facebook"></i></span>
              <span title="Instagram"><i className="bx bxl-instagram"></i></span>
              <span title="LinkedIn"><i className="bx bxl-linkedin"></i></span>
              <span title="Youtube"><i className="bx bxl-youtube"></i></span>
            </div>
          </div>
        </div>
        <div className="w-[55em] h-[95%] relative ">
          <h3 className='text-2xl mt-[2em] ml-[1em] text-primary '>Leave a message</h3>
          <form className='w-[90%] h-full space-y-[1em] ml-[1.5em] mt-[1em]'>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className='w-[98%] h-[2.5em] pl-[1em]'
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className='w-[98%] h-[2.5em] pl-[1em]'
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
              required
            ></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </section>

    </main>
  )
}

export default ContactUs