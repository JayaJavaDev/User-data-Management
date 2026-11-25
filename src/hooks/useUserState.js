import { useState } from "react";

const useUserState = () => {

  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: ""
  });

  return {
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
  };
};

export default useUserState;
