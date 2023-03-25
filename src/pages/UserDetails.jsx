import React from "react";
import { useGetOneUserQuery } from "../store/api/userApi";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

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
        </>
      )}
    </div>
  );
};

export default UserDetails;
