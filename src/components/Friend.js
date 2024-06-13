import  "./friend.css"
function Friend ({name,status, photo}) {
    return (
        <div className="friend">
            <img src={photo} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{status}</p>
            </div>
            <button>Select</button>
        </div>
    )
}

export default Friend;