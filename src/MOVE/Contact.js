import React from 'react';

const Contact = () => {
  return (
    <div>
        
        <form>
  <fieldset disabled="">
    <legend>Login Page</legend>
    <div className="mb-3">
      <label htmlFor="TextInput" className="form-label">
      Email
      </label>
      <input  type="text"  id="TextInput" className="form-control"  placeholder="enter your email"  />
    </div>
    <div className="mb-3">
      <label htmlFor="email id" className="form-label">
        Password
      </label>
      <input type="password"
              class="form-control" id="exampleInputPassword1" placeholder='enter your password' />
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="disabledFieldsetCheck"
          disabled=""
        />
        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
          Click This
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </fieldset>
</form>

    </div>
  )
}

export default Contact;