import { defaultMaxListeners } from "events";
import { create } from "zustand";

interface UserStore {
  name: string;
  login: (userName: string) => void;
  logout: () => void;
}

const StorageUser = create<UserStore>((set) => ({
  name: "",
  login: (UserName) => set((store) => ({ name: UserName })),
  logout: () => set(() => ({ name: "" })),
}));

export default StorageUser;
