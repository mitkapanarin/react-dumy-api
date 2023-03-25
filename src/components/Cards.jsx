import React from "react";
import { axiosInstance } from "../axios/axiosHttp";
import { useDeleteOneUserMutation } from "../store/api/userApi";
import { useNavigate, Link } from "react-router-dom";

const Cards = ({id, firstName, lastName, picture, title}) => {

  const [deleteOneUser, { isLoading }] = useDeleteOneUserMutation();

  const navigate = useNavigate()

  const deleteCard = async () =>{
    try {
      await deleteOneUser(id).unwrap();
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  }
  return (
    <div>
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} {firstName} {lastName}</h5>
          <button onClick={deleteCard}>Delete</button>
          <button onClick={()=>navigate(`/users/${id}`) }>View</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
