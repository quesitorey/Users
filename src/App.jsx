import './App.css'
import useFetch from './hooks/useFetch'
import { useState, useEffect } from 'react'

import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

export default function App() {

  // {}
  const [ closeForm, setCloseForm ] = useState(true)
  
  const baseUrl = 'https://users-crud.academlo.tech'

  const [ infoUsers, getUsers, postUsers, deleteUsers, updateUsers ] = useFetch(baseUrl, setCloseForm)

  const [ updateInfo, setUpdateInfo ] = useState()
  
  useEffect(() => {
    getUsers('/users/')
  }, [])

  console.log(infoUsers)

  const handleOpenForm = () => {
    setCloseForm(false)
  }
  
  return (
    <div>
      <div className='header'>
        <h1 className='title'>Users</h1>
        <button onClick={handleOpenForm} className='btn'>Create user</button>
      </div>
      <FormUser
        createUser={postUsers}
        updateInfo={updateInfo}
        updateUser={updateUsers}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
        />
      
      <div className='usercard'>
        {
          infoUsers?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUsers}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
              />
          ))
        }
      </div>
    </div>
  )
}
