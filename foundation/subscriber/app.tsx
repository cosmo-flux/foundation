import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { ThemeProvider } from '@cosmo-flux/design.material-ui-theme';
import { Header, HeaderLink } from '@cosmo-flux/foundation.ui.header';

export interface RouteType {
  path: string;
  element: React.ReactNode;
}

export class App {
  private routes: RouteType[] = [];

  private headerLinks: HeaderLink[] = [];

  registerRoutes(routes: RouteType[]) {
    this.routes.push(...routes);
  }

  registerHeaderLinks(headerLinks: HeaderLink[]) {
    this.headerLinks.push(...headerLinks);
  }

  listRoutes() {
    return this.routes;
  }

  listHeaderLinks() {
    return this.headerLinks;
  }

  renderApp() {
    return (
      <ThemeProvider>
        <Header links={this.listHeaderLinks()} />
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Routes>
            {this.listRoutes().map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Container>
      </ThemeProvider>
    );
  }
}
