
import { useEffect } from "react";
import axios from "axios";

import useUserState from "./hooks/useUserState";

import Header from "./components/Header";
import UserForm from "./components/Userform";
import UserList from "./components/Userlist";

import "./App.css";

const API_URL =
  "https://6b05af3edb01cf463608ef6a.mockapi.io/api/usersdata";

function App() {

  const {
    users,
    setUsers,
    showForm,
    setShowForm,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
    formData,
    setFormData
  } = useUserState();


  // GET USERS
  const getUsers = async () => {

    try {

      const response = await axios.get(API_URL);

      setUsers(response.data);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    getUsers();

  }, []);


  // INPUT CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  // OPEN ADD FORM
  const openAddForm = () => {

    setFormData({
      name: "",
      email: "",
      age: "",
      phone: ""
    });

    setIsEditing(false);

    setEditId(null);

    setShowForm(true);

  };


  // CLOSE FORM
  const closeForm = () => {

    setShowForm(false);

    setIsEditing(false);

    setEditId(null);

  };


  // ADD USER
  const addUser = async (e) => {

    e.preventDefault();

    try {

      await axios.post(API_URL, formData);

      getUsers();

      closeForm();

    } catch (error) {

      console.log(error);

    }

  };


  // EDIT USER
  const editUser = (user) => {

    setFormData({
      name: user.name,
      email: user.email,
      age: user.age,
      phone: user.phone
    });

    setEditId(user.id);

    setIsEditing(true);

    setShowForm(true);

  };


  // UPDATE USER
  const updateUser = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `${API_URL}/${editId}`,
        formData
      );

      getUsers();

      closeForm();

    } catch (error) {

      console.log(error);

    }

  };


  // DELETE USER
  const deleteUser = async (id) => {

    try {

      await axios.delete(`${API_URL}/${id}`);

      getUsers();

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="app">

      <Header openAddForm={openAddForm} />

      {showForm && (

        <UserForm
          formData={formData}
          handleChange={handleChange}
          isEditing={isEditing}
          addUser={addUser}
          updateUser={updateUser}
          closeForm={closeForm}
        />

      )}

      <UserList
        users={users}
        editUser={editUser}
        deleteUser={deleteUser}
      />

    </div>

  );

}

export default App;
