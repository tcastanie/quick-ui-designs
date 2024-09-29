import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        'poppins': ['Poppins:400,500,700'],
        'ibm-plex-sans': ['IBM Plex Sans:400,500,700'],
        'merriweather': ['Merriweather:700'],
        'mulish': ['Mulish:400,600,700'],
      }
    }),
  ],
})
