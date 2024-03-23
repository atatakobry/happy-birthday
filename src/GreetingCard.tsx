import styles from './GreetingCard.module.scss';

const GreetingCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Happy Birthday!</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.ticket}>
            <a
              className={styles.ticketLink}
              target="_blank"
              href="https://drive.google.com/drive/folders/1kZdMnnJhvZJexxygwx68ROMievPX9onM?usp=sharing"
            />
            <div className={styles.ticketBackground} />

            <div className={styles.ticketHint}>
              забери
              <br />
              мене!&nbsp;🥺
            </div>
          </div>
        </div>

        <div>
          <div className={styles.milkovskyi} />
        </div>
      </div>

      <div className={styles.backgroundImage} />
      <div className={styles.backgroundVignette} />
    </>
  );
};

export default GreetingCard;
