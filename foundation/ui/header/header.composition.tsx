import { ThemeProvider } from '@cosmo-flux/design.material-ui-theme';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header.js';

export const BasicHeader = () => {
  return (
    <ThemeProvider>
      <MemoryRouter>
        <Header
          links={[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Contact', path: '/contact' },
          ]}
        />
      </MemoryRouter>
    </ThemeProvider>
  );
};
