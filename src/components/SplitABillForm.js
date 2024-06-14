import "./SplitABillForm.css";
function SplitABillForm({ friend, onUpdateFriend }) {
  const description = "test";
  function handleBillSplit() {
    const updatedFriend = { ...friend, status: description };
    onUpdateFriend(updatedFriend);
  }
  return (
    <div className="splitForm">
      <h3>SPLIT A BILL WITH {friend.name}</h3>
      <div className="splitForm">
        <div>
          <label>Bill value</label>
          <input type="text" name="bill" />
        </div>
        <div>
          <label>Your expense</label>
          <input type="text" name="yourExpense" />
        </div>
        <div>
          <label>{friend.name}'s expense</label>
          <input type="text" name="friendExpense" />
        </div>
        <div>
          <label>Who is paying the bill?</label>
          <select name="payBill">
            <option value="you">You</option>
            <option value="friend">{friend.name}</option>
          </select>
        </div>
        <button onClick={handleBillSplit}>Split bill</button>
      </div>
    </div>
  );
}

export default SplitABillForm;
