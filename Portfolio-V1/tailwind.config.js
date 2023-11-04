/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      content: {
        'home' : 'url("./img/home-solid.svg")',
        'about' : 'url("./img/info-circle-solid.svg")',
        'project' : 'url("./img/list-alt-solid.svg")',
        'contact' : 'url("./img/envelope-solid.svg")',
        'resume' : 'url("./img/user-circle-solid.svg")',
      },
      colors: {
        dark: '#0f172a',
        primary: '#3b82f6',
        secondary: '#cbd5e1',
        tertiary: '#1e293b',
        page: {
          100: '#323C4D',
          200: '#454E5D',
        },
        code: {
          11 : '#E34F26',
          12 : '#1572B6',
          13 : '#F7DF1E',
          21 : '#7952B3',
          22 : '#06B6D4',
          31 : '#777BB4',
          32 : '#339933',
          33 : '#4479A1',
          34 : '#6C78AF',
          41 : '#EF4223',
        }
      },
      screens: {
          '2xl' : '1320px'
      }
    }
  }
}
