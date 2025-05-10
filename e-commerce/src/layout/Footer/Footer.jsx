import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import SHOPCOlogo from "../../assets/SHOP.COlogo.png";
import VisaLogo from "../../assets/payments/visa.png";
import MasterCardLogo from "../../assets/payments/mastercard.png";
import PaypalLogo from "../../assets/payments/paypal.png";
import ApplePayLogo from "../../assets/payments/applepay.png";
import GooglePayLogo from "../../assets/payments/googlepay.png";

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 px-4 sm:px-8 md:px-12 py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {/* Brand Info */}
        <div>
          <img src={SHOPCOlogo} alt="SHOP.CO" className="mb-4 w-28" />
          <p className="mb-4 text-gray-600 text-sm leading-relaxed">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-4 text-gray-600 text-lg">
            <a href="#"><FaTwitter className="hover:text-black transition" /></a>
            <a href="#"><FaFacebookF className="hover:text-black transition" /></a>
            <a href="#"><FaInstagram className="hover:text-black transition" /></a>
            <a href="#"><FaGithub className="hover:text-black transition" /></a>
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-semibold uppercase text-black text-sm mb-4 tracking-wide">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-black transition cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 max-w-7xl mx-auto">
        <p className="text-center sm:text-left">
          Shop.co © 2000–2025, All Rights Reserved
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2">
          <img src={VisaLogo} alt="Visa" className="h-6" />
          <img src={MasterCardLogo} alt="MasterCard" className="h-6" />
          <img src={PaypalLogo} alt="PayPal" className="h-6" />
          <img src={ApplePayLogo} alt="Apple Pay" className="h-6" />
          <img src={GooglePayLogo} alt="Google Pay" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
