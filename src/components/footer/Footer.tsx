import {
  FaDiscord,
  FaGithub,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="md:flex justify-between items-center mb-12 border-b border-white/10 pb-10">
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay Ahead with Insights</h3>
            <p className="text-white/70 max-w-md">
              Subscribe to our monthly newsletter to get the latest updates, tips, and agency growth hacks — no spam, just value.
            </p>
          </div>
          <form
            className="flex mt-6 md:mt-0 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full md:w-80 px-4 py-3 rounded-l-md text-white outline"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all px-6 rounded-r-md text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Agency Logo & Info */}
          <div>
            <a
              href="#"
              className="flex items-center space-x-2 mb-2"
            >
              <img
                src="https://assets.aceternity.com/logo-dark.png"
                alt="GoStartup Logo"
                width={30}
                height={30}
              />
              <span className="font-medium text-white text-lg">GoStartup</span>
            </a>
            <p className="text-white/70 mb-4">
              A digital-first agency crafting modern, high-impact websites and growth strategies for ambitious brands.
            </p>
            <div className="flex gap-4 text-xl text-white/60">
              <FaDiscord />
              <FaXTwitter />
              <FaGithub />
              <FaFacebook />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Web Development</li>
              <li>Branding & Identity</li>
              <li>UI/UX Design</li>
              <li>Marketing Solutions</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/70">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Templates */}
          <div>
            <h4 className="font-semibold mb-4">Templates</h4>
            <ul className="space-y-2 text-white/70">
              <li>Agency Templates</li>
              <li>Portfolio Templates</li>
              <li>Startup Templates</li>
              <li>Landing Pages</li>
            </ul>
          </div>
        </div>

        {/* Other Products */}
        <div className="mt-12 text-center text-white/60 text-sm">
          <p className="mb-4">Explore Our Other Products</p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 font-medium text-sm">
            <span>TailAdmin</span>
            <span>Lineicons</span>
            <span>PlainAdmin</span>
            <span>FormBold</span>
            <span>Resource.fyi</span>
            <span>Graygrids</span>
            <span>TailGrids</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/50 text-xs">
          © 2025 GoStartup. All rights reserved. — Crafted with passion by Pimjo
        </div>
      </div>
    </footer>
  );
};

export default Footer;
