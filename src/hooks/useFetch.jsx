import axios from 'axios'
import { useState } from 'react'

const useFetch = (baseUrl, callback, setIsLoading) => {
  
  const [ infoApi, setInfoApi ] = useState()

  //GET

  const getApi = (path) => {
    const url = `${ baseUrl }${ path }`
    
    axios.get(url)
      .then(resp => setInfoApi(resp.data))
      .catch(err => console.error(err))
      .finally(resp => setIsLoading(false))
  } 

  //POST

  const postApi = (path, data) => {
    const url = `${ baseUrl }${ path }`
    
    axios.post(url, data)
      .then(resp =>  {
        setInfoApi([...infoApi, resp.data])
        callback(true)
      })
      .catch(err => console.error(err))
  }

  //DELETE

  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}${id}/`

    axios.delete(url)
      .then(resp => {
        const infoApiFilter = infoApi.filter( user => user.id !== id )
        setInfoApi(infoApiFilter)
      })
      .catch(err => console.error(err))
  }

  //UPDATE

  const updateApi = (path, id, data) => {
    const url = `${ baseUrl }${path}${id}/`

    axios.patch(url, data)
      .then(resp => {
        const infoApiMapped = infoApi?.map( user => user.id === id ? resp.data : user )
        setInfoApi(infoApiMapped)
        callback(true)
      })
      .catch(err => console.error(err))
  }
  
  return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch