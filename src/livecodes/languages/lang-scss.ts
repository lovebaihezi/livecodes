import { LanguageSpecs } from '../models';
import { parserPlugins } from './prettier';
import { getLanguageCustomSettings } from './utils';

export const scss: LanguageSpecs = {
  name: 'scss',
  title: 'SCSS',
  info: `
  <h3>SCSS</h3>
  <div>Syntactically Awesome Style Sheets.</div>
  <ul>
    <li><a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass official website</a></li>
    <li><a href="https://sass-lang.com/documentation" target="_blank" rel="noopener">Sass documentation</a></li>
    <li><a href="https://sass-lang.com/documentation/syntax#scss" target="_blank" rel="noopener">SCSS syntax</a></li>
  </ul>
  `,
  parser: {
    name: 'scss',
    pluginUrls: [parserPlugins.postcss],
  },
  compiler: {
    url: 'https://cdn.jsdelivr.net/npm/sass.js@0.11.1/dist/sass.sync.min.js',
    factory: () => {
      const Sass = (window as any).Sass;
      return async (code, { config, language }): Promise<string> =>
        new Promise((resolve) => {
          const opt =
            language === 'sass'
              ? {
                  ...getLanguageCustomSettings('sass', config),
                  indentedSyntax: true,
                }
              : getLanguageCustomSettings('scss', config);
          Sass.compile(code, opt, (result: { text: string }) => {
            resolve(result.text);
          });
        });
    },
  },
  extensions: ['scss'],
  editor: 'style',
};