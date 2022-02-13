import './App.css';
import { useEffect, useState} from 'react';

function useTimer() {
  const [number, setNumber] = useState(1);
  const [timer, setTimer] = useState(0);
  const [isMultiple, setMultiple] = useState(false);

  const ONE_SECOND = 1000;
  const TEN_SECONDS = 10000;
  const FOUR_SECONDS = 4000;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  const increaseTimerInterval = () => setTimer(timer => timer+1);

  const verifyMultiple = randomNumber => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), FOUR_SECONDS);
    }
  };

  const handleRandomNumber = () => {
    const randomNumber = Math.round(
      Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM,
    );
    verifyMultiple(randomNumber);
    setNumber(randomNumber);
  };

  useEffect(() => {
    const interval = setInterval(handleRandomNumber, TEN_SECONDS);
    const setTimerInterval = setInterval(increaseTimerInterval, ONE_SECOND);
    return (() => {
      console.log('desmontei')
      clearInterval(interval);
      clearInterval(setTimerInterval);
    });
  },[]);

  return { number, isMultiple, timer };
}

export default useTimer;
