import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Happy Birthday!</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.ticketWrapper}>
            <a
              className={styles.ticket}
              target="_blank"
              href="https://drive.google.com/drive/folders/1kZdMnnJhvZJexxygwx68ROMievPX9onM?usp=sharing"
            />
            <div className={styles.ticketHint}>
              забери
              <br />
              мене!&nbsp;🥺
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.milkovskyi} />
        </div>
      </div>

      <div className={styles.background} />
      <div className={styles.backgroundVignette} />
    </>
  );
};

export default App;
