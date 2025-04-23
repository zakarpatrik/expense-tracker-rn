export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0'); // months are 0-based
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};