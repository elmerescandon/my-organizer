"use client";

import Container from '@mui/material/Container';
import { Box, ThemeProvider } from '@mui/material';
import theme from './mui.config';
import styles from "../styles/home.module.scss";
import HomeInfo from '@/components/molecules/HomeInfo/HomeInfo';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.main}>
        <HomeInfo/>
      </Container>
    </ThemeProvider>

  );
};

export default Home;