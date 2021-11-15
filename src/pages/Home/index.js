import React from "react";
import HomeAdmin from "./HomeAdmin";
import HomeHosted from "./HomeHosted";
import HomeUser from "./HomeUser";

const Home = () => {
  const roleType = localStorage.getItem("role_type");
  return (
    <>
      {
        roleType === "Admin" ?
          <HomeAdmin /> :
          roleType === "Hosted" ?
            <HomeHosted /> : <HomeUser />
      }
    </>
  );
};

export default Home;
