import { useState } from "react";
function AddFriendForm({onToggleAdd,handleAddFriend}) {
    const [name,setName] = useState("")
   
    const rand = Math.floor(Math.random() * 1000);
    const imgUrl = `https://i.pravatar.cc/${rand}`;
    const description = `You and ${name} are even`;

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) return;
        const newFreind ={name: name, photo: imgUrl, status: description};
        handleAddFriend(newFreind);
        onToggleAdd();
    }
    return (
        <div>
         <form>
            <label>Friend name</label>
            <input type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)} />
            <label>Image URL</label>
            <input type="text" name="imageUrl" value={imgUrl}/>
            <button onClick={handleSubmit}>Add</button>
         </form>
         <button onClick={onToggleAdd}>Close</button>
        </div>
    )
}

export default AddFriendForm;