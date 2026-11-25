function Header({ openAddForm }) {
  return (
    <header className="header">

      <div className="header-content">
       <h1>
        <span className="user-emoji">👥</span> User Data
       </h1>
        <p>Manage and organize your users effortlessly!</p>
      </div>

      <button
        className="add-btn"
        onClick={openAddForm}
      >
        + Add User
      </button>

    </header>
  );
}

export default Header;