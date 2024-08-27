/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Searchcontext from "./Searchcontext";

const Searchstate = (props) => {
  const temp = JSON.parse(localStorage.getItem("History"));
  const [search, setsearch] = useState(temp ? temp : []);
  const addsearch = (name) => {
    if (search.find((i) => i == name)) {
      deleteitem(name);
    }
    setsearch((previous) => {
      localStorage.setItem("History", JSON.stringify([name, ...previous]));
      return [name, ...previous];
    });
  };
  const clearsearch = () => {
    localStorage.setItem("History", JSON.stringify([]));
    setsearch([]);
  };
  const deleteitem = (name) => {
    setsearch(search.filter((item) => item != name));
    localStorage.setItem(
      "History",
      JSON.stringify(search.filter((item) => item != name))
    );
  };
  return (
    <Searchcontext.Provider
      value={{ search, addsearch, deleteitem, clearsearch }}
    >
      {props.children}
    </Searchcontext.Provider>
  );
};

export default Searchstate;
