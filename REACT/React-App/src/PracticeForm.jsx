import { useState } from "react"

export default function PracticeForm(){
    let [formData,setFormData]=useState([{
        fullName:"",
        contact:"",
        address:"",
        username:"",
        password:"",
    }]);
    let handelInputChange=(event)=>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        // console.log(fieldName);
        // console.log(newValue);
        setFormData((currData)=>{
            // currData[fieldName] = newValue;
            // return {...currData , [fieldName]:newValue};
            return{...currData,[event.target.name]:event.target.value};
        });
        // setFormData((prevFormData) => {
        //     const updatedFormData = [...prevFormData];
        //     updatedFormData[0] = {
        //       ...updatedFormData[0],
        //       [fieldName]: newValue,
        //     };
        //     return updatedFormData;
        //   });
    };
    let handelSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            contact:"",
            address:"",
            username:"",
            password:"",
        })
       
    }

    return (
        <>
        <h1>Practice Component for Form </h1>
        <form action="" onSubmit={handelSubmit}>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text"placeholder="Enter Your Full Name" 
            name="fullName" value={formData.fullName} onChange={handelInputChange}/>
            <br /><br />
            <label htmlFor="contact">Contact No:</label>
            <input type="text" placeholder="Enter Your Contact Number"
            name="contact" value={formData.contact}onChange={handelInputChange}/>
            <br /><br />
            <label htmlFor="address">Address:</label>
            <input type="text"placeholder="Enter Your Address" 
            name="address" value={formData.address}onChange={handelInputChange}/>
            <br /><br />
            <label htmlFor="username">Username:</label>
            <input type="text"placeholder="Enter Your Username" 
            name="username" value={formData.username}onChange={handelInputChange}/>
            <br /><br />
            <label htmlFor="password">Password</label>
            <input type="text"placeholder="Enter Your Password" 
             name="password" value={formData.password}onChange={handelInputChange}/>
            <br /><br />
            <button>Submit</button>
        </form>
        <table border={"black"}>
            <caption>Form Submited Data</caption>
            <tbody>
            {
                formData.map((data)=>(
                    <tr > 
                    <td>{data.fullName}</td>
                    <td>{data.contact}</td>
                    <td>{data.address}</td>
                    <td>{data.username}</td>
                    <td>{data.password}</td>
                    </tr>
                ))
            }
            </tbody>


        </table>
        </>
    )
}