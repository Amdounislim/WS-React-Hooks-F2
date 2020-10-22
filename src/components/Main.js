import React, { useState } from "react";

const Main = ({ setInput, Add, AddItem }) => {
    const [myInput, setMyInput] = useState("")
  // const [name, setname] = useState("")
  // const [age, setage] = useState("")
  // const [bio, setbio] = useState("")
//   const [user, setUser] = useState([{
//     name: "slim",
//     age: 12,
//     bio: "ffff",
//   }]);

//   const handelChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div>
      {/* <input
        type="text"
        name="name"
        onChange={handelChange}
      />
      <input type="text" name="age" onChange={handelChange} />
      <input type="text" name="bio" onChange={handelChange} /> */}
      <input type="text" onChange={(e)=>setMyInput(e.target.value)} />
      <button onClick={()=>AddItem(myInput)}>ADD</button>
    </div>
  );
};

export default Main;
