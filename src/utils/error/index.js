
export const warn = (name, message) => {
  const err = new Error();
  err.name = name;
  err.message = message;
  return err;
}