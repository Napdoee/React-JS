const Footer = () => {
	return (
      <footer class="bg-dark pt-12 pb-8">
          <div class="container">
              <div class="w-full text-center">
                  <div class="grid gap-5">
                      <div class="grid md:flex gap-10 justify-center items-center text-base text-white mb-5">
                          <a href="#home" class="hover:text-primary">Beranda</a>
                          <a href="#about" class="hover:text-primary">Tentang Saya</a>
                          <a href="#portfolio" class="hover:text-primary">Portfolio</a>
                          <a href="#contact" class="hover:text-primary">Kontak</a>
                      </div>
                      <div class="grid">
                          <p class="text-slate-300 text-md mb-3 flex items-center justify-center gap-2">Napdoee <span
                                  class="w-0.5 h-4  bg-slate-300"></span> Portfolio 2023</p>
                          <p class="text-slate-300 text-xs">Made with <a href="https://tailwindcss.com"
                                  class="font-bold text-sky-500 underline">Tailwind CSS</a></p>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
	)
}

export default Footer;