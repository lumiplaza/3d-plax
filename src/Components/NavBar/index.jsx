import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { BoxWrapper, ImgLogo } from './styles';
import CartWidget from '../CartWidget';
import Logo from '../../assets/Imagenes/3dplaxLogo.png'


const NavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BoxWrapper>
      <BottomNavigation
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
      </BottomNavigation>
    </BoxWrapper>
  );
}
export default NavBar;