import React, { useEffect, useState } from 'react';
import './App.css';
import Aside from './components/UI/SUBMAIN/Aside';
import UserList from './components/UI/MAIN/UserList';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';


function App() {
  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSortCity() {
    const sortedData = [...userData].sort((a, b) => {
      return a.address.city > b.address.city ? 1 : -1
    })
    setUserData(sortedData);
  }

  function handleSortCompany() {
    const sortedData = [...userData].sort((a, b) => {
      return a.company.name > b.company.name ? 1 : -1
    })
    setUserData(sortedData);
  }

  return (
    <div className="content-wrapper">
      <Aside 
        handleSortCity={handleSortCity}
        handleSortCompany={handleSortCompany}
      />
      {loading ? (
        <div className="spinner-box">
          <TailSpin
            color="#4B51EF"
            width="100px"
            height="100px"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <UserList
        userData={userData}
        />
      )}
    </div>
  );
}

export default App;
