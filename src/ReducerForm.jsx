import React from "react";

const ReduceForm =({user, dispatch, error, handleSubmit})=>{

    const changeHandler = (e) => {
        const name  = e.target.name;

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        //like useState we called dispatch= setUser dunction it changes the changing value
        // Dispatch the action to update the field
        dispatch({
          type: 'updateField',
          field: name,
          value: value,
        });

        // Clear error for the field when the user starts typing
    dispatch({
        type: 'setError',
        field: name,
        error: '', // Reset error for the specific field
      });

      };

    return (
        <>
          <div className="Form">
            <form onSubmit={handleSubmit}>
              <div>
                <label>First name</label>
                <input
                  type="text"
                  name="firstname"
                  value={user.firstname}
                  onChange={changeHandler}
                />
                <p style={{ color: 'red' }}>{error.firstname}</p>
              </div>
              <div>
                <label>Last name</label>
                <input
                  type="text"
                  name="lastname"
                  value={user.lastname}
                  onChange={changeHandler}
                />
               <p style={{ color: 'red' }}>{error.lastname}</p>
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={changeHandler}
                />
               <p style={{ color: 'red' }}>{error.email}</p>
              </div>
              <div>
                <label>Select Country</label>
                <select
                  name="country"
                  value={user.country}
                  onChange={changeHandler}
                >
                <option value="" disable>Choose country</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Korea">Korea</option>
                  <option value="America">America</option>
                </select>
               <p style={{ color: 'red' }}>{error.country}</p>
              </div>
              <div>
                <label>Gender</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender === 'male'}
                  onChange={changeHandler}
                  
                />

                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender === 'female'}
                  onChange={changeHandler}
                />
                Female
                <p style={{ color: 'red' }}>{error.gender}</p>
              </div>
              <div>
                <label>Marital status</label>
                <input
                  type="checkbox"
                  name="isMarried"
                  checked={user.isMarried}
                  onChange={changeHandler}
                />
                  <p style={{ color: 'red' }}>{error.isMarried}</p>
              </div>
    
              <input type="submit" value="Submit" />
            </form>
          </div>
        </>
      );

}

export default ReduceForm;