/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        monserrat: ['var(--font-montserrat)'],
        fraunces: ['var(--font-fraunces)']
      },
      colors:{
        "cream":"#F2EAE2",
        "aurometal": "#6C7289",
        "gunmetal":  "#1C232B",
        "aquamarine": "#3D8168",
        "deep-aquamarine": "#1A4032",
        
      },
      borderRadius:{
        "10px":"10px"
        
      },
      fontSize:{
          32: ['32px', '32px'],
          14: ['14px', '23px'],
          13: ['13px', '23px'],
      },
      margin:{
        4.75: "19px",
        105:"420px",
        7.25:"29px",
        7.5:"30px"
      },
      height:{
        105:"420px",
        23:"92",
      },
      spacing:{
        105:"420px",
        43.75:"175px"
      },
      width:{
        150:"600px"
      },
      letterSpacing:{
        1.25: '5px',
      }
    },
  },
  plugins: [],
}
