import React, { useState, useEffect } from "react";
// import { axiosInstance } from "../axios/axiosHttcop";
import Cards from "../components/Cards";
import { useGetAllUsersQuery, useCreateUserMutation } from "../store/api/userApi";
import Pagination from "../components/Pagination";
import CreateUserModal from "../components/CreateUserModal";

const Home = ({id, firstName, lastName, email, title}) => {
  const [page, setPage] = useState({
    current: 0,
    total: 0,
  });
  console.log(page);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axiosInstance.get("/user").then((res) => setData(res?.data?.data));
  // }, []);

  const { data, error, isLoading } = useGetAllUsersQuery(page.current);
  console.log(error);

  useEffect(() => {
    setPage({
      ...page,
      total: Math.ceil(data?.total/10)  || 0,
    });
  }, [data]);

  const [createUser] =   useCreateUserMutation();

  const [User, setUser] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChangeCreate = (e) => {
    console.log(User);
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
      await createUser(User);
      console.log("User created successfully");
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };


  return (
    <div className="container">
      <CreateUserModal handleChangeCreate={handleChangeCreate} handleSubmitCreate={handleSubmitCreate} id={id}/>
      <Pagination page={page} setPage={setPage} />
      <div className="card-parent">
        {isLoading
          ? "loading please wait"
          : data?.data?.map((item) => <Cards key={item?.id} {...item} />)}

        {error && error.data.error}
      </div>
    </div>
  );
};

export default Home;
