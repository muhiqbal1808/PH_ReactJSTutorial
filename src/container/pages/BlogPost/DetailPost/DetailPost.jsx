import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

import "./DetailPost.css";

const DetailPost = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  let { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4000/posts/${id}`).then((res) => {
      setData({
        title: res.data.title,
        body: res.data.body,
      });
    });
  }, [id]);
  return (
    <div className="detail-post-container">
      <p className="detail-title">{data.title}</p>
      <p className="detail-body">{data.body}</p>
    </div>
  );
};

export default DetailPost;
