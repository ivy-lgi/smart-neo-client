import { SmartNeoClient } from '@axonivy/smart-neo-client';
import { HotkeysProvider, ThemeProvider } from '@axonivy/ui-components';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { initTranslation } from './i18n';
import './index.css';
import { themeParam } from './url-helper';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found.');
}
const root = ReactDOM.createRoot(rootElement);

const theme = themeParam();

initTranslation();

root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={theme}>
      <HotkeysProvider initiallyActiveScopes={['global']}>
        <SmartNeoClient/>
      </HotkeysProvider>
    </ThemeProvider>
  </React.StrictMode>
);
