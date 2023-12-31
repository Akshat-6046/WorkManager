export const getNext7Days = (startDate) => {
  const next7Days = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);

    const formattedDate = nextDate.toISOString().split("T")[0];
    next7Days.push(formattedDate);
  }

  return next7Days;
};
