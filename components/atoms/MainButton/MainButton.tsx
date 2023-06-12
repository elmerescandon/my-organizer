import { Button } from '@mui/material'
import styles from './MainButton.module.scss';

type MainButtonProps = {
    ButtonLabel: string;
}

const MainButton = ({ButtonLabel} : MainButtonProps) => {
  return (
    <Button variant='contained' className={styles.main_button}>
        {ButtonLabel}
    </Button>
  );
}

export default MainButton;