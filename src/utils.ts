export const dateStringTODate = (dateString: string): Date => {
  //28/10/2018
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });
  //the first argumnet is the year,month and date
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
