import { configureStore } from '@reduxjs/toolkit';
import announced_pu from "../features/announced_pu_results/announced_pu_slice"

export const store = configureStore({
  reducer: {
   announced: announced_pu
  },
});
