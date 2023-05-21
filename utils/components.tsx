export const capitalizeAWord = (str: string) => {
    return str
      ? str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
      : str;
  };