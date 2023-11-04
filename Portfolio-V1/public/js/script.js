// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    // const toTop = document.querySelector('#to-top');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('lg:navbar-fixed');
        // toTop.classList.remove('lg:hidden');
        // toTop.classList.add('lg:flex');
    } else {
        header.classList.remove('lg:navbar-fixed');
        // toTop.classList.add('lg:hidden');
    }
}

// Darkmode toggle
// const darkToggle = document.querySelector('#dark-toggle');
// const html = document.querySelector('html');

// darkToggle.addEventListener('click', function () {
//   if (darkToggle.checked) {
//     html.classList.add('dark');
//     localStorage.theme = 'dark';
//   } else {
//     html.classList.remove('dark');
//     localStorage.theme = 'light';
//   }
// });

// // Session theme
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     darkToggle.checked = true; 
//     html.classList.add('dark');
//   } else {
//     darkToggle.checked = false; 
//     html.classList.remove('dark');
//   }