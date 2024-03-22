import { useState } from "react"


const Profile=()=>{
    const[name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [mblno,setMblno]=useState(0)
    return (
         <div className="container">
            <div className="row">
                <div className="col-5 mx-auto">
                    <h5>User Info</h5>
                    <form>
                      <label>Name</label> &nbsp;
                      <input  className="form-control" type="text" name="name" value={name}/><br/>    
                      <label>Email</label> &nbsp;
                      <input className="form-control" type="email" name="email" value={email}/><br/>
                      <label>Address</label> &nbsp;
                      <input className="form-control" type="textarea" name="address" value={address}/><br/>
                      <label>Mbl. No.</label> &nbsp;
                      <input className="form-control" type="number" name="mblnumber" value={mblno}/>
                    </form>
                </div>
            </div>
         </div>
    )
}

export default Profile