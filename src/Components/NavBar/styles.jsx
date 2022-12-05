import styled from 'styled-components';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import imageFondo from '../../assets/Imagenes/FondoNavBar.png';
import Logo from '../../assets/Imagenes/3dplax-logo.jpeg';

export const BoxWrapper = styled(Box)`
  background-color: #161618cc;
  padding:1.5rem;
  text-align: center;
  background-image: url(${imageFondo});
`

export const ImgLogo = styled.button`
  width: 13%;
  height: 154%;
  margin: -0.5rem 4rem 1rem -1rem;
  background-image: url(${Logo}) ;
  background-size: 100% 90px ;
  border:0;
`
export const MenuItemsWrapper = styled(BottomNavigation)`
  padding: 1.2rem;
  border-radius: 5%;
  border-style:inset;
  writing-mode: horizontal-tb;

`