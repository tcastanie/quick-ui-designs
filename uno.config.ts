import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        poppins: [
          {
            name: 'Poppins',
            weights: ['400', '700'],
          }
        ]
      }
    }),
  ],
})
