/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pop: 'pop 1.1s infinite', // Define the pop animation with a duration of 0.5 seconds
        sparkle: 'sparkle 1s infinite',
      

      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' }, // Scale to original size
          '50%': { transform: 'scale(1.1)' }, // Scale up by 10%
          
      },
      sparkle: {
        '0%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
        '100%': { transform: 'translate(10px, -10px) scale(1.5)', opacity: '0' },
      },
    },
    
      colors: {
        "download-nero": "#fff",
        "download-black": "#000",
        "download-nero-60": "rgba(255, 255, 255, 0.6)",
        "download-gallery": "#f0f0f0",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e6e3e3",
          "300": "#d9d9d9",
        },
        burlywood: "#c9b079",
        gray: {
          "100": "#fffdfd",
          "200": "#787878",
          "300": "#3a2215",
          "400": "#29180f",
          "500": "#28180f",
          "600": "#1b1a1a",
          "700": "rgba(255, 255, 255, 0.82)",
          "800": "rgba(0, 0, 0, 0.4)",
          "900": "rgba(0, 0, 0, 0.9)",
        },
        teal: {
          "100": "#1b6d6e",
          "200": "#1c6c6c",
        },
        darkslategray: {
          "100": "#3c3a3a",
          "200": "#333",
          "300": "rgba(51, 51, 51, 0.09)",
        },
        mediumaquamarine: "#85d6a0",
        darkslateblue: "#3b5998",
        deepskyblue: "#55acee",
        palevioletred: "#f85f89",
        seashell: "#f7f2ec",
        darksalmon: "#bf8b70",
        dimgray: "#636161",
        silver: "rgba(196, 196, 196, 0)",
        lightgray: "#d1c9c8",
        honeydew: "#e0feea",
        antiquewhite: "#f0dacd",
        whitesmoke: "#e1ede9",
      },
      spacing: {},
      fontFamily: {
        nuckle: "Nuckle",
        "text-regular-normal": "Roboto",
        "roboto-serif": "'Roboto Serif'",
        poppins: "Poppins",
        lato: "Lato",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        inter: "Inter",
      },
      borderRadius: {
        "6xl": "25px",
        "61xl": "80px",
        "71xl": "90px",
        "4xl": "23px",
        "41xl": "60px",
        mini: "15px",
        "81xl": "100px",
        "mid-5": "17.5px",
        "16xl": "35px",
        "18xl": "37px",
        "10xl": "29px",
        "31xl": "50px",
        "52xl": "71px",
        "12xl": "31px",
        "14xl": "33px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      lg: "18px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "6xl": "25px",
      "56xl": "75px",
      "26xl": "45px",
      "41xl": "60px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "11xl": "30px",
      lgi: "19px",
      "7xl": "26px",
      mini: "15px",
      "29xl": "48px",
      "91xl": "110px",
      "61xl": "80px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
