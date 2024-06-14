import './SplitABillForm.css';
function SplitABillForm({name}) {
    return (
        <div className="splitForm">
        <h3>SPLIT A BILL WITH {name}</h3>
        <div className="splitForm">
            <div>
                <label>Bill value</label>
                <input type="text" name="bill"/>
            </div>
            <div>
                <label>Your expense</label>
                <input type="text" name="yourExpense"/>
            </div>
            <div>
                <label>{name}'s expense</label>
                <input type="text" name="friendExpense"/>
            </div>
            <div>
            <label>Who is paying the bill?</label>
            <select name="payBill">
                <option value='you'>You</option>
                <option value='friend'>{name}</option>
            </select>
            </div>
            <button>Split bill</button>
        </div>
        </div>
    )
}

export default SplitABillForm;