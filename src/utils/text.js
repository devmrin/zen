export const returnTitle = text => {
  if (text) {
    if (text.split(' ')[1]) {
      return `${text.split(' ')[0]}-Zen`;
    } else {
      return `${text.split(' ')[0]}-Zen`;
    }
  } else return `Zen`;
};

export const returnCount = text => {
  if (text.split(' ').length === 1) {
    return text.trim().split(/\s+/).length - 1;
  }
  return text.trim().split(/\s+/).length;
};
