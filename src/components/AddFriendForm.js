import { useState } from "react";
import "./addFriendForm.css";
function AddFriendForm({ onToggleAdd, handleAddFriend }) {
  const [name, setName] = useState("");

  const rand = Math.floor(Math.random() * 1000);
  const imgUrl = `https://i.pravatar.cc/${rand}`;

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newFreind = { name: name, photo: imgUrl, amount: 0 };
    handleAddFriend(newFreind);
    onToggleAdd();
  }
  return (
    <div className="addFriend">
      <form className="addFriendForm">
        <div>
          <label>Friend name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" name="imageUrl" value={imgUrl} />
        </div>
        <button onClick={handleSubmit}>Add</button>
      </form>
      <button onClick={onToggleAdd}>Close</button>
    </div>
  );
}

export default AddFriendForm;
