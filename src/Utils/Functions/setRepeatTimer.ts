function setRepeatTimer<T>(cb: () => T, interval: number) {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const startRepeatTimer = () => {
    timerId = setInterval(() => {
      cb();
    }, interval);
  };

  const closeRepeatTimer = () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return { startRepeatTimer, closeRepeatTimer };
}

export default setRepeatTimer;
