import data from "./data.json";

export const findClient = (clientName) =>
  data.users.find((el) => el.cliente === clientName);

export const innerText = (text) => ({ __html: text });
