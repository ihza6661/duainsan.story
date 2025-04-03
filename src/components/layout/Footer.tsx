
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl uppercase mb-4 font-normal tracking-widest">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/category/dress" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Dress
                </Link>
              </li>
              <li>
                <Link to="/products/category/skirt" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Skirt
                </Link>
              </li>
              <li>
                <Link to="/products/category/blazers" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Blazers
                </Link>
              </li>
              <li>
                <Link to="/products/category/trousers" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Trousers
                </Link>
              </li>
              <li>
                <Link to="/products/category/jumpers" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Jumpers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl uppercase mb-4 font-normal tracking-widest">Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl uppercase mb-4 font-normal tracking-widest">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/refunds" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Returns and Refunds
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-800 hover:text-black text-sm transition-colors tracking-wide">
                  Legal Area
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl uppercase mb-4 font-normal tracking-widest">About Us</h3>
            <p className="text-shop-dark-gray text-sm mb-4">
              We curate our items with the help of an amazing source of content and products. Visit our store pages to find out where all the products come from.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-shop-dark-gray hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-shop-dark-gray hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-shop-dark-gray hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm.003 1.44h.006c2.013 0 2.253.008 3.057.044.738.034 1.22.175 1.51.287.333.13.65.301.957.569.269.269.41.555.539.857.112.288.213.739.267 1.434.034.788.042 1.036.042 3.05 0 2.014-.008 2.261-.044 3.05-.033.697-.135 1.188-.267 1.477-.12.32-.262.605-.54.875a2.32 2.32 0 0 1-.85.549c-.292.112-.742.213-1.46.247-.808.034-1.052.042-3.09.042-2.037 0-2.283-.008-3.09-.042-.7-.034-1.15-.135-1.45-.247a2.41 2.41 0 0 1-.89-.57l-.55-.857c-.111-.29-.213-.74-.267-1.436-.034-.788-.042-1.036-.042-3.05 0-2.014.008-2.261.044-3.05.033-.697.135-1.188.267-1.477.12-.32.262-.605.54-.875a2.32 2.32 0 0 1 .85-.549c.292-.112.742-.213 1.46-.247.696-.032 1.008-.042 2.488-.042"/>
                  <path d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216m0 6.776a2.668 2.668 0 1 1 0-5.336 2.668 2.668 0 0 1 0 5.336"/>
                  <circle cx="12.145" cy="3.855" r=".96"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="text-shop-dark-gray hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-shop-dark-gray hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-shop-medium-gray pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-shop-dark-gray">
            © {currentYear} Couture. All rights reserved.
          </p>
          
          {/* <div className="flex items-center justify-center mt-4 md:mt-0 space-x-2">
            <img src="https://cdn.shopify.com/s/files/1/0610/7242/7936/files/visa_40x.png?v=1655455919" alt="Visa" width="32" />
            <img src="https://cdn.shopify.com/s/files/1/0610/7242/7936/files/master_40x.png?v=1655455919" alt="Mastercard" width="32" />
            <img src="https://cdn.shopify.com/s/files/1/0610/7242/7936/files/amex_40x.png?v=1655455919" alt="American Express" width="32" />
            <img src="https://cdn.shopify.com/s/files/1/0610/7242/7936/files/paypal_40x.png?v=1655455918" alt="PayPal" width="32" />
            <img src="https://cdn.shopify.com/s/files/1/0610/7242/7936/files/diners_40x.png?v=1655455919" alt="Diners Club" width="32" />
            <img src="https://cdn.shopify.com/s/files/1/0610/7242/7936/files/discover_40x.png?v=1655455918" alt="Discover" width="32" />
          </div> */}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link to="/" className="text-5xl font-light uppercase tracking-widest">
            Couture
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
