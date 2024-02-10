import React from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i.ytimg.com/vi/KZHRXMN8LYk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOn4BevE7SW3a_-ei5Q7Yqrbue5A"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComponent.defaultProps = {
  time: "00.00",
  title: "Indonesia Football E-League Video",
  desc: "0x ditonton 0 Jam yang lalu",
};

export default YoutubeComponent;
