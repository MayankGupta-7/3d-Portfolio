import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import 'boxicons/css/boxicons.min.css';
import { AuthContext } from './AuthContext.jsx';

const Header = () => {
  const [showDesktopSocial, setShowDesktopSocial] = useState(false);
  const [showMobileSocial, setShowMobileSocial] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const desktopDropdownRef = useRef();
  const mobileDropdownRef = useRef();

  const { user, logout } = useContext(AuthContext);
  const isLoggedIn = !!user;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setShowDesktopSocial(false);
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setShowMobileSocial(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setShowMobileSocial(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 bg-black text-white">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
        style={{ color: '#C084FC' }}
      >
        MAYANK GUPTA
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12 text-lg">
        <a
          href="https://github.com/MayankGupta-7"
          className="hover:text-yellow-400 transition-colors z-50"
        >
          Projects
        </a>

        <Link to="/about" className="hover:text-yellow-400 transition-colors z-50">
          About
        </Link>

        {/* Social Dropdown */}
        <div className="relative z-50" ref={desktopDropdownRef}>
          <span
            onClick={() => setShowDesktopSocial((prev) => !prev)}
            className="cursor-pointer hover:text-yellow-400 transition-colors"
          >
            Social
          </span>

          {showDesktopSocial && (
            <div className="absolute top-full mt-2 bg-black bg-opacity-90 border border-gray-700 rounded-lg p-3 space-y-2 z-50 min-w-[160px]">
              <a
                href="https://github.com/MayankGupta-7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <i className="bx bxl-github text-xl"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mayankgupta007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <i className="bx bxl-linkedin-square text-xl"></i> LinkedIn
              </a>
              {/* <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <i className="bx bxl-twitter text-xl"></i> Twitter
              </a> */}
            </div>
          )}
        </div>

        <Link to="/work-theory" className="hover:text-yellow-400 transition-colors z-50">
          Work Theory
        </Link>
      </nav>

      {/* Desktop Login or Dashboard */}
      {isLoggedIn ? (
        <>
          <Link
            to="/dashboard"
            className="hidden md:block bg-indigo-600 text-white py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-indigo-700 cursor-pointer z-50"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="hidden md:block ml-4 bg-red-600 text-white py-3 px-6 rounded-full font-medium transition-all duration-500 hover:bg-red-700 cursor-pointer z-50"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          to="/login"
          className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
        >
          Login
        </Link>
      )}

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
          <nav className="flex flex-col gap-6 items-center text-white text-lg">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>

            {/* Mobile Social Dropdown */}
            <div className="relative z-50" ref={mobileDropdownRef}>
              <span
                onClick={() => setShowMobileSocial((prev) => !prev)}
                className="cursor-pointer hover:text-yellow-400"
              >
                Social
              </span>

              {showMobileSocial && (
                <div className="mt-2 bg-black bg-opacity-90 border border-gray-700 rounded-lg p-3 space-y-2 text-sm text-center">
                  <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 hover:text-yellow-400"
                  >
                    <i className="bx bxl-github text-xl"></i> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 hover:text-yellow-400"
                  >
                    <i className="bx bxl-linkedin-square text-xl"></i> LinkedIn
                  </a>
                  {/* <a
                    href="https://Linkedin  .com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 hover:text-yellow-400"
                  >
                    <i className="bx bxl-linkedin text-xl"></i> LinkedIn
                  </a> */}
                </div>
              )}
            </div>

            <Link to="/work-theory" className="hover:text-yellow-400">Work Theory</Link>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-base tracking-wider hover:text-yellow-400">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-base tracking-wider text-red-500 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-base tracking-wider hover:text-yellow-400">
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
