export type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};