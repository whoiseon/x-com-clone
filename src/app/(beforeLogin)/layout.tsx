import styles from '@/app/(beforeLogin)/_components/main.module.css';

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

function BeforeLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

export default BeforeLayout;
