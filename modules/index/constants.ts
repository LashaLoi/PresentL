export const images = [
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80",
];

export const variants = {
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

export const fadeAnimation = {
  variants,
  initial: "init",
  animate: "enter",
  exit: "exit",
};
