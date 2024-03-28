export const capitalizeWithoutDash = (str) => {
  if (!str) return null;
  let words = str.split('-');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  let result = words.join(' ');

  return result;
};
