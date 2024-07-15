function setTimer<T>(cb: () => T, interval: number) {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const startTimer = () => {
    timerId = setTimeout(() => {
      cb();
    }, interval);
  };

  const closeTimer = () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return { startTimer, closeTimer };
}

export default setTimer;
