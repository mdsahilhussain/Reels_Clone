import React, { useContext, useEffect, useState } from "react";
import Upload from "../Upload/Upload";
import { AuthContext } from "../../Context/AuthContext";
import { database } from "../../fireBase";
import Posts from "../Posts/Posts";

export default function Feed() {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const unsub = database.users.doc(user.uid).onSnapshot((snapshot) => {
      setUserData(snapshot.data());
    });
    return () => {
      unsub();
    };
  }, [user]);
  return (
    <div>
      <div
        style={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Upload user={userData} />
        <Posts userData={userData}/>
      </div>
    </div>
  );
}
