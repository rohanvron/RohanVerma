import React, {useEffect, useRef} from 'react'

const Header = () => {

  const themeToggleRef = useRef(null);

  useEffect(() => {
    const themeToggle = themeToggleRef.current;
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.checked = currentTheme === 'dark';

    themeToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }, []);

  return (
<div className="navbar sticky top-0 z-50 bg-blue-300 bg-clip-padding 
                backdrop-filter backdrop-blur-lg bg-opacity-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Skills</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 gap-3 dark:font-bold">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Skills</a></li>
      <li><a>Projects</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>

  
  <div className="navbar-end">
  <label className="grid cursor-pointer place-items-center">
  <input
  ref={themeToggleRef}
  type="checkbox"
  className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"/>
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
  </div>
</div>
  )
}

export default Header
