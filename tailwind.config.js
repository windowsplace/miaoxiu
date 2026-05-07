/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meta-blue': '#0064E0',
        'meta-blue-hover': '#0143B5',
        'meta-blue-pressed': '#004BB9',
        'meta-blue-light': '#47A5FA',
        'facebook-blue': '#1877F2',
        
        'ray-ban-red': '#D6311F',
        'oculus-purple': '#A121CE',
        'work-purple': '#6441D2',
        'portal-blue': '#1B365D',
        'portal-hero-blue': '#C8E4E8',
        'portal-light-blue': '#ADD4E0',
        
        'soft-gray': '#F1F4F7',
        'warm-gray': '#F7F8FA',
        'web-wash': '#F0F2F5',
        'linen': '#F2F0E6',
        'baby-blue': '#E8F3FF',
        'near-black': '#1C1E21',
        'oculus-light': '#181A1B',
        
        'dark-charcoal': '#1C2B33',
        'icon-secondary': '#465A69',
        'secondary-text': '#65676B',
        'slate-gray': '#5D6C7B',
        'section-header': '#4B4C4F',
        'button-text-gray': '#444950',
        'disabled-text': '#BCC0C4',
        'cta-disabled-text': '#8595A4',
        'divider': '#CED0D4',
        'divider-gray': '#DEE3E9',
        'cta-gray-border': '#CBD2D9',
        'dark-gray-border': '#909396',
        
        'success-green': '#31A24C',
        'store-success': '#007D1E',
        'error-red': '#E41E3F',
        'store-error': '#C80A28',
        'warning-amber': '#F7B928',
        
        'cherry': '#F3425F',
        'grape': '#9360F7',
        'lime': '#45BD62',
        'seafoam': '#54C7EC',
        'teal': '#2ABBA7',
        'tomato': '#FB724B',
        'pink': '#FF66BF',
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'pill': '100px',
        'card': '20px',
        'feature-card': '24px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'elevated': '0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1)',
        'subtle': '0 2px 4px 0 rgba(0,0,0,0.1)',
      },
      transitionProperty: {
        'elevation': 'transform 300ms ease, box-shadow 300ms ease',
      },
    },
  },
  plugins: [],
}
