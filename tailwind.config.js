/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage:{
        'illustration-hero':'images/illustration-hero.svg',
        'mb-patter-bckgrnd':'images/pattern-background-mobile.svg',
        'dt-patter-bckgrnd':'images/pattern-background-desktop.svg'
      }
    },
    screens:{
      'sm':'425px',
      'md': '768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1440px'
    },
    colors:{
      'Pale-blue':'hsl(225, 100%, 94%)',
      'Bright-blue': 'hsl(245, 75%, 52%)',
      'Very-pale-blue': 'hsl(225, 100%, 98%)',
      'Desaturated-blue': 'hsl(224, 23%, 55%)',
      'Dark-blue': 'hsl(223, 47%, 23%)',
      'purple':'#CBC3E3'
    }
  },
  plugins: [],
}
