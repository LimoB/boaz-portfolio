import React, { useRef } from 'react';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { FaWhatsapp, FaLinkedin} from 'react-icons/fa6';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // Your EmailJS logic here
    console.log("Form submitted");
  };

  const contactData = [
    { 
      icon: <Mail size={24} />, 
      title: 'Email', 
      data: 'boazlimo07@gmail.com', 
      link: 'mailto:boazlimo07@gmail.com', 
      btn: 'Write me' 
    },
    { 
      icon: <FaWhatsapp size={24} />, 
      title: 'WhatsApp', 
      data: '+254 754 524 629', 
      link: 'https://api.whatsapp.com/send?phone=+254754524629&text=Hello Limo!', 
      btn: 'Write me' 
    },
    { 
      icon: <FaLinkedin size={24} />, 
      title: 'LinkedIn', 
      data: 'Boaz Limo', 
      link: 'https://www.linkedin.com/in/boaz-lim-307bkc/', 
      btn: 'Connect' 
    }
  ];

  return (
    <section className="py-24 px-4 bg-body transition-colors duration-400" id="contact">
      <div className="text-center mb-16">
        <span className="block text-xs uppercase tracking-[0.2em] text-text-light mb-2">Get in touch</span>
        <h2 className="text-2xl md:text-3xl font-bold text-first">Contact Me</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center max-w-[968px]">
        
        {/* Contact Info Cards */}
        <div>
          <h3 className="text-center text-lg font-semibold text-title mb-8">Talk to me</h3>
          
          <div className="grid gap-y-6 max-w-[360px] mx-auto lg:mx-0">
            {contactData.map((card, index) => (
              <div key={index} className="bg-container p-6 rounded-3xl text-center border border-transparent hover:border-first/20 shadow-sm transition-all duration-400 group">
                <div className="text-first mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-sm font-semibold text-title">{card.title}</h3>
                <span className="block text-xs text-text-light mb-4">{card.data}</span>
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1 text-xs text-first font-medium hover:gap-3 transition-all"
                >
                  {card.btn} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-center text-lg font-semibold text-title mb-8">Write me your project</h3>
          
          <form ref={form} onSubmit={sendEmail} className="grid gap-y-10 max-w-[460px] mx-auto">
            {/* Name Input */}
            <div className="relative group">
              <input 
                type="text" 
                name="user_name" 
                placeholder=" "
                className="peer w-full border-2 border-text-light/30 bg-transparent rounded-2xl p-6 outline-none text-text focus:border-first transition-all placeholder-transparent" 
                required 
              />
              <label className="absolute left-6 top-1/2 -translate-y-1/2 text-sm text-text-light transition-all pointer-events-none
                peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-body peer-focus:px-2 peer-focus:text-first
                peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-body peer-[:not(:placeholder-shown)]:px-2">
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input 
                type="email" 
                name="user_email" 
                placeholder=" "
                className="peer w-full border-2 border-text-light/30 bg-transparent rounded-2xl p-6 outline-none text-text focus:border-first transition-all placeholder-transparent" 
                required 
              />
              <label className="absolute left-6 top-1/2 -translate-y-1/2 text-sm text-text-light transition-all pointer-events-none
                peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-body peer-focus:px-2 peer-focus:text-first
                peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-body peer-[:not(:placeholder-shown)]:px-2">
                Email
              </label>
            </div>

            {/* Project Input */}
            <div className="relative group">
              <textarea 
                name="project" 
                placeholder=" "
                className="peer w-full h-40 border-2 border-text-light/30 bg-transparent rounded-2xl p-6 outline-none text-text focus:border-first transition-all resize-none placeholder-transparent" 
                required
              ></textarea>
              <label className="absolute left-6 top-6 text-sm text-text-light transition-all pointer-events-none
                peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-body peer-focus:px-2 peer-focus:text-first
                peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-body peer-[:not(:placeholder-shown)]:px-2">
                Project Detail
              </label>
            </div>

            <button 
              type="submit" 
              className="flex items-center justify-center gap-2 w-max bg-first text-body px-10 py-5 rounded-2xl font-bold shadow-lg shadow-first/20 hover:bg-first-alt hover:-translate-y-1 transition-all self-center lg:self-start"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;