import "./friend.css";

function Friend({ onCurSelect, name, photo, curSelected, num, amount }) {
  const isSelected = num === curSelected;
  function handleCurSelected() {
    onCurSelect(isSelected ? null : num);
  }
  return (
    <>
      <div className="friend">
        <img src={photo} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>
            {amount === 0
              ? `You and ${name} are even`
              : amount > 0
              ? `${name} owes you ${amount}$ `
              : `You owe ${name} ${Math.abs(amount)}$`}
          </p>
        </div>
        <button onClick={handleCurSelected}>
          {!isSelected ? "Select" : "Close"}
        </button>
      </div>
    </>
  );
}

export default Friend;
