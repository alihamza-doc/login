import React, { useState } from "react";

const login = ()=>{
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful!");
        console.log("Token:", data.token); // You can save it in localStorage if needed
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
  };
 return(   
<div className="row container-fluid pt-4 ">
            <div className="col-md-2"></div>
            <div className="col-md-8 bg-light text-center rounded pt-5 pb-5">
             <h2 className="text-primary">Log In</h2>
             
             <div className="d-flex justify-content-center py-3">
                <label className="mx-3 fs-5" htmlFor="">Email ID :</label>
                <input className="mx-3 border-1  " type="email" name="" id="" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
             </div>
             <div className="d-flex justify-content-center py-3">
                <label className="mx-3 fs-5" htmlFor="">password :</label>
                <input className="mx-3 border-1 " type="password" name="" id="" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
             </div>
             <button className="btn btn-primary my-3" onClick={handleLogin} >Submit</button>
             <div>
             <a href="http://localhost:5173/signup">sign up</a>
             </div>
            </div>
            <div className="col-md-2"></div>
        </div>)
}

export default login;
