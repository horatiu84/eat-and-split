import { useState } from "react";
import "./SplitABillForm.css";

function SplitABillForm({ friend, onUpdateFriend }) {
  const [bill, setBill] = useState('');
  const [myExpense, setMyExpense] = useState('');
  const myFriendExpense = bill - myExpense;
  const [whoPays, setWhoPays] = useState("you");

  function handleBillSplit() {
    if (!bill) return;
    const newAmount =
      whoPays === "you"
        ? friend.amount + myFriendExpense
        : friend.amount - myExpense;
    const updatedFriend = { ...friend, amount: newAmount };
    onUpdateFriend(updatedFriend);
  }

  function handleBillChange(e) {
    setBill(e.target.value);
  }

  function handleMyExpenseChange(e) {
    setMyExpense(e.target.value);
  }

  return (
    <div className="splitForm">
      <h3>SPLIT A BILL WITH {friend.name.toUpperCase()}</h3>
      <div className=" content">
        <div>
          <label>Bill value</label>
          <input
            type="text"
            name="bill"
            value={bill}
            onChange={handleBillChange}
          />
        </div>
        <div>
          <label>Your expense</label>
          <input
            type="text"
            name="yourExpense"
            value={myExpense}
            onChange={handleMyExpenseChange}
          />
        </div>
        <div>
          <label>{friend.name}'s expense</label>
          <input
            type="text"
            name="friendExpense"
            disabled
            value={myFriendExpense}
          />
        </div>
        <div>
          <label>Who is paying the bill?</label>
          <select
            name="payBill"
            value={whoPays}
            onChange={(e) => setWhoPays(e.target.value)}
          >
            <option value="you">You</option>
            <option value={friend.name}>{friend.name}</option>
          </select>
        </div>
        <button onClick={handleBillSplit}>Split bill</button>
      </div>
    </div>
  );
}

export default SplitABillForm;
