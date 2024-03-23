import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Portal from './Portal';
import usePreloadImages from './usePreloadImages';

import styles from './SplashScreen.module.scss';

const imagesUrls = ['./arrow.svg', './background.jpg', './milkovskyi.png', './ticket.png'];

const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const SplashScreen = () => {
  const [isLoading, loadingTime] = usePreloadImages(imagesUrls);

  const [isOpen, setIsOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    (async () => {
      if (isLoading) {
        setIsOpen(true);
        setIsClosing(false);
      } else {
        await timeout(300 - loadingTime);

        setIsOpen(false);
        setIsClosing(true);

        await timeout(300);

        setIsClosing(false);
      }
    })();
  }, [isLoading, loadingTime]);

  return (
    <Portal>
      {(isOpen || isClosing) && (
        <div
          className={classNames(styles.container, {
            [styles.isOpen]: isOpen,
          })}
        >
          {isOpen && <div className={styles.loader} />}
        </div>
      )}
    </Portal>
  );
};

export default SplashScreen;
