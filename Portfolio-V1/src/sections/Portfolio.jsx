const Portfolio = () => {
 return (
  <section id="portfolio" className="relative pt-32 pb-16 bg-page-200 dark:bg-slate-800">
      <div className="container">
          <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                  <h4 className="heading-title">Portfolio</h4>
                  <h2 className="title">Project Terkini</h2>
                  <p className="text">Beberapa Project yang telah saya buat</p>
              </div>
          </div>
          <div className="w-full px-4 flex flex-col">
              <div className="mb-12 p-4 w-full xl:flex xl:flex-row xl:items-center group">
                  <div className="rounded-md shadow-md overflow-hidden mb-5 xl:relative xl:left-5 xl:w-2/4">
                      <img src="/img/projects/project_3.png" alt="MarketPlace" width="w-full"
                          className="grayscale group-hover:grayscale-0 group-hover:scale-125 transition duration-500 ease-in-out" />
                  </div>
                  <div
                      className="xl:relative xl:text-left xl:right-5 xl:h-fit xl:bg-tertiary z-10 xl:p-5 xl:rounded-md xl:w-2/4">
                      <h3 className="font-semibold text-xl text-white mb-1 dark:text-white">MyProduct | E-Commerce Web</h3>
                      <p className="font-medium text-base text-secondary mb-3">MarketPlace adalah sebuah website
                          e-commerce dibangun dengan PHP. Fitur utamanya meliputi registrasi, login, penjualan,
                          dan pembelian produk, serta panel administrasi untuk mengelola situs.</p>
                      <p className="font-semibold text-sm text-secondary mb-3">Boostrap - Laravel - MySQL</p>
                      <div className="flex gap-2 xl:justify-start">
                          <a target="_blank" href="https://github.com/Napdoee/MyProducts"
                              className="font-semibold bg-primary px-4 py-2 rounded-md text-white hover:opacity-80 flex items-center gap-2">
                              <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <title>GitHub</title>
                                  <path
                                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                              Github
                          </a>
                      </div>
                  </div>
              </div>
              <div className="mb-12 p-4 w-full xl:flex xl:flex-row-reverse xl:items-center group">
                  <div className="rounded-md shadow-md overflow-hidden mb-5 xl:relative xl:right-5 xl:w-2/4">
                      <img src="/img/projects/project_1.png" alt="APP Pembayaran SPP" width="w-full"
                          className="grayscale group-hover:grayscale-0 group-hover:scale-125 transition duration-500 ease-in-out" />
                  </div>
                  <div
                      className="xl:relative xl:text-left xl:left-10 xl:h-fit xl:bg-tertiary z-10 xl:p-5 xl:rounded-md xl:w-2/4">
                      <h3 className="font-semibold text-xl text-white mb-1 dark:text-white">APP Pembayaran SPP</h3>
                      <p className="font-medium text-base text-secondary mb-3">Aplikasi ini bertujuan untuk
                          mempermudah mengatur data pembayaran spp siswa dan melihat riwayat pembayaran siswa,
                          aplikasi ini dibuat dengan sistem CRUD dan MultiLevel.</p>
                      <p className="font-semibold text-sm text-secondary mb-3">Bootstrap - PHP - MySQL</p>
                      <div className="flex gap-2 xl:justify-start">
                          <a target="_blank" href="https://github.com/Napdoee/ukkrpl_p1_spp"
                              className="font-semibold bg-primary px-4 py-2 rounded-md text-white hover:opacity-80 flex items-center gap-2">
                              <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <title>GitHub</title>
                                  <path
                                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                              Github
                          </a>
                          <a target="_blank" href="https://napdoee-pembayaranspp.000webhostapp.com/"
                              className="font-semibold bg-primary px-4 py-2 rounded-md text-white hover:opacity-80 flex items-center gap-2">
                              Site
                          </a>
                      </div>
                  </div>
              </div>
              <div className="mb-12 p-4 w-full xl:flex xl:flex-row xl:items-center group">
                  <div className="rounded-md shadow-md overflow-hidden mb-5 xl:relative xl:left-5 xl:w-2/4">
                      <img src="/img/projects/project_2.png" alt="APP Pengaduan Masyarakat" width="w-full"
                          className="grayscale group-hover:grayscale-0 group-hover:scale-125 transition duration-500 ease-in-out" />
                  </div>
                  <div
                      className="xl:relative xl:text-left xl:right-5 xl:h-fit xl:bg-tertiary z-10 xl:p-5 xl:rounded-md xl:w-2/4">
                      <h3 className="font-semibold text-xl text-white mb-1 dark:text-white">APP Pengaduan Masyarakat
                      </h3>
                      <p className="font-medium text-base text-secondary mb-3">Aplikasi ini bertujuan untuk menampung
                          pengaduan dari masyarakat dan dapat di kelola petugas secara daring dan efesien</p>
                      <p className="font-semibold text-sm text-secondary mb-3">Bootstrap - PHP - MySQL</p>
                      <div className="flex gap-2 xl:justify-start">
                          <a target="_blank" href="https://github.com/Napdoee/ukkrpl_p2_pengaduan"
                              className="font-semibold bg-primary px-4 py-2 rounded-md text-white hover:opacity-80 flex items-center gap-2">
                              <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <title>GitHub</title>
                                  <path
                                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                              Github
                          </a>
                      </div>
                  </div>
              </div>
              <div className="mb-12 p-4 w-full xl:flex xl:flex-row-reverse xl:items-center group">
                  <div className="rounded-md shadow-md overflow-hidden mb-5 xl:relative xl:right-5 xl:w-2/4">
                      <img src="/img/projects/project_4.png" alt="APP Pengaduan Masyarakat" width="w-full"
                          className="grayscale group-hover:grayscale-0 group-hover:scale-125 transition duration-500 ease-in-out" />
                  </div>
                  <div
                      className="xl:relative xl:text-left xl:left-5 xl:h-fit xl:bg-tertiary z-10 xl:p-5 xl:rounded-md xl:w-2/4">
                      <h3 className="font-semibold text-xl text-white mb-1 dark:text-white">Brooker - Discord Bot
                      </h3>
                      <p className="font-medium text-base text-secondary mb-3">Brooker adalah bot discord yang bertujuan untuk membantu mengatur server discord dari Website maupun aplikasi Discord itu sendiri.</p>
                      <p className="font-semibold text-sm text-secondary mb-3">Node.js - Discord.js - Express.js</p>
                      <div className="flex gap-2 xl:justify-start">
                          <a target="_blank" href="#" className="font-semibold bg-primary px-4 py-2 rounded-md text-white hover:opacity-80">Preview</a>
                          <a target="_blank" href="https://github.com/Napdoee/Brooker-Bot"
                              className="font-semibold bg-primary px-4 py-2 rounded-md text-white hover:opacity-80 flex items-center gap-2">
                              <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <title>GitHub</title>
                                  <path
                                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                              Github
                          </a>
                          <a target="_blank" href="https://brooker.glitch.me"
                              className="font-semibold bg-primary px-4 py-2 rounded-md text-white hover:opacity-80 flex items-center gap-2">
                              Site
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
 )
}

export default Portfolio;