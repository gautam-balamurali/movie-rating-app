export const totalSum = (list, objKey) =>
  list.reduce((acc, curr) => acc + Number(curr[objKey]), 0);

export const insertNumberValuesInArray = (start, end) => {
  const newArray = [];
  for (let i = start; i <= end; i++) newArray.push(i);
  return newArray;
};
