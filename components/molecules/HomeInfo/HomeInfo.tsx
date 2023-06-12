"use client";

import MainButton from '@/components/atoms/MainButton/MainButton'
import { Container, Typography } from '@mui/material'
import Link from 'next/link';

import styles from './HomeInfo.module.scss';
import LoginButton from '@/components/atoms/LinkButton/LoginButton';

const HomeInfo = () => {
  return (
    <Container className={styles.home_info}>
        <Typography variant='h1' className={styles.home_info__title}>
            Organize Me
        </Typography>
        <Typography variant='h4'>
            Live your best life with organization.
        </Typography>
        <LoginButton label="Let's Get Started"/>
    </Container>
  )
}

export default HomeInfo;