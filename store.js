import { atom } from "jotai";

export const navAtom = atom({
  module: 1,
  section: false,
  next: false,
  prev: false,
});
