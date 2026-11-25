import UserCard from "./Usercard";

function UserList({ users, editUser, deleteUser }) {

  return (

    <div className="user-list">

      {users.map((user) => (

        <UserCard
          key={user.id}
          user={user}
          editUser={editUser}
          deleteUser={deleteUser}
        />

      ))}

    </div>

  );

}

export default UserList;
