export interface NotificationStateType {
  type: "success" | "error";
  message?: string;
}

export interface CollectionsType {
  [key: string]: number[];
}
