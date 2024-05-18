import Button from 'react-bootstrap/esm/Button';
import 'react-notifications/lib/notifications.css';
import { useState } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications'
import { Link } from 'react-router-dom';
const Contact = () => {
    const [data,setData]= useState({
        name:'',
        email:'',
        phone:'',
        message:'',
    })
    const changeEvent=(e)=>{
const {name,value}= e.target;
let oldData={...data,[name]:value}
setData(oldData);
console.log(data)
}
const submitted=(e)=>{
NotificationManager.info("We Will Contact You Soon")
 alert(`Name- ${data.name} Phone-No- ${data.phone} Email- ${data.email} Message - ${data.message}`)
 e.preventDefault();
}
    return (
        <>
            <div className="height-100" style={{backgroundColor:"#A0D4FF"}} >
                <h1 className="text-center p-1">Contact Us</h1>
                <div className="d-flex  fs-md-1 p-3 align-content-center justify-content-center">
    <NotificationContainer/>
                    <form onSubmit={submitted} action="helo">
                    <div className="row"><label className="py-1" form="name" >Name</label><br/>
                    <input required className="row  col " onChange={changeEvent} type="text" value={data.value} name="name" placeholder="Enter Your Name" /></div>
                    <div className="row"><label className="py-1" form="phone"> Phone</label><br/>
                    <input required className="row col-md-12 col " onChange={changeEvent} type="number" name="phone" value={data.value} placeholder="Enter Your Phone Number" /></div>
                    <div className="row"><label className="py-1" form="email">Email</label><br/>
                    <input required className="row col-md-12 col " onChange={changeEvent} type="email" name="email"  value={data.value} placeholder="Enter Your Email" /></div>
                    <div className="row"><label className="py-1" form="email">Message</label><br/>
                    <input  style={{height:'100px'}} className=" fw-lighter row col-md-12 col" onChange={changeEvent} type="message" name="email"  value={data.value} placeholder="Any Message Here" /></div>
                <input className="btn btn-outline-dark fw-bold border-3 fs-md-3 fs-5 mt-3" type="submit" value='Submit Here'/>
                </form>
               
            </div><div className='text-center'> <Button><Link className='text-decoration-none text-light' to='/ '>Home</Link></Button></div></div>
        </>
    )
} 
export default Contact;                                                                                                                                                                                   