const Footer = () => {
    return (
      <div className="w-full rounded-t-3xl bg-gray-900 text-white p-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <span className="footer-title font-title">NextGen Cars</span>
            <p className="text-sm font-body mt-2">
              Your destination for the latest and greatest in automobile
              technology. Experience innovation at NextGen Cars.
            </p>
          </div>
          <div>
            <span className="footer-title font-title">Services</span>
            <ul className="mt-2 space-y-2">
              <li>
                <a className="link link-hover font-body">Car Repairs</a>
              </li>
              <li>
                <a className="link link-hover font-body">Trade-Ins</a>
              </li>
              <li>
                <a className="link link-hover font-body">Accessories</a>
              </li>
              <li>
                <a className="link link-hover font-body">Customization</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="footer-title font-title">Quick Links</span>
            <ul className="mt-2 space-y-2">
              <li>
                <a className="link link-hover font-body">About Us</a>
              </li>
              <li>
                <a className="link link-hover font-body">Careers</a>
              </li>
              <li>
                <a className="link link-hover font-body">Contact</a>
              </li>
              <li>
                <a className="link link-hover font-body">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="footer-title font-title">Follow Us</span>
            <div className="flex gap-4 mt-2 text-white">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.92 4.92 0 0 0 2.165-2.717A9.838 9.838 0 0 1 18.21 3.51a4.908 4.908 0 0 0-8.366 4.468A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.524 6.573A4.903 4.903 0 0 1 .97 9.106v.061a4.909 4.909 0 0 0 3.937 4.808A4.902 4.902 0 0 1 2.695 14a4.914 4.914 0 0 0 4.588 3.417A9.86 9.86 0 0 1 0 21.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.007-7.496 14.007-13.986 0-.213-.005-.426-.014-.637A10.005 10.005 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1c1.37 0 2.49 1.12 2.49 2.5zM.19 8h4.66v12H.19V8zm7.31 0h4.45v1.64h.06c.62-1.17 2.14-2.41 4.4-2.41 4.71 0 5.57 3.1 5.57 7.13v8.64h-4.67v-7.67c0-1.83-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.04v7.8H7.5V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-10">
          <p className="text-sm font-title">
            NextGen Cars ©{new Date().getFullYear()} Created by MD.Rayhan Shorker
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;