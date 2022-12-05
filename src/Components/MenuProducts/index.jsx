import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { MenuProductsWrapper, Label } from './styles';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


const MenuProducts = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const VideoJuegos = () => {
    navigate("/category/videojuegos");
  };

  const LibrosYPeliculas = () => {
    navigate("/category/libros y peliculas");
  };

  const Superheroes = () => {
    navigate("/category/superheroes");
  };

  const Anime = () => {
    navigate("/category/anime");
  };


  return (
    <div >
      <MenuProductsWrapper
        onClick={handleClick}
        label="Products"
        icon={<SearchIcon />}
      />
        <Label>Products</Label>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={VideoJuegos}>VideoJuegos</MenuItem>
        <MenuItem onClick={LibrosYPeliculas}>Libros y Peliculas</MenuItem>
        <MenuItem onClick={Superheroes}>Superheroes</MenuItem>
        <MenuItem onClick={Anime}>Anime</MenuItem>
      </Menu>
    </div>
    
  );
}

export default MenuProducts;