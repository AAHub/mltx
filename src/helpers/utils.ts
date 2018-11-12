export const sayHello = () => {
  return Math.random() < 0.5 ? "Hello" : "Hola";
};

export const generateKey = () => {
  const len = 8;
  const c = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cl = c.length;
  var r = "";
  for (var i = 0; i < len; i++) {
    r += c[Math.floor(Math.random() * cl)];
  }
  return r;
};
