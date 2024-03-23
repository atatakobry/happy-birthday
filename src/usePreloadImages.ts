import { useEffect, useState } from 'react';

const preloadImages = async (imagesUrls: string[]) => {
  const promises = imagesUrls.map(
    (imageUrl) =>
      new Promise((resolve, reject) => {
        const image = new Image();

        image.src = imageUrl;
        image.onload = resolve;
        image.onerror = reject;
      }),
  );

  await Promise.all(promises);
};

const usePreloadImages = (imagesUrls: string[]): [isLoading: boolean, loadingTime: number] => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    (async () => {
      const startDate = new Date();

      await preloadImages(imagesUrls);

      setIsLoading(false);
      setLoadingTime(new Date().valueOf() - startDate.valueOf());
    })();
  }, [imagesUrls]);

  return [isLoading, loadingTime];
};

export default usePreloadImages;
