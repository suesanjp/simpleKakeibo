import { useEffect, useState } from "react";
import { addTransaction, deleteTransaction, fetchTransactions } from "../api";
import { Transaction } from "../types";

const Kakeibo = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    const data = await fetchTransactions();
    setTransactions(data);
  };

  const handleAddTransaction = async () => {
    if (!amount || !category || !date) return;
    await addTransaction({
      amount: Number(amount),
      category,
      date,
      description,
    });
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
    loadTransactions();
  };

  const handleDeleteTransaction = async (id: number) => {
    await deleteTransaction(id);
    loadTransactions();
  };

  return (
    <div>
      <h2>家計簿</h2>

      <div>
        <input
          type="number"
          placeholder="金額"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="カテゴリ"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="説明 (任意)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTransaction}>追加</button>
      </div>

      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.date} - {t.category}: ¥{t.amount} ({t.description})
            <button onClick={() => handleDeleteTransaction(t.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kakeibo;
