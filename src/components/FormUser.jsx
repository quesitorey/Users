import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import './styles/FormUser.css'

const FormUser = ({createUser, updateInfo, updateUser, setUpdateInfo, closeForm, setCloseForm}) => {

  const { register, reset, handleSubmit } = useForm()


  const submit = data => {

    if(updateInfo){
      updateUser('/users/', updateInfo.id, data)
      setUpdateInfo()
    }else{
      createUser('/users/', data)  
    }
    

    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''  
    })
  } 

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])

  const handleCloseForm = () => {
    setCloseForm(true)
  }
  
  return(
    <div onClick={handleCloseForm} className={`formuser-father formuser-background ${closeForm && 'close-form'}`}>
      <form onClick={e => e.stopPropagation()} className='formuser' onSubmit={handleSubmit(submit)}>
        <h2 className='formuser-title'>New User</h2>
        <div onClick={handleCloseForm} className='formuser-x'>x</div>
        <div className='formuser-container'>
          <label className='formuser-label' htmlFor='first_name'>First Name: </label>
          <input {...register('first_name')} className='formuser-input' type='text' id='first_name'/>
        </div>
        <div className='formuser-container'>
          <label className='formuser-label' htmlFor='last_name'>Last Name: </label>
          <input {...register('last_name')} className='formuser-input' type='text' id='last_name'/>
        </div>
        <div className='formuser-container'>
          <label className='formuser-label' htmlFor='email'>Email: </label>
          <input {...register('email')} className='formuser-input' type='email' id='email'/>
        </div>
        <div className='formuser-container'>
          <label className='formuser-label' htmlFor='password'>Password: </label>
          <input {...register('password')} className='formuser-input' type='password' id='password'/>
        </div>
        <div className='formuser-container'>
          <label className='formuser-label' htmlFor='birthday'>Birthday: </label>
          <input {...register('birthday')} className='formuser-input' type='date' id='birthday'/>
        </div>
        <button className='formuser-btn'>{ updateInfo ? 'Update' : 'Create' }</button>
      </form>
    </div>
  )
}

export default FormUser