export const returnTitle = (text) => {
  if (text) {
    return `${text.split(" ")[0]}-Zen`;
  } else return `Zen`;
};

export const returnCount = (text) => {
  if (text.split(" ").length === 1) {
    return text.trim().split(/\s+/).length - 1;
  }
  return text.trim().split(/\s+/).length;
};

export const returnReplaced = (text) => {
  // handle replace values
  if (text.includes("->")) {
    text = text.replace("->", "→");
  }

  return text;
};
