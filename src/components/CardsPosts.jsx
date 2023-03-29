import React from "react";
import { useDeleteOnePostMutation } from "../store/api/postApi";
import { useNavigate, Link } from "react-router-dom";

const CardsPosts = ({ publishDate, text, owner, image, id }) => {
  const [deleteOnePost, { isLoading }] = useDeleteOnePostMutation();

  const { title, firstName, lastName } = owner;

  const navigate = useNavigate();

  const deleteCard = async () => {
    try {
      await deleteOnePost(id).unwrap();
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Failed to delete Post", error);
    }
  };
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {title} {firstName} {lastName}
          </h5>
          <p>{text}</p>
          <p>Publish Date: {publishDate}</p>
          <button onClick={deleteCard}>Delete</button>
          <button onClick={() => navigate(`/post/${id}`)}>View</button>
        </div>
      </div>
    </div>
  );
};

export default CardsPosts;
