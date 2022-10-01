import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "../App.css";

const Post = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState("");

  //get each post
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
      setPostObject(res.data);
    });

    //get each post commnets
    axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
      setComments(res.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post("http://localhost:3001/comments", {
        commentBody: newComment,
        PostId: id,
      })
      .then((res) => {
        const commentToAdd = { commentBody: newComment };
        setComments([...comments, commentToAdd]);
        setNewComment("");
      });
  };

  return (
    <div className="each_post_id">
      <div className="each_post_id_inner">
        {postObject.title}
        {postObject.postText}
        {postObject.username}
      </div>

      <div>
        <input
          value={newComment}
          type="text"
          placeholder="comment....."
          autoComplete="off"
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <button onClick={addComment}>Add comment</button>
      </div>

      <div>
        {comments.map((value, index) => {
          return (
            <div key={index}>
              <h5>{value.commentBody}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
