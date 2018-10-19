export const returnTitle = text => {
  if (text) {
    if (text.split(' ')[1]) {
      return `${text.split(' ')[0]}..._OnePost`;
    } else {
      return `${text.split(' ')[0]}_OnePost`;
    }
  } else return `OnePost`;
};
