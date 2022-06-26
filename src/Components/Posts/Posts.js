import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { CircularProgress } from "@mui/material";
import "./posts.css";
import { database } from "../../fireBase";
import Video from "../Video/Video";

function Posts({ userData }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let postArray = [];
    const unsub = database.posts
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        postArray = [];
        querySnapshot.forEach((doc) => {
          let data = { ...doc.data(), postId: doc.id };
          postArray.push(data);
        });
        setPosts(postArray);
      });
    return unsub;
  }, []);

  return (
    <div>
      {posts==null || userData == null ? (
        <CircularProgress />
      ) : (
        <div className="video-container">
          {posts.map((post, index) => {
            return (
              <React.Fragment key={index}>
                {console.log(post)}
                <div className="videos">
                  <Video src={post.pUrl} id={post.pId} />
                  <div className="fa" style={{ display: "flex" }}>
                    <Avatar src={post.uProfile} />
                    <h4>{post.uName}</h4>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Posts;
