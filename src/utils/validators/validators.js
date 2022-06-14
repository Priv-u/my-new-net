
export const required = value => {
  if (value) return undefined;
  return "Обязательное поле";
}

export const maxValidLength = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `Длина текста более ${maxLength} символов!!!`;
  return undefined;
}
