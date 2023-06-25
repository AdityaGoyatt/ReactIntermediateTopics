import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increase: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increase: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ max: 0 })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CounterStore", useCounterStore);
}

export default useCounterStore;
