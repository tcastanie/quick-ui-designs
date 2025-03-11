import { defineConfig, presetWind3, presetIcons, presetWebFonts, transformerVariantGroup  } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        'poppins': ['Poppins:400,500,700'],
        'ibm-plex-sans': ['IBM Plex Sans:400,500,700'],
        'merriweather': ['Merriweather:700'],
        'mulish': ['Mulish:400,600,700,900'],
        'inter': ['Inter:600'],
        'montserrat': ['Montserrat:600'],
      }
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
