import React from 'react';
import Image from 'next/image';
import 'animate.css';

const AboutPage = () => {
  return (


    <div>

      {/* Hero Section */}
      <section className="relative bg-[#53D2f] py-20 animate__animated animate__fadeIn">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6 animate__animated animate__fadeInDown">
            About Us
          </h1>
          <p className="text-lg text-white animate__animated animate__fadeInUp">
            Your trusted destination for the finest products and exceptional service.
          </p>
        </div>
        <Image 
          src="/work.png" 
          alt="About Us" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-30 animate__animated animate__zoomIn" 
        />
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-r from-[#a59d84] to-[#ecebde] shadow-lg animate__animated animate__slideInLeft">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#000] mb-6 animate__animated animate__fadeInLeft">
              Our Story
            </h2>
            <p className="text-gray-900 leading-relaxed mb-4 animate__animated animate__fadeIn">
              Founded in 2023, our mission has always been to offer high-quality, stylish, and 
              reliable products to our customers.
            </p>
          </div>
          <Image 
            src="/aaa.jpg" 
            alt="Our Story" 
            width={700} 
            height={500} 
            className="rounded-lg shadow-lg animate__animated animate__zoomIn"
          />
        </div>
      </section>


      
      {/* Call to Action */}
      <section className="py-16 bg-gray-100 text-[#000] animate__animated animate__fadeIn">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">Join Our Journey</h2>
          
        
          
        </div>
        </section>
       {/* Our Values */}
     <section className="py-16   bg-gradient-to-r from-[#E8C6B0] to -[#F0D7C3] shadow-lg shadow-lg animate__animated animate__fadeInDown">
        <div className="container mx-auto px-4 text-center animate__animated animate__fadeIn"> 
        <h2 className="text-4xl font-bold text-[#5D3D2F] mb-10 animate__animated animate__fadeInDown">Our Values</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg  bg-gradient-to-r from-[#A8CD89] to-[#F9C0AB] shadow-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5D3D2F] mb-4 animate__animated animate__fadeIn">Quality</h3>
              <p className="text-gray-600">
                We are committed to offering the highest quality products that you can trust.
               </p>
             </div>
            <div className="p-6 bg-white shadow-md rounded-lg    bg-gradient-to-r from-[#A8CD89] to-[#F9C0AB] shadow-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5D3D2F] mb-4">Integrity</h3>
              <p className="text-gray-600">
                Transparency and honesty are at the core of everything we do.
              </p>
             </div>
           <div className="p-6 bg-white shadow-md rounded-lg  bg-gradient-to-r from-[#A8CD89] to-[#F9C0AB] shadow-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#5D3D2F] mb-4">Customer Focus</h3>
              <p className="text-gray-600" > Your satisfaction is our top priority, and we strive to exceed your expectations.
               </p>
             </div>
           </div>
         </div>
       </section>  
      

      
       </div>
              
     
    
   
  );
};

export default AboutPage;
