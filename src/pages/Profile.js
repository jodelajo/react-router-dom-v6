import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  let { id } = useParams();
  return (
    <div>
      Profile {id}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        change to about page
      </button>
    </div>
  );
}

export default Profile;
