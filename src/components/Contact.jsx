import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';
//toastify notification
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j2pjf2h', 'template_0pdui2d', form.current, 'IThx4yL54Y3SqUUnB')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  const notify = () => {
    toast.success('Message Sent Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">Contact <span className="text-cyan-600">Me</span></h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
          <input type="text" name='user_name' placeholder="Your Name" required />
          <input type="email" name='user_email' placeholder="Your Email Address" required />
          <textarea name='message' placeholder="Your Message" rows={10} required></textarea>
          <button type='submit' value="Send" onClick={notify} className="btn-primary w-fit" required>Send Message</button>
          <ToastContainer />
          </form>

          <div className=" flex flex-col gap-7">
           
                <div className="flex flex-wrap gap-4 w-fit items-center">
                  <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <Icon icon="mdi:email" />
                  </div>
                  <p className="text-base">majekodunmidavid05@gmail.com</p>
                </div>

                <div className="flex flex-wrap gap-4 w-fit items-center">
                  <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <Icon icon="mdi:whatsapp" />
                  </div>
                  <p className="text-base">+234 8059385468</p>
                </div>

                <div className="flex flex-wrap gap-4 w-fit items-center">
                  <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <Icon icon="mdi:map-marker" />
                  </div>
                  <p className="text-base">Lagos, Nigeria</p>
                </div>

                 
              
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact