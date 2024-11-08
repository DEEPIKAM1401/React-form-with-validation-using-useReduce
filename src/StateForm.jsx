import React from 'react';

const StateForm = ({user, setUser}) => {

      function changeHandler(e)
      {
        const name = e.target.name;
        const value = e.target.type == "checkbox" ? e.target.checked: e.target.value;
        console.log(name)
        //inside change checking fun we called setUser function
        setUser({...user, [name]:value})
      }

  return (
    <>
          

<div className='Form'>
  <form action="">
    <div>
      <label>First name</label>
      <input 
        type="text" 
        id='firstname' 
        value={user.firstname}
        name = "firstname"  
        onChange={changeHandler}
      />
    </div>
    <div>
      <label>Last name</label>
      <input 
        type="text" 
        id='lastname' 
        value={user.lastname}
        name = "lastname"
        onChange={changeHandler}
      />
    </div>
    <div>
      <label>Email</label>
      <input 
        type="email" 
        id='email' 
        value={user.email}
        name="email"
        onChange={changeHandler}
      />
    </div>
    <div>
      <label>Select Country</label>
      <select name="country" id='country' value={user.country} onChange={changeHandler}>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Korea">Korea</option>
          <option value="America">America</option>
      </select>
    </div>
    <div>
      <label>Gender</label>
        <input 
          type="radio" 
          name="gender" 
          id="male" 
          value="male"
          checked={user.gender==="male"}
          onChange={changeHandler}
        />Male
        <input 
          type="radio" 
          name="gender" 
          id="female" 
          value="female"
          checked={user.gender==="female"}
          onChange={changeHandler}
        />Female
    </div>
    <div>
      <label>Marital status</label>
      <input 
        type="checkbox"
        name="isMarried"  
        checked = {user.isMarried}
        onChange={changeHandler}
      />
      
    </div>
    <input type="submit" value="Submit" />
  </form>
</div>

{/* <button onClick={()=>setCount(count-1)} >-</button>
<p>{count}</p>
<button onClick={()=>setCount(count+1)} >+</button> */}
    </>
  );
};

export default StateForm;
