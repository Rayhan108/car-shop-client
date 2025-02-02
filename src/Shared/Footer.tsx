const Footer = () => {
  return (
    <div className="footer p-10 bg-base-200 text-base-content mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="footer-title font-title">NextGen Cars</span>
          <br />
          <p className="text-sm font-body">
            Your destination for the latest and greatest in automobile technology.
            Experience innovation at NextGen Cars.
          </p>
        </div>
        <div>
          <span className="footer-title font-title">Services</span>
          <br />
          <a className="link link-hover font-body">Car Repairs</a>
          <br />
          <a className="link link-hover font-body">Trade-Ins</a>
          <br />
          <a className="link link-hover font-body">Accessories</a>
          <br />
          <a className="link link-hover font-body">Customization</a>
        </div>
        <div>
          <span className="footer-title font-body">Quick Links</span>
          <br />
          <a className="link link-hover font-body">About Us</a>
          <br />
          <a className="link link-hover font-body">Careers</a>
          <br />
          <a className="link link-hover font-body">Contact</a>
          <br />
          <a className="link link-hover font-body">Blog</a>
        </div>
        <div>
          <span className="footer-title font-title">Follow Us</span>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.92 4.92 0 0 0 2.165-2.717 9.838 9.838 0 0 1-3.127 1.195 4.908 4.908 0 0 0-8.366 4.468A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.524 6.573 4.903 4.903 0 0 1-2.225-.616v.061a4.909 4.909 0 0 0 3.937 4.808 4.902 4.902 0 0 1-2.212.084 4.914 4.914 0 0 0 4.588 3.417A9.86 9.86 0 0 1 0 21.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.007-7.496 14.007-13.986 0-.213-.005-.426-.014-.637A10.005 10.005 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.974.975 1.256 2.242 1.319 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.319 3.608-.975.974-2.242 1.256-3.608 1.319-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.319-.974-.975-1.256-2.242-1.319-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.319-3.608C5.517 2.507 6.784 2.225 8.15 2.163c1.266-.058 1.646-.069 4.85-.069zm0-2.163C8.112 0 7.582.012 6.262.07 4.904.132 3.617.4 2.675 1.343.732 3.286 0 5.855 0 12s.732 8.714 2.675 10.657C3.617 23.6 4.904 23.868 6.262 23.93c1.32.058 1.85.07 5.738.07s4.418-.012 5.738-.07c1.358-.062 2.645-.33 3.587-1.273C23.268 20.714 24 18.145 24 12s-.732-8.714-2.675-10.657C20.383.4 19.096.132 17.738.07 16.418.012 15.888 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
