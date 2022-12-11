import React from 'react';
import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast';

const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3exi03d', 'template_oqyvpd1', e.target, 'bm9ClYweWLF1HXRT1')
      .then((result) => {
        toast.success('Congratulation your message send Successfully')
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };


  return (
    <div className='mt-10 mx-2 '>
      <h2 className='text-[#f7e4d8] font-bold text-3xl text-center'>CONTACT</h2>
      <h2 className=' text-center text-[#f7e4d8] text-2xl'>Feel free to send an e-mail on <a className='underline-offset-8 underline ' href="mailto:shafinur512@gmail.com">shafinur512@gmail.com</a></h2>
      <div className=''>
        <p className='text-center text-xl py-5 font-thin text-[#f7e4d8]'>Alternatively, you can also drop-in a mail here!</p>
        <div className='flex  justify-center'>

          <form
            onSubmit={sendEmail}
            className='flex flex-col w-full md:w-3/5 p-10  justify-center md:ml-16 gap-10 '>
            <input type="text" required className='py-4 text-[#cca79a] pl-3 placeholder:text-xl  text-xl  bg-transparent border-b border-[#c602a891]' name="name" id="name" placeholder='Please Enter Your Name' />
            <input type="email" required className='py-2 text-[#cca79a] text-xl pl-3 placeholder:text-xl  bg-transparent border-b  border-[#c602a891] ' name="email" id="" placeholder='Please Enter Your Email' />
            <textarea className="textarea required py-10 text-xl text-[#cca79a] pl-3 bg-transparent placeholder:text-2xl textarea-[#c602a891] mt-2 rounded-0 textarea-about" name='message' placeholder="Message"></textarea>
            <button className='border border-[#c602a891] w-1/2 py-2 rounded text-xl text-[#cca79a] hover:bg-[#0078aa] hover:text-white hover:border-[#11040400]' type="submit">Send Mail</button>
          </form>
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;