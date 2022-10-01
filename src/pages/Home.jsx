import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const [listOfData, setListOfData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setListOfData(res.data);
    });
  }, []);
  return (
    <div className="all_posts">
      {listOfData.map((value, index) => {
        return (
          <div
            className="each_post"
            key={index}
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <h4>{value.title}</h4>
            <p>{value.postText}</p>
            <b>
              <i>{value.username}</i>
            </b>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
