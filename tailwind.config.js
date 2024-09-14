// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        unfoldIn: {
          '0%': { transform: 'scaleY(0.005) scaleX(0)' },
          '50%': { transform: 'scaleY(0.005) scaleX(1)' },
          '100%': { transform: 'scaleY(1) scaleX(1)' },
        },
        unfoldOut: {
          '0%': { transform: 'scaleY(1) scaleX(1)' },
          '50%': { transform: 'scaleY(0.005) scaleX(1)' },
          '100%': { transform: 'scaleY(0.005) scaleX(0)' },
        },
        fadeIn: {
          '0%': { background: 'rgba(0, 0, 0, 0)' },
          '100%': { background: 'rgba(0, 0, 0, 0.7)' },
        },
        fadeOut: {
          '0%': { background: 'rgba(0, 0, 0, 0.7)' },
          '100%': { background: 'rgba(0, 0, 0, 0)' },
        },
        moveUp: {
          '0%': { transform: 'translateY(150px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveDown: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(150px)' },
        },
        roadRunnerIn: {
          '0%': { transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)' },
          '70%': { transform: 'translateX(30px) skewX(0deg) scaleX(0.9)' },
          '100%': { transform: 'translateX(0px) skewX(0deg) scaleX(1)' },
        },
        bondJamesBond: {
          '0%': { transform: 'translateX(1000px)' },
          '80%': { transform: 'translateX(0px)', borderRadius: '75px', height: '75px', width: '75px' },
          '90%': { borderRadius: '3px', height: '182px', width: '247px' },
          '100%': { borderRadius: '3px', height: '162px', width: '227px' },
        },
        sideIn: {
          '0%': { opacity: '0', background: 'rgba(0, 0, 0, 0)' },
          '100%': { opacity: '1', background: 'rgba(0, 0, 0, 0.5)' },
        },
      },
      animation: {
        unfoldIn: 'unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        unfoldOut: 'unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        fadeIn: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        fadeOut: 'fadeOut 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        moveUp: 'moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        moveDown: 'moveDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        roadRunnerIn: 'roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        bondJamesBond: 'bondJamesBond 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        sideIn: 'sideIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
      },
    },
  },
  plugins: [],
}