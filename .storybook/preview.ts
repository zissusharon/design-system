import { Preview } from '@storybook/react';
import { theme } from '../src/theme/theme';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }
  `;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: { theme },
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
