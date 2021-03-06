import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" width="100%">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="30px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '15%', height: '15%' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="11px" textAlign="center" pb="40px">Made with ❤️ by Sahitya Nijhawan</Typography>
  </Box>
);

export default Footer;