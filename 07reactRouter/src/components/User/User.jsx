import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userId} = useParams();
  return <div className="p-4 bg-cyan-400 ">User :{userId} </div>;
}

export default User;
