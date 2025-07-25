import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme:{
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px','36px'],
        'course-details-heading-large': ['36px','46px'],
        'home-heading-large': ['28px','34px'],
        'home-heading-small': ['48px','56px'],
        'default': ['15px', '21px'],
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      spacing: {
        'sectionheight' : '500px',
      },
      maxWidth: {
        'course-card': '424px'
      },
      boxShadow: {
        'custom-card': '0px 4px 15px 2px rgba(0, 0, 0, 0.1) '
      }
    },
  }
})