import BottomBar from "./BottomBar";

export default function Footer() {
    return (
        <>
        <footer className=" bg-gray-100 py-8 mt-16">
        <div className="wrapper container mx-auto px-4">
          <div className="flex flex-wrap gap-10">
            {/* Logo and Newsletter */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0 md:mr-10">
              <h1 className="text-3xl font-bold">Hekto</h1>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="p-2 flex-grow border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
                  Sign Up
                </button>
              </div>
              <p className="mt-4 text-gray-600">
                Contact Info <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
  
              {/* Categories */}
              <div className="md:w-1/5 mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Customer Care */}
            <div className="w-full md:w-1/5 mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Customer Care</h2>
              <ul className="space-y-2 text-gray-600">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
  
            {/* Pages */}
            <div className="w-full md:w-1/5">
              <h2 className="text-lg font-semibold mb-4">Pages</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <BottomBar />
        </>
      
    );
  }
  