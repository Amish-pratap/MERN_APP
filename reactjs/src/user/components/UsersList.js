import './UsersList.css';
import UserItem from './UserItem';

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div>
        )
    }
    return (<ul>
        {props.items.map(users => (
            <UserItem key={users.id}
                id={users.id}
                image={users.image}
                name={users.name}
                placeCount={users.places}
            />
        ))}
    </ul>
    );
}

export default UsersList;