import { TypeOfConst } from "@/general";

export const SESSION_STORAGE_KEYS = {
  THEME: "conwy.theme",
} as const;

export type SessionStorageKey = TypeOfConst<typeof SESSION_STORAGE_KEYS>;
