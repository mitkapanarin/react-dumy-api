import React from "react";
import { useGetOneUserQuery } from "../store/api/userApi";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();

  const { data, isLoading } = useGetOneUserQuery(params.id);
  console.log(data);

  const { title, firstName, lastName, picture } = data || {};

  return (
    <div>
      {isLoading ? (
        "loading please wait....."
      ) : (
        <>
          <h1>
            {title} {firstName} {lastName}
          </h1>
          <img src={picture} alt={`${firstName} ${lastName}`} />
        </>
      )}
    </div>
  );
};

export default UserDetails;
