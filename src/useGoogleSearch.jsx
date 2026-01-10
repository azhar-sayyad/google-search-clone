import { useState } from 'react'
import API_KEY from './key'
 const API_KEY = ' AlzaSyCVSypbSrf6Pjjp7OWSQJWiNwOjwBYp4gw '
// const CONTEXT_KEY = '  '

const useGoogleSearch = (term) => {
  const [date, setdata] = useState(null)

  useEffect(() => {
    fetch()
      .then((responce) => Response.json())
      .then((result) => {
        setdata(result)
      })
  })
}
feachData()
{
  ;[term]
  // return data
}
export default useGoogleSearch
