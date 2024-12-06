import React, { useEffect,useState } from 'react'
import Eng_img from '../assets/img/engineering.png'
import { api_instance } from '../Header/HeaderApi`s';
import { useDispatch } from 'react-redux';
import {search_by_name} from '../../../Redux/slice/search_values_college'
import { useNavigate } from 'react-router-dom';
const College = () => {
const dispatch=useDispatch();
const navigate=useNavigate();
  const[collegeList,setCollegeList]=useState([])

const strm=collegeList && collegeList.map((item)=>{
  return item.course.map((item)=>{
    return item.stream
  })
})

function get_college2() {
  // setIsLoading(true)
  api_instance
    .get(`/api/get-colleges?search=&name=`)
    .then((response) => {
      if (response) {
        // setIsLoading(false)
        setCollegeList(response.data.data);
      }
    })
    .catch((error) => {
      console.log(error);
      // setIsLoading(false)
    });
}

useEffect(()=>{
  get_college2()
},[])
//=============================================================count no of streams===================
const strmArray=collegeList && collegeList.map((item)=>{
  return {
    _id:item.streamId._id,
    stream:item.streamId.name
  }
})
// console.log(strmArray)
let frequency = {};
const ocuurence=(arr)=>{
for (let i = 0; i < arr.length; i++) {
  let key = JSON.stringify(arr[i]);
  frequency[key] = (frequency[key] || 0) + 1;
}
return frequency
}
ocuurence(strmArray)
const occurrenceList = Object.keys(frequency).map(key => {
  let keys=JSON.parse(key);
  keys.occ=frequency[key]
  return keys 
})
// console.log()

//==========================================count no of stream ends================================

  return (
    <>
      <section className="explore_category_section">
        <div className="row">
        {
          occurrenceList && occurrenceList.map((item)=>{
             return <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6" style={{cursor:"pointer"}} onClick={()=>{
              dispatch(search_by_name(item.stream));
              navigate("/Top-Universities")
            }
            }>
            <div className="explore_category_small_box">
              <img src={Eng_img} alt="" />
              <h3>{item?.stream?.toUpperCase()}</h3>
              <h4>
                <span>{item.occ} </span> College
              </h4>
            </div>
          </div>
            })
        }
        </div>
      </section>
    </>
  )
}

export default College
