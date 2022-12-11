import * as React from 'react';
import { useNavigate } from "react-router-dom"


import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { BoxWrapper, ImgLogo, MenuItemsWrapper } from './styles';
import CartWidget from '../CartWidget';
import Logo from '../../assets/Imagenes/3dplax-logo.jpeg';
import MenuProducts from '../MenuProducts';



const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  function initNavigate() {
    navigate("/");
  }

    function goToCart() {
      navigate("/cart");}


  return (
    <BoxWrapper>
      <MenuItemsWrapper
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <ImgLogo onClick={initNavigate} src={Logo} alt='Logo'/>
        <BottomNavigationAction label="About Us" icon={<MenuBookIcon />} />
        <MenuProducts />
        <BottomNavigationAction label="More Info" icon={<HelpCenterIcon />} />
        <BottomNavigationAction label="Contact Us" icon={<AlternateEmailIcon />} />
        <BottomNavigationAction  label="Sign In" icon={<LockOpenIcon />}  />
        <CartWidget onClick={goToCart}/>
      </MenuItemsWrapper>

    </BoxWrapper>
  );
}
export default NavBar;