import  "./friend.css"


function Friend ({onCurSelect,name,status, photo, curSelected, num}) {
    
        const isSelected = num === curSelected

    function  handleCurSelected() {
        onCurSelect( isSelected ? null : num);
    }
    return (
        <>
        <div className="friend">
            <img src={photo} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{status}</p>
            </div>
            <button onClick={handleCurSelected} >{ !isSelected ? "Select" : "Close"}</button>
        </div>
        
        </>
    )
}

export default Friend;