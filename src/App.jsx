import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import StateForm from './StateForm'
import ReduceForm from './reducerForm'

function App() {
  
const initialValue = {

  user:
  {
    firstname:"First name",
  lastname:"Last name",
  email:"abc@xyz.com",
  country:"India",
  gender:"male",
  isMarried:true
  },
  error:
  {
    firstname:'',
    lastname:'',
    email:'',
    country:'',
    gender:''
  }
}
 

  // const [user, setUser] = useState({
  //   firstname:"First name",
  //   lastname:"Last name",
  //   email:"abc@xyz.com",
  //   country:"India",
  //   gender:"male",
  //   isMarried:true
  // })
// (inside state, it got a value of user state=user(like use state)) and also action is performed by dispatch function
  const reducerFn = (state, action) =>
  {
    switch (action.type){
      case "updateField":
          return {
            ...state,
            user:{...state.user,[action.field]:action.value}
          }

      case "setError":
          return {
            ...state, 
            error:{...state.error,[action.field]:action.error}
          }
      case "resetError":
        return{
          ...state,
          error:initialValue.error
        }
      default:
        return state
    }
  }

// const[user, setUser=dispatch]     reduceFn is follow up state and action statte have user value(like use state) and action is passed by dispatch(setUser)
  // const [user, dispatch] = useReducer(reducerFn, initialValue) - At that time we have only (user)as state value
  
  const [state, dispatch] = useReducer(reducerFn, initialValue) //Now we have a state inside user and error two object
    
  const validateForm = () =>{
    let isValid = true
    dispatch({type:'reserError'})

    if(!state.user.firstname || state.user.firstname === 'First name')
    {
      dispatch({
        type:'setError',
        field:'firstname',
        error:'First name is required'
      })
      isValid = false
    }
    if(!state.user.lastname || state.user.lastname === 'Last name')
      {
        dispatch({
          type:'setError',
          field:'lastname',
          error:'Last name is required'
        })
        isValid = false
      }

        // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!state.user.email || !emailRegex.test(state.user.email)) {
    dispatch({
      type: 'setError',
      field: 'email',
      error: 'Please enter a valid email address',
    });
    isValid = false;
  }


  if (!state.user.country) {
    dispatch({
      type: 'setError',
      field: 'country',
      error: 'Country is required',
    });
    isValid = false;
  }
  

  // Validate gender selection
  if (!state.user.gender) {
    dispatch({
      type: 'setError',
      field: 'gender',
      error: 'Gender is required',
    });
    isValid = false;
  }

  if (!state.user.isMarried) {
    dispatch({
      type: 'setError',
      field: 'isMarried',
      error: 'Marriage is required',
    });
    isValid = false;
  }
  return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
     
    }
  };

  return (
    <>
    
      <h2>Registration Form</h2>

      
      <div className="table">
        <table>
          <tr>
            <td>First name</td>
            <td>{state.user.firstname}</td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>{state.user.lastname}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{state.user.email}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{state.user.country}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{state.user.gender}</td>
          </tr>
          <tr>
            <td>Marital status</td>
            <td>{state.user.isMarried? "Married":"Un married"}</td>
          </tr>
        </table>
      </div>

      {/* <StateForm 
        user = { user }
        setUser = { setUser }
      /> */}

      <ReduceForm 
          user={state.user}
          dispatch = {dispatch}
          error={state.error}
          handleSubmit={handleSubmit}
      /> 

      {/* <button onClick={()=>setCount(count-1)} >-</button>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)} >+</button> */}

    

    </>
  )
}

export default App
