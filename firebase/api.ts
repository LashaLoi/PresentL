import { ref, child, get, set } from "firebase/database";

import { database } from "./init";

const dbRef = ref(database);

export const getStep = async () => {
  const snapshot = await get(child(dbRef, "step"));

  if (!snapshot.exists()) {
    throw new Error("Something went wrong");
  }

  return snapshot.val() as number;
};

export const setStep = (step: number) => set(ref(database, "step"), step);
