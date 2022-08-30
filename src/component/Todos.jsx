import React, { useEffect } from "react";
import axois, { Axios } from 'axios'
const Todos = () => {
  useEffect(() => {
Axios('https://jsonplaceholder.typicode.com/todo0s')
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err) })
  }, []);

  return <div>Todos</div>;
};

export default Todos;
