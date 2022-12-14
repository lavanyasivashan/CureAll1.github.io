import * as React from 'react';
import { Link } from "react-router-dom";
import {useState}from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Address from '../components/Address';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 1500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/product"><BottomNavigationAction label="Home" icon={<HomeIcon />} /></Link>
        <Link to="/address"><BottomNavigationAction label="Address" icon={<ManageAccountsIcon/>}/></Link>
        <Link to="/contact"><BottomNavigationAction label="Contact us" icon={<ContactPageIcon />} /></Link>
      </BottomNavigation>
    </Box>
  );
}