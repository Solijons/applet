import React from 'react';
import AppBarNav from './AppBarNav';
import DrawerHelper from './Drawer';
import { IDrawerProps } from './interfaces';


const Navigation: React.FunctionComponent<IDrawerProps> = (props) => {
  const { open, handleDrawerClose, handleDrawerOpen, navigation } = props;

  return (
    <>
      <AppBarNav
        navigation={navigation}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <DrawerHelper
        navigation={navigation}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  );
}

export default Navigation;
