import React from 'react';
import { AppBar, Toolbar } from '@cosmo-flux/design.surfaces.app-bar';
import { Button, IconButton } from '@cosmo-flux/design.inputs.button';
import { Box } from '@cosmo-flux/design.layout.box';
import { Typography } from '@cosmo-flux/design.data-display.typography';
import { Menu, MenuItem } from '@cosmo-flux/design.navigation.menu';
import { Avatar } from '@cosmo-flux/design.data-display.avatar';
import { Tooltip } from '@cosmo-flux/design.data-display.tooltip';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { HeaderLink } from './header-link.js';

export type HeaderProps = {
  /**
   * name of the brand
   */
  name?: string;

  /**
   * list of header links.
   */
  links?: HeaderLink[];

  /**
   * image of the logo
   */
  logoImage?: string;
};

export function Header({
  logoImage = 'https://static.bit.dev/extensions-icons/my-project.svg',
  name = 'App',
  links = [],
}: HeaderProps) {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ px: 2 }}>
      <Toolbar disableGutters>
        <Avatar
          src={logoImage}
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
        />
        <Typography
          variant="h6"
          noWrap
          component={RouterLink}
          // @ts-ignore
          to="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {name}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {links.map((link) => (
              <MenuItem
                component={RouterLink}
                // @ts-ignore
                to={link.path}
                key={link.path}
                onClick={handleCloseNavMenu}
              >
                <Typography
                  sx={{
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {link.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Avatar
          src={logoImage}
          sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
        />
        <Typography
          variant="h5"
          noWrap
          component={RouterLink}
          // @ts-ignore
          to="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {name}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {links.map((link) => (
            <Button
              key={link.path}
              component={RouterLink}
              // @ts-ignore
              to={link.path}
              onClick={handleCloseNavMenu}
              sx={{
                color: 'white',
                display: 'block',
                fontWeight: 600,
                alignItems: 'center',
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
