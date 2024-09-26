import pluginVue from 'eslint-plugin-vue'
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import unocss from '@unocss/eslint-config/flat'

export default tseslint.config(
  unocss,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        projectService: {
          allowDefaultProject: ['*.js', '*.ts', '*.vue'],
        },
        extraFileExtensions: ['.vue'],
      },
    },
  },
);
