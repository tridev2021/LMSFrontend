import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AddAdmin(props) {
  const submit = e => {
    let username = e.target[0].value;
    let email= e.target[1].value;
    let password= e.target[2].value;
    let data = {
      username,
      
      email,
      password
    };
    postAdmin(data);
  };

  const postAdmin = data => {
    axios
      .post("http://localhost:8084/api/Register", data)
      .then(d => {
        console.log(d);
        props.history.push("/");
      })
      .catch(err => alert(err));
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          submit(e);

        }}
      >
        <div className="form-group">
          <label>UserName</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="text" className="form-control form-control-sm" />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(AddAdmin);
