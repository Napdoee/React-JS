const Contact = () => {
	return (
		      <section id="contact" class="pt-32 pb-32 bg-page-100">
          <div class="container">
              <div class="w-full px-4">
                  <div class="max-w-xl mx-auto text-center mb-16">
                      <h4 class="heading-title">Kontak</h4>
                      <h2 class="title">Hubungi Disini</h2>
                      <p class="text">Senang melakukan perkenalan, silahkan hubungi saya dibawah ini</p>
                  </div>
              </div>

              <form action="mailto:dayattsi12@gmail.com">
                  <div class="w-full lg:w-2/3 lg:mx-auto">
                      <div class="w-full px-4 mb-8">
                          <label for="name" class="text-base font-bold text-primary">Nama *</label>
                          <input type="text" id="name" name="subject"
                              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus: ring-1 focus:border-primary mt-3"
                              required />
                      </div>
                      <div class="w-full px-4 mb-8">
                          <label for="email" class="text-base font-bold text-primary">Email *</label>
                          <input type="text" id="email" name="email"
                              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus: ring-1 focus:border-primary mt-3"
                              required />
                      </div>
                      <div class="w-full px-4 mb-8">
                          <label for="message" class="text-base font-bold text-primary">Pesan *</label>
                          <textarea type="text" id="message" name="body"
                              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus: ring-1 focus:border-primary h-32 mt-3"
                              required></textarea>
                      </div>
                      <div class="w-full px-4">
                          <button type="submit"
                              class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
                      </div>
                  </div>
              </form>
          </div>
      </section>
	)
}

export default Contact;