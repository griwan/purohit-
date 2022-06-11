import { atom } from "jotai";

export const navAtom = atom({
  module: 1,
  section: false,
  footer: false,
  next: false,
  prev: false,
});

export const footerAtom = atom({
  enable: false,
  className: "",
});
