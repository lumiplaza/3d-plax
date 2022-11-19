import styled from 'styled-components';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import imageFondo from '../../assets/Imagenes/FondoNavBar.png'

export const BoxWrapper = styled(Box)`
  background-color: #161618cc;
  padding:1.5rem;
  text-align: center;
  background-image: url(${imageFondo});
`

export const ImgLogo = styled.img`
  width: 11%;
  height: 147%;
  margin: -0.5rem 4rem 1rem -12rem;
  margin-right: 4rem;
  margin-left: -12rem;
`
export const MenuItemsWrapper = styled(BottomNavigation)`
  padding: 1.2rem;
  border-radius: 5%;
  border-style:inset;
  border-inline-color: #161618cc;
  writing-mode: horizontal-tb;

`