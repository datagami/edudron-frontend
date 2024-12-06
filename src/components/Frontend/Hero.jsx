import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BiSearch } from 'react-icons/bi'
import { useDispatch,useSelector } from 'react-redux'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { search_by_course, search_by_name } from '../../Redux/slice/search_values_college'
import { useNavigate } from 'react-router-dom';
import {api_instance} from '../../components/Frontend/Header/HeaderApi`s'

const Hero = () => {
  
  const [college, setColleges] = useState([])
  const [display, setDisplay] = useState("none");
  const[resultFound,setResultFound]=useState([])

const dispatch=useDispatch();
const navigate=useNavigate();


const searchby=useSelector(state=>state.searchCollegeSlice.value);


const collegeList=useSelector(state=>state.getCollegeList.value)
// console.log(collegeList)
function handleSubmit(e) {
  e.preventDefault();
}

const search_college=(v)=>{
  dispatch(search_by_name(v));
  navigate("/Top-Universities")
}


function get_college2() {
  // setIsLoading(true)
  api_instance
    .get(`/api/get-colleges?name=${searchby.search_by_name}&course=&state=&stream=&city=`)
    .then((response) => {
      if (response) {
        // setIsLoading(false)
        setColleges(response.data);
        setResultFound(response.data.data)
      }
    })
    .catch((error) => {
      console.log(error);
      // setIsLoading(false)
    });
}
// console.log(resultFound.length)

useEffect(() => {
  if(searchby?.search_by_name?.length>1){
    get_college2();
  }
}, [searchby.search_by_name]);
useEffect(()=>{
  dispatch(search_by_name(""));
  dispatch(search_by_course(""));
},[])
  return (
    <>
      <section className="hero_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="hero_content">
                <h1>You Search Here Your Dream <TypeAnimation
                  sequence={[
                    'College.', 
                    2000,
                    'Courses.', 
                    2000, 
                    'Exams.',
                    2000, 
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}/> </h1>
                <Form className="hero_search_form" onSubmit={handleSubmit}>
                  <Form.Group
                    className="input_box"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      className="input_box_inner"
                      placeholder="Search for college, exams, courses and more..."
                      // value={searchby.search_by_name}
                      onFocus={()=>setDisplay("block")}
                      onBlur={()=>{
                        setTimeout(() => {
                        setDisplay('none')
                        
                        }, 500);
                      }}
                      autoComplete="off"
                      onChange={(e)=>{
                        dispatch(search_by_name(e.target.value))
                      }}
                    />
                    <Button type="submit" className="hero_search_form_btn">
                      {' '}
                      <BiSearch className="hero_search_icon" />
                    </Button>
                  </Form.Group>
                  { 
                    resultFound.length>0 ?
                    searchby?.search_by_name?.length > 1 ? <div className='search_results'>
                    <ul style={{display:display,cursor:"pointer"}}>
                    {
                      college && college?.data?.map((value)=>{
                        if(value.college_name.toLowerCase().match(searchby.search_by_name.toLowerCase())){
                          return <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>search_college(value.college_name)}><li>{value.college_name}</li><li>College</li></div>
                        }else{
                          return value.course.map((course)=>{
                            return <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>search_college(value.college_name)}><li>{course.course}</li><li>Course</li></div>
                          })
                        }
                      })
                    }
                    </ul>
                  </div> :<div className='search_results' style={{display:display}}>
                  <ul><li>Type atleast 2 characters</li></ul>
                  </div> : resultFound.length == 0 && searchby.search_by_name.length >1 ? <div className='search_results' style={{display:display}}><ul><li>No Result Found</li></ul></div> :""
                  }
                  
                  {/* <Button type="submit" className='hero_search_form_btn'>Submit</Button> */}
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
