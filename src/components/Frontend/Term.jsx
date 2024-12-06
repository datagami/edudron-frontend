import React, { useState ,useEffect,useRef, useMemo} from 'react';
import { api_instance } from './Header/HeaderApi`s';

const Term = () => {
    const ref=useRef('');
const[terms,setTerm]=useState('');

    function getTerm() {
        // setIsLoading(true)

        
        api_instance
          .get(`/api/get-term-condition`)
          .then((response) => {
            if (response) {
              console.log(response.data)
              setTerm(response.data.data)
            }
          })
          .catch((error) => {
            console.log(error);
            // setIsLoading(false)
          });
      }
      useEffect(()=>{
        getTerm()
      },[])
      useMemo(()=>{
        console.log(terms[0])
        if(ref.current){
            ref.current.innerHTML=terms && terms[0].term
        }
    },[terms])
  return (
    <div ref={ref}>
      
    </div>
  )
}

export default Term
