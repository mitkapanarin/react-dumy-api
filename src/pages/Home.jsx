import React, { useState, useEffect } from "react";
// import { axiosInstance } from "../axios/axiosHttcop";
import Cards from "../components/Cards";
import { useGetAllUsersQuery } from "../store/api/userApi";
import Pagination from "../components/Pagination";

const Home = () => {
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

  return (
    <div className="container">
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
