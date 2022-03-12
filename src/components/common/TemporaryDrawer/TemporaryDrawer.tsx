import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import Link from '../Link';

type Anchor = 'left';

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
  });
  const LEFT = 'left';

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        auto: 250,
        backgroundColor: 'background.default',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Menu', 'Our history', 'Blog', 'Contact'].map((text) => {
          return (
            <ListItem button key={text}>
              <Link
                sx={{
                  textDecoration: 'none',
                }}
                href={`/${
                  text.toLowerCase() === 'home' ? '/' : text.toLowerCase()
                }`}
              >
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link
            href={'/login'}
            sx={{
              textDecoration: 'none',
            }}
          >
            <ListItemText primary={'Login'} />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <MenuTwoToneIcon
          onClick={toggleDrawer(LEFT, true)}
          sx={{ fontSize: 40 }}
        />
      </Box>

      <Drawer
        anchor={LEFT}
        open={state[LEFT]}
        onClose={toggleDrawer(LEFT, false)}
      >
        {list(LEFT)}
      </Drawer>
    </Box>
  );
}
