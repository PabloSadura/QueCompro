
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors' // Importamos la paleta de colores de Tailwind

export default {
  // Le dice a Tailwind dónde buscar tus clases para optimizar el CSS
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Aquí es donde defines tus colores personalizados
      colors: {
        // Usamos 'sky' como ejemplo para tu color primario
        primary: colors.sky, 
        secondary: colors.slate,
      },
    },
  },
  plugins: [],
} satisfies Config // 'satisfies Config' le da autocompletado y verificación de tipos