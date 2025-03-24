export default ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
  return (
    <footer 
      className={`${
        theme === 'dark' 
          ? 'bg-gray-900 text-gray-300' 
          : 'bg-white text-gray-600'
      } px-4 py-8 border-t`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand Section */}
          <div className="flex-1 max-w-xs">
            <h3 className={`text-xl font-medium ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              ZenYoga Studio
            </h3>
            <p className="mt-4 text-sm">
              Find your balance, peace, and strength within.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 flex-2">
            <div>
              <h4 className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
              }`}>
                About
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Our Teachers</a></li>
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Studio</a></li>
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Contact
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Schedule</a></li>
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Workshops</a></li>
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Privacy</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Legal
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-8 pt-8 border-t ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} ZenYoga Studio. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900 hover:dark:text-gray-100 transition">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* Add other social icons similarly */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};