export const getDayOfWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  let result;

  switch (dayOfWeek) {
    case 0:
      result = "sun";
      break;
    case 1:
      result = "mon";
      break;
    case 2:
      result = "tue";
      break;
    case 3:
      result = "wed";
      break;
    case 4:
      result = "thu";
      break;
    case 5:
      result = "fri";
      break;
    case 6:
      result = "sat";
      break;
  }

  return result;
};
