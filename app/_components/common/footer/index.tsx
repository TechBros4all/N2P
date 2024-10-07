import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-zinc-200">
      <section className="container xl:px-28 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={50}
              priority
              style={{
                width: "80px",
                height: "50px",
              }}
              className="mx-auto"
            />
            <p className="text-gray-700 mt-4">
              Be the first to receive recent updates, promotions, and more.
            </p>
            <form className="mt-4 flex gap-2 w-full justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 w-2/3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-1/3 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Our Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Service Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center md:text-left block md:flex w-full items-center justify-between border-t border-gray-300 pt-4">
          <ul className="flex justify-center md:justify-start space-x-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Sitemap
              </a>
            </li>
          </ul>
          <p className="mt-4 md:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} nth2prove. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};
