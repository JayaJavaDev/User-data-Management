function UserCard({ user, editUser, deleteUser }) {

  return (

    <div className="user-card">

      <div className="user-avatar">
        {user.name?.charAt(0).toUpperCase()}
      </div>

      <h3>{user.name}</h3>

      <p>{user.email}</p>

      <p>Age: {user.age}</p>

      <p>Phone: {user.phone}</p>

      <div className="card-actions">

        <button onClick={() => editUser(user)}>
          Edit
        </button>

        <button onClick={() => deleteUser(user.id)}>
          Delete
        </button>

      </div>

    </div>

  );

}

export default UserCard;
