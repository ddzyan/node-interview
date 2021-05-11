let debounce = (func, wait) => {
  let timer = setTimeout(() => {}, wait);

  return (...params) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...params), wait);
  };
};
