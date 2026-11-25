function UserForm({
  formData,
  handleChange,
  isEditing,
  addUser,
  updateUser,
  closeForm
}) {

  return (

    <div className="modal-overlay">

      <form
        className="user-form"
        onSubmit={isEditing ? updateUser : addUser}
      >

        <h2>
          {isEditing ? "Edit User" : "Add New User"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <div className="form-actions">

          <button type="button" onClick={closeForm}>
            Close
          </button>

          <button type="submit">
            {isEditing ? "Update User" : "Add User"}
          </button>

        </div>

      </form>

    </div>

  );

}

export default UserForm;
