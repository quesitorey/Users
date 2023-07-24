import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUpdateInfo, handleOpenForm}) => {

  const handleDelete = () => {
    deleteUser('/users/', user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()
  }
  
  return(
    <div className='user-group'>
      <article className='user-container'>
        <h2 className='user-title'>{user.first_name} {user.last_name}</h2>
        
        <hr className='user-hr'/>
        
        <ul className='user-ul'>
          <li className='user-li'>
            <span className='span user-title-info'>Email: </span>
            <span className='span user-info'>{user.email}</span>
          </li>
          
          <li className='user-li'>
            <span className='span user-title-info'>Birthday: </span>
            <span className='span user-info'>{user.birthday}</span>
          </li>
        </ul>
  
        <footer className='user-footer'>
          <button className='user-btn' onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button className='user-btn' onClick={handleUpdate}><i className='bx bx-pencil' ></i></button>
        </footer>
        
      </article>
    </div>
  )
}

export default UserCard