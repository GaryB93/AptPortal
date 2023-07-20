const dateString = () => {
  const date = new Date(Date.now());
  const dateAsString =
    (date.getMonth() + 1) + '/' +
    (date.getDate()) + '/' +
    (date.getFullYear());
  return dateAsString;
};

export default dateString;