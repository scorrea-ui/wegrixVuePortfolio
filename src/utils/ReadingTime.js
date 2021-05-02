const readingTime = (element) => {
  const wpm = 300;
  const text = element.innerText;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};

export default readingTime;
