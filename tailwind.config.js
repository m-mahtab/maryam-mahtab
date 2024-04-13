/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors:{
      'bg-maroon' : '#2c1b35',
      'bg-marun' : '#2c1b3555',
      'maroon-1' : '#15021f',
      'white' : '#fff',
      'bg-pink' : '#b80ede66',
      'pink' : '#b80ede',
      'bg-black' : '#0006',
      'black' : '#000',
      'bg-contact' :'#2a0d1f'
      
    },

    extend: {
      rotate: {
        '144': '144deg', 
      }

    },
  },
  plugins: [],
}

