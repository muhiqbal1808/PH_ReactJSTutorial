import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placehold.co/200x150" alt="ImagePlaceholder" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button
          className="btn-update"
          onClick={() => props.onUpdate(props.data)}
        >
          Update
        </button>
        <button
          className="btn-delete"
          onClick={() => props.onDelete(props.data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
