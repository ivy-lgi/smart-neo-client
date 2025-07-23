import { initQueryClient, QueryProvider, SmartNeoClient } from '@axonivy/smart-neo-client';
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
const queryClient = initQueryClient();

initTranslation();

root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={theme}>
      <QueryProvider client={queryClient}>
        <HotkeysProvider initiallyActiveScopes={['global']}>
          <SmartNeoClient />
        </HotkeysProvider>
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
