import React from "react";
import AddGymList from "../AddGymList/AddGymList";
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";

const AddGymPage = () => {
  return (
    <div>
      <Header />
      <h1>내가 등록한 헬스장</h1>
      <main>
        <AddGymList></AddGymList>
      </main>
      <Footer />
    </div>
  );
};

export default AddGymPage;
