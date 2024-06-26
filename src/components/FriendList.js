import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";
import SplitABillForm from "./SplitABillForm";
import { useState } from "react";
import "./FriendList.css";

const friends = [
  {
    name: "Clark",
    photo:
      "https://i.pravatar.cc/115",
    amount: -7,
  },
  {
    name: "Sarah",
    photo:
    "https://i.pravatar.cc/116",
    amount: 20,
  },
  {
    name: "Anthony",
    photo:
    "https://i.pravatar.cc/117",
    amount: 0,
  },
];

function FriendList() {
  const [addToggle, setAddToggle] = useState(false);
  const [curSelected, setCurSelected] = useState(null);
  const [data, setData] = useState([...friends]);

  function handleAddFriend(newFriend) {
    setData([...data, newFriend]);
  }

  function handleUpdateFriend(friend) {
    const newData = [...data];
    newData.splice(curSelected, 1, friend);
    setData(newData);
    setCurSelected(null);
  }

  function handleToggleAdd() {
    setAddToggle((cur) => !cur);
  }
  return (
    <div className="app">
      <div className="appContent">
        {data.map((friend, i) => {
          return (
            <Friend
              name={friend.name}
              onCurSelect={setCurSelected}
              curSelected={curSelected}
              amount={friend.amount}
              photo={friend.photo}
              num={i}
              key={i}
            />
          );
        })}

        {!addToggle && <button onClick={handleToggleAdd}>Add friend</button>}
        {addToggle && (
          <AddFriendForm
            onToggleAdd={handleToggleAdd}
            handleAddFriend={handleAddFriend}
          />
        )}
      </div>
      <div>
        {curSelected !== null && (
          <SplitABillForm
            friend={data[curSelected]}
            onUpdateFriend={handleUpdateFriend}
          />
        )}
      </div>
    </div>
  );
}

export default FriendList;
