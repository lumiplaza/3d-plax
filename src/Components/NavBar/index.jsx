import * as React from 'react';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { BoxWrapper, ImgLogo, MenuItemsWrapper } from './styles';
import CartWidget from '../CartWidget';
import Logo from '../../assets/Imagenes/3dplax-logo.jpeg';


const NavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BoxWrapper>
      <MenuItemsWrapper
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <ImgLogo src = {Logo} alt='Logo'/>
        <BottomNavigationAction label="About Us" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Products" icon={<SearchIcon />} />
        <BottomNavigationAction label="More Info" icon={<HelpCenterIcon />} />
        <BottomNavigationAction label="Contact Us" icon={<AlternateEmailIcon />} />
        <BottomNavigationAction label="Sign In" icon={<LockOpenIcon />} />
        <CartWidget/>
      </MenuItemsWrapper>
    </BoxWrapper>
  );
}
export default NavBar;