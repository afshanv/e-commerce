import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className=" bg-gradient-to-r from-[#3c3d37] to-[#697565] shadow-lg animate__animated animate__slideInLeft text-white py-12     ">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-3xl font-bold mb-4">Your Store</h3>
            <p className="text-[#C5A94] ">
              The best place for stylish clothing. Bringing you the best deals every day.
            </p>
          </div>

          {/* Navigation Links */}
          {[
            { title: "Customer Service", links: ["Contact Us", "FAQ", "Terms & Conditions", "Privacy Policy"] },
            { title: "About Us", links: ["Our Story", "Careers", "Blog", "Partners"] },
            { title: "Shop", links: ["Shop Now", "Sale", "New Arrivals", "Best Sellers"] },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2 ">
                    <Link href="#" className="text-[#C5A94] hover:text-white ">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
 
        {/* Social Media */}
        <div className="flex justify-center space-x-9  font-bold  ml-[1200px]">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
            <Icon
              key={idx}
              className="text-white hover:text-[#ECCB80] text-2xl transition-colors cursor-pointer"
            />
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-8 text-sm">
          <p className="text-[#ECCB80]">&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
        </div> 
      </div>
    </footer>
  );
};

export default FooterSection;
