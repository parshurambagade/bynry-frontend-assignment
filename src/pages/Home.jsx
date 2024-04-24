import React, { useEffect } from "react";
import CardsContainer from "../components/CardsContainer";
import { useDispatch } from "react-redux";
import { addMultipleUsers } from "../redux/usersSlice";
import { getAllUsers } from "../api/firestore-apis";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    getAllUsers().then((users) => {
      dispatch(addMultipleUsers(users));
    });
    
},[])

  return (
    <div className=" mx-4 md:max-8 lg:mx-20">
      <CardsContainer />
    </div>
  );
};

export default Home;
