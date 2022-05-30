export const isValueNeeded = <T, K extends keyof T>(
  obj: T,
  key: keyof T,
  id: T[K],
  keyId: keyof T
): string => {
  if (obj[keyId] === id && !!obj[key]) {
    return '';
  } else {
    return `${key}`;
  }
};
