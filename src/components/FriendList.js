import Friend from "./Friend";

const friends = [
    { name: 'Clark',
      photo : 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      status: 'You owe Clark 7$'
    },
    { name: 'Sarah',
      photo : 'https://media.meer.com/attachments/fab1026dcd503986811212d6bf4f44b28551991c/store/fill/860/645/95695d4e4c4394fb92cc829a02c7b4ed57dae7e1d0e9a5c2cf9600084c5e/A-bright-woman.jpg',
      status: 'Sarah owes you 20$'
    },
    { name: 'Anthony',
      photo : 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=sph',
      status: 'You and Anthony are even'
    },
];

function FriendList() {
    return (
        <div>
            {friends.map( friend => {
                return  <Friend name={friend.name} status={friend.status} photo={friend.photo} />
            })}
        </div>
    )
}

export default FriendList;