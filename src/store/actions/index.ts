import { CreateEmpty } from "./content-state";

export interface NullAction {
  type: TypeKeys.NULL;
}

// Keep this type updated with each known action
export type ActionTypes = NullAction | CreateEmpty;

export enum TypeKeys {
  // Won't match anything
  NULL = "NULL",
  ERROR = "ERROR",

  CREATE_EMPTY = "CREATE_EMPTY"
}
