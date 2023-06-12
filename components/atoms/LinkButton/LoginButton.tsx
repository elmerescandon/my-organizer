import Link from 'next/link';
import styles from './LoginButton.module.scss';
import { Button } from '@mui/material';

type LoginButtonProps = {
    label: string;
}

const LoginButton = ({label} : LoginButtonProps) => {
  return (
    <Link href='/login' passHref>
      <Button className={styles.login_button} variant="contained">{label}</Button>
    </Link>
  );
}

export default LoginButton;