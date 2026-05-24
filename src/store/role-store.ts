import { create } from 'zustand';

export type Role = 'recruiter' | 'technical' | 'explorer';

interface RoleStore {
  activeRole: Role;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
  activeRole: 'recruiter', // default
  setRole: (role) => set({ activeRole: role }),
}));
