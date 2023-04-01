import React, { useState, useEffect } from "react";
import CardsPosts from '../components/CardsPosts';
import { useGetAllPostsQuery } from '../store/api/postApi';
import Pagination from "../components/Pagination";

const Posts = () => {
  const [page, setPage] = useState({
    current: 0,
    total: 0,
  });
  console.log(page);
  const { data, error, isLoading } = useGetAllPostsQuery(page.current);
  console.log(data);

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
          : data?.data?.map((item) => <CardsPosts key={item?.id} {...item} />)}

        {error && (
          <div className="error-message">
            Error fetching posts: {error.message}
          </div>
        )}
      </div>
    </div>
  );
};


export default Posts