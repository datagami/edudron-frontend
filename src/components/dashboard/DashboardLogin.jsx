import React ,{useState} from 'react';
import { Form,Button ,Modal} from 'react-bootstrap';
import {email,password,login_error,login_result} from '../../Redux/slice/Forms/login';
import { useDispatch,useSelector } from 'react-redux';
import { api_instance, } from '../../components/Frontend/Header/HeaderApi`s'
import { Blocks } from 'react-loader-spinner';
import '../Frontend/Form/formstyle.css'


const DashboardLogin = () => {
    const dispatch=useDispatch();
  const login_input=useSelector(state=>state?.loginSlice?.value);
  const[isLoading,setIsLoading]=useState(false);
  const [handleForgotPassword, setShowForgot] = useState(false);
  const[forgotEmail,setForgotEmail]=useState();



  const handleCloseForgot = () => setShowForgot(false);
  const handleShowForgot = () => setShowForgot(true);

  const login_data={
    email:login_input?._email,
    password:login_input?._password
  }  

  const loginapi=()=>{
    setIsLoading(true)
    api_instance.post('/api/login', login_data)
    .then(response => {
      console.log(login_input?.data);
      dispatch(login_result(response.data));
  
      if(response){
        //  localStorage.setItem('login_result',JSON.stringify(login_input?.data))
        LoginhandleClose();
          dispatch(email(''));
          dispatch(password(''));
          setIsLoading(false)
      }
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false)
    })}
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    function handleSubmit(event) {
        event.preventDefault();
      
        if(!login_input?._email || !login_input?._password){
          dispatch(login_error('Required'));
        }else if(login_input?._password.length < 6){
          dispatch(login_error('Password Short'));
        }else if(!login_input?._email.match(validRegex)){
          dispatch(login_error('Enter valid email'));
        }else if(login_input?._password.length > 12){
          dispatch(login_error('Password Too Large')); }
        // }else if(login_input?._passwod?.search(/[a-z]/) < 0){
        //   dispatch(login_error(" Password must contain at least one lowercase letter"));
        // }else if(login_input?._password?.search(/[A-Z]/) < 0){
        //   dispatch(login_error(" Password must contain at least one uppercase letter"));
        // }else if(login_input?._password?.search(/[0-9]/) < 0) { 
        //   dispatch((login_error("Password must contain at least one number")));
        //   }
         
        else{
          dispatch(login_error(''));
          loginapi();
          
  
        }
    }

    const handleforgotChange=(e)=>{
        setForgotEmail(e.target.value)
    }

    let forgotPasswordEmail={
        email:forgotEmail
    }

    const forgotpassApi=()=>{
        setIsLoading(true)
        api_instance.post('/api/forgotPass', forgotPasswordEmail)
        .then(response => {
          console.log(response);
          
      
          if(response){
            handleCloseForgot();
            setIsLoading(false)
           
          }
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false)
        })}

    const forgotPassword=(e)=>{
            e.preventDefault();
            forgotpassApi()
    }

    

    
  return (
    <div className='container my-5'>
        <div className='row'>
        <div className='col-sm-8 col-lg-6 mx-auto'>
            <div className='text-center fw-bold my-5'>LOGIN</div>
       <Form className="forms my-5" onSubmit={handleSubmit} >
       <p className='text-danger text-center'>{login_input._loginError}</p>

            {
              isLoading? <div style={{textAlign:'center'}}>
                <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
              </div>:''
            }
            <Form.Group className="form_group" >
              {/* <Form.Label className="form_label">Email address</Form.Label> */}
              <Form.Control
                className="input_box"
                type="email"
                placeholder="Enter email"
                value={login_input.email}
                onChange={(e=>dispatch(email(e.target.value)))}
              />
            </Form.Group>

            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Password</Form.Label> */}
              <Form.Control
                className="input_box"
                type="password"
                placeholder="Enter Password"
                value={login_input.password}
                onChange={(e=>dispatch(password(e.target.value)))}

              />
            </Form.Group>

           
              <Button className="form_submit_btn" type="submit">
                Login
              </Button>
              <div className='text-end mt-2' style={{cursor:'pointer'}}>
              <p className='' onClick={handleShowForgot}>Forgot Password ?</p>
              </div>

              <div>
              </div>
           
          </Form>

          {/* {=========================forgot password modal start========================================} */}

          <Modal show={handleForgotPassword} onHide={handleCloseForgot}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={forgotPassword}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={forgotEmail} onChange={handleforgotChange}/>
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForgot}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={forgotPassword} >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {=====================================forgot password modal ends================================} */}


   

    </div>
        </div>
    </div>
  
  )
}

export default DashboardLogin
