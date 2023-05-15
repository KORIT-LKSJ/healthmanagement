import { atom } from "recoil";

export const refreshState = atom({
  key: "refreshState",
  default: true,
});

export const authenticatedState = atom({
  key: "authenticateState",
  default: false,
});
