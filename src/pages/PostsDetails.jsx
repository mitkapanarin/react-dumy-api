import React from 'react'
import { useGetOnePostQuery } from '../store/api/postApi'
import { useParams } from 'react-router-dom'


const PostsDetails = () => {
  const params = useParams();

  const {data, isLoading} = useGetOnePostQuery(params.id);
  console.log(data);
  return (
    <div>PostsDetails</div>
  )
}

export default PostsDetails