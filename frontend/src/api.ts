import axios from "axios";
import { Transaction } from "./types";

const API_URL = "https://simplekakeibo-production.up.railway.app/transactions";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTransaction = async (transaction: Omit<Transaction, "id">) => {
  await axios.post(API_URL, transaction);
};

export const deleteTransaction = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
