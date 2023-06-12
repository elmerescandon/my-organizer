import styles from '../styles/global.module.scss'

export const metadata = {
  title: 'My Organizer',
  description: 'Live your best list organized',
}

type RootLayoutProps = { 
  children: React.ReactNode;
}

const RootLayout = ({children} : RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={styles.global}>{children}</body>
    </html>
  )
}

export default RootLayout;
