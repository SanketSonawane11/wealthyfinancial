import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-eab308 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#About"
                  className="hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#Services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#Contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-xl font-semibold text-eab308 mb-4">
              Follow Us
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/company/wealthy-financial-services/"
                aria-label="LinkedIn"
                target="_blank"
                className="text-gray-400 hover:text-blue-500"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 text-right">
            <h2 className="text-xl font-semibold text-eab308 mb-4">
              Contact Information
            </h2>
            <address className="not-italic text-gray-400">
              207, Second Floor,
              <br />
              The Edge, Behind Prakash Talkies
              <br />
              Palghar(W) - 401404
              <br />
              Phone:{" "}
              <a
                href="tel:+918169307733"
                className="hover:text-blue-500 transition-colors"
              >
                8169307733
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:ankit@wealthyfinancial.in"
                className="hover:text-blue-500 transition-colors"
              >
                ankit@wealthyfinancial.in
              </a>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Wealthy Financial Services. All
            rights reserved.
          </p>
          <a
            className="transition-all ease-in-out duration-150 hover:text-blue-500"
            href="https://sankets-profile.netlify.app/"
            target="_blank"
          >
            Make your website
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
