import { useState } from "react"

export default function Form(){
    // let[fullName,setFullName] =useState("");
    // let [username,setUserName] = useState("");
    let [formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:""
    });

    // let handelNameChange=(event)=>{
    //     // console.log(event.target.value);
    //     setFullName(event.target.value);
    // }
    // let handelUserName=(event)=>{
    //     // console.log(event.target.value);
    //     setUserName(event.target.value);
    // }
    let handelInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        // console.log(fieldName);
        // console.log(newValue);
        setFormData((currData)=>{
            // currData[fieldName]=newValue;
            // return {...currData,[fieldName]:newValue};
            return{...currData,[event.target.name]:event.target.value};
        })
    };

    let handelSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName:"",
            username:"",
            password:""
            
        });
    };

    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullName">Full Name :</label>
            <input type="text" id="fullName" placeholder="Enter Full Name" 
            value={formData.fullName}  name="fullName" onChange={handelInputChange}/>
            <br />
            <br />
            <label htmlFor="username">UserName :</label>
            <input type="text" id="usernmae" placeholder="Enter Username" 
            value={formData.username}name="username"onChange={handelInputChange} />
            <br />
            <br />
            <label htmlFor="password">Password :</label>
            <input type="text" id="password" placeholder="Enter Password" 
            value={formData.password}name="password"onChange={handelInputChange} />
            <br />
            <br />
            <button>Submit</button>
        </form>
    )

}