export const masehiDate = () => {
  const dateObj = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Jakarta"
  };
  const today = dateObj.toLocaleDateString("id-ID", options);

  return `${today}`;
};

export const hijriahDate = () => {
  const dateObj = new Date('2023-03-26T00:00:00Z');
  const hijriDate = new Intl.DateTimeFormat("id-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(dateObj);

  return `${hijriDate}`;
};






