/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e0f2f1',
                    100: '#b2dfdb',
                    200: '#80cbc4',
                    300: '#4db6ac',
                    400: '#26a69a',
                    500: '#009688',
                    600: '#00897b',
                    700: '#00796b',
                    800: '#00695c',
                    900: '#004d40',
                },
                accent: {
                    warm: '#ff6f61',
                    coral: '#ff8a80',
                    success: '#4caf50',
                    warning: '#ff9800',
                },
                mental: {
                    calm: '#10b981',
                    mild: '#f59e0b',
                    moderate: '#f97316',
                    severe: '#ef4444',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
