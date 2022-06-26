import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);