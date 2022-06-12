import { atom } from "jotai";
import { useAtomsDebugValue } from "jotai/devtools";

export const navAtom = atom({
  module: 1,
  section: false,
  footer: false,
  next: false,
  prev: false,
});

export const navBehavior = atom({
  forward: true,
});

export const footerAtom = atom({
  enable: false,
  defaults: false,
  className: "",
  content: "",
});

export const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};
