import React from "react";
import AddGymList from "../AddGymList/AddGymList";

const AddGymPage = () => {
  return (
    <div>
      <header>
        <h1>내가 등록한 헬스장</h1>
      </header>
      <main>
        <AddGymList></AddGymList>
      </main>
      <footer></footer>
    </div>
  );
};

export default AddGymPage;
