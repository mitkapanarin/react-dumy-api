import React, { useState } from "react";
import { axiosInstance } from "../axios/axiosHttp";
import {
  useDeleteUserMutation,
  useCreateUserMutation,
} from "../store/api/userApi";
import { useNavigate, Link } from "react-router-dom";
import UserModal from "./UserModal";

const Cards = ({ id, firstName, lastName, picture, title }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const [createUser] = useCreateUserMutation();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(newUser);
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      console.log("User created successfully");
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  const navigate = useNavigate();

  const deleteCard = async () => {
    try {
      await deleteUser(id);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };
  return (
    <div>
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {title} {firstName} {lastName}
          </h5>
          <button onClick={deleteCard}>Delete</button>
          <button onClick={() => navigate(`/users/${id}`)}>View</button>
          <UserModal handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
