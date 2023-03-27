import React from 'react'
import { useDeleteOnePostMutation } from '../store/api/postApi'
import { useNavigate, Link } from "react-router-dom";

const CardsPosts = ({publishDate, text, owner}) => {
  const [deleteOnePost, { isLoading }] = useDeleteOnePostMutation();

  const navigate = useNavigate()

  const deleteCard = async () =>{
    try {
      await deleteOnePost(id).unwrap();
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Failed to delete Post", error);
    }
  }
  return (
    <div>
      <div className="card">
        <p>Publish Date: {publishDate}</p>
        <div className="card-body">
          {/* <h5 className="card-title">{title} {firstName} {lastName}</h5> */}
          <p>User: {owner}</p>
          <p>{text}</p>
          <button onClick={deleteCard}>Delete</button>
          <button onClick={()=>navigate(`/post/${id}`) }>View</button>
        </div>
      </div>
    </div>
  );
};

export default CardsPosts