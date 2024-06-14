import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";
import SplitABillForm from "./SplitABillForm";
import { useState } from "react";
import "./FriendList.css";

const friends = [
  {
    name: "Clark",
    photo:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    amount: -7,
  },
  {
    name: "Sarah",
    photo:
      "https://media.meer.com/attachments/fab1026dcd503986811212d6bf4f44b28551991c/store/fill/860/645/95695d4e4c4394fb92cc829a02c7b4ed57dae7e1d0e9a5c2cf9600084c5e/A-bright-woman.jpg",
    amount: 20,
  },
  {
    name: "Anthony",
    photo:
      "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=sph",
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
      <div>
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
