// export default const Header = () => {
// 	return (

// 	)
// }

const Header = () => {
	return (
      <header className="border-t-2 border-tertiary lg:border-none bg-tertiary bg-opacity-50 lg:bg-opacity-0 lg:bg-transparent fixed lg:absolute  bottom-0 lg:bottom-auto lg:top-0 left-0 w-full flex items-center z-50">
          <div className="container">
              <div className="flex items-center justify-center lg:justify-between relative">
                  <div className="hidden lg:block px-4">
                      <a href="#home" className="font-bold text-lg text-primary block py-6">Napdoee</a>
                  </div>
                  <nav id="nav-menu"
                      className="z-50 py-5 bg-tertiary bg-opacity-0 shadow-xl lg:shadow-none max-w-full right-0 lg:right-4 top-full block lg:static bg-transparent">
                      <ul className="flex items-center gap-10 md:gap-14 lg:gap-10">
                          <li className="group">
                              <a href="#home"
                                  className="font-semibold text-lg lg:text-base text-white py-2 group-hover:text-primary dark:text-white after:content-home after:w-5 after:hover:opacity-50 lg:after:hover:opacity-100 lg:after:w-auto lg:after:content-['Beranda'] after:block"></a>
                          </li>
                          <li className="group">
                              <a href="#about"
                                  className="font-semibold text-lg lg:text-base text-white py-2 group-hover:text-primary dark:text-white after:content-about after:w-5 after:hover:opacity-50 lg:after:hover:opacity-100 lg:after:w-auto lg:after:content-['Tentang_Saya'] after:block"></a>
                          </li>
                          <li className="group">
                              <a href="#portfolio"
                                  className="font-semibold text-lg lg:text-base text-white py-2 group-hover:text-primary dark:text-white after:content-project after:w-5 after:hover:opacity-50 lg:after:hover:opacity-100 lg:after:w-auto lg:after:content-['Project'] after:block"></a>
                          </li>
                          <li className="group">
                              <a href="#contact"
                                  className="font-semibold text-lg lg:text-base text-white py-2 group-hover:text-primary dark:text-white after:content-contact after:w-5 after:hover:opacity-50 lg:after:hover:opacity-100 lg:after:w-auto lg:after:content-['Kontak'] after:block"></a>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>
          {/*<h1 className="lg:navbar-fixed">TET</h1>*/}
      </header>
	)
}

export default Header;