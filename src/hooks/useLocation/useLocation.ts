import { useContext, useEffect, useState } from 'react';
import { LocationData, UseLocation } from './types';
import { ToastContext } from '../../context/ToastContext';
import { ToastType } from '../../components/atoms/Toast/types';

/**
 * Learn more about how to get the position via the browser API
 * on https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition.
 */

/**
 * Hook for getting the current location using the browser API.
 * @returns
 */
export const useLocation = (): UseLocation => {
  const [data, setData] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);

  const { createToast } = useContext(ToastContext);

  useEffect(() => {
    // We declare–and–call an anonymous function to fetch the
    // coords from the browser API.
    (async () => {
      const options: PositionOptions = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      };

      function success(pos: GeolocationPosition) {
        setIsLoading(false);

        setData({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      }

      function error(_: GeolocationPositionError) {
        createToast({
          title: 'Something went wrong',
          desc: 'Couldn’t find your location',
          type: ToastType.WARNING,
        });
        setIsLoading(false);
        setIsError(true);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    })();
  }, []);

  return [data, isLoading, isError];
};
