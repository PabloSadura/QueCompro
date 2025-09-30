import { Product, SearchEvent } from "../interfaces/interfaces"; // Asegúrate que la ruta a tu interfaz sea correcta

export const DEMO_DATA: SearchEvent = {
  // Datos del evento de búsqueda general
  id: 'demo-search-12345',
  query: 'Celulares de gama alta',
  createdAt: new Date().toISOString(), // Fecha actual en formato ISO
  status: 'Completado', // El estado final de una búsqueda exitosa
  result: {
    recomendacion_final: 'Esta es una **demostración** de nuestro análisis IA. Para obtener resultados personalizados sobre tus productos, por favor, regístrate o inicia sesión.',
    productos:<Product[]> [
      {
        product_id: 'demo-iphone-15',
        title: 'Apple iPhone 15 Pro',
        brand: 'Apple',
        price: '$ 1.299.999 ARS',
        rating: 4.8,
        reviews: 1850,
        thumbnails: [
          "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png",
          "https://tienda.personal.com.ar/images/720/webp/i_Phone_15_Pro_Max_256_GB_Black_Titanium_10c02db62e.png"
        ],
        pros: [
          'Chasis de titanio, más ligero y resistente',
          'Rendimiento excepcional con el chip A17 Pro',
          'Sistema de cámaras profesional y versátil',
          'Puerto USB-C con velocidades de transferencia rápidas'
        ],
        contras: [
          'La batería podría ser mejor',
          'El precio es elevado en comparación con la competencia'
        ],
        immersive_details: {
          thumbnails: [
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium-av?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699295',
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium-ctb?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845706509'
          ],
          title: 'Apple iPhone 15 Pro',
          brand: 'Apple',
          reviews: 1850,
          rating: 4.8,
          price_range: '$1,299,999 - $1,450,000',
          about_the_product: {
            features: [
              { title: 'Pantalla', value: '6.1" Super Retina XDR' },
              { title: 'Cámara Principal', value: '48MP' },
              { title: 'Procesador', value: 'Chip A17 Pro' },
              { title: 'Material', value: 'Titanio de grado aeroespacial' }
            ]
          },
        },
      },
      {
        product_id: 'demo-samsung-s24',
        title: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        price: '$ 1.499.999 ARS',
        rating: 4.9,
        reviews: 2340,
        thumbnails: [
          'https://tienda.personal.com.ar/images/720/webp/Samsung_Galaxy_S24_Ultra_Titanium_Gray_d29c8e8ff7.png',
          "https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-s24-ultra/gallery/titanium-violet-1.jpg"
        ],
        pros: [
          'La mejor pantalla del mercado',
          'Funciones de IA (Galaxy AI) muy útiles',
          'El S Pen integrado ofrece gran productividad',
          'Zoom de cámara inigualable'
        ],
        contras: [
          'Diseño muy similar al modelo anterior',
          'Es un dispositivo grande y pesado'
        ],
        immersive_details: {
          brand: 'Samsung',
          title: 'Samsung Galaxy S24 Ultra',
          about_the_product: {
            features: [
              { title: 'Pantalla', value: '6.8" Dynamic AMOLED 2X' },
              { title: 'Cámara Principal', value: '200MP' },
              { title: 'Procesador', value: 'Snapdragon 8 Gen 3 for Galaxy' },
              { title: 'Stylus', value: 'S Pen Integrado' }
            ]
          }
        }
      },
      {
        product_id: 'demo-pixel-8',
        title: 'Google Pixel 8 Pro',
        brand: 'Google',
        price: '$ 1.150.000 ARS',
        rating: 4.7,
        reviews: 1620,
        thumbnails: [
          "https://ar.celulares.com/fotos/google-pixel-8-pro-97372-g-alt.jpg",
          "https://substackcdn.com/image/fetch/$s_!-xi4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F202a9e0c-7794-4d8b-a80b-cf84fff57691_2048x1536.jpeg"
        ],
        pros: [
          'Experiencia de Android puro y actualizaciones inmediatas',
          'Procesamiento de imágenes por IA líder en la industria',
          'Pantalla muy brillante y fluida',
          'Diseño único y cómodo en la mano'
        ],
        contras: [
          'El rendimiento del chip Tensor G3 no es el más alto',
          'La velocidad de carga es más lenta que la de sus rivales'
        ],
        immersive_details: {
          brand: 'Google',
          title: 'Google Pixel 8 Pro',
          about_the_product: {
            features: [
              { title: 'Pantalla', value: '6.7" Super Actua Display' },
              { title: 'Cámara Principal', value: '50MP Octa-PD' },
              { title: 'Procesador', value: 'Google Tensor G3' },
              { title: 'IA', value: 'Funciones de edición de fotos mágicas' }
            ]
          }
        }
      }
    ]
  }
};