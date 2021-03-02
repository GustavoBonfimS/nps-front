import styles from '../styles/pages/Home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUsers] = useState();
  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, [])
  return (
    <div className="row">
      <div className="col">
        <h1>teste</h1>
      </div>
      <div className="col">
        <h1>aadklfj</h1>
      </div>
    </div>
  )
}
