import axios from "axios";
import { Transaction } from "./types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5173/transactions";

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
