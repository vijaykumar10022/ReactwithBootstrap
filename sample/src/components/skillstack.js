import React from "react";
import Skill from "./Skill";
import {v4 as uuid } from "uuid";
function Skillstack(){
  const skill=[
    {
      id:1,
      name:"HTML5",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/html.png?raw=true",
      starstotal:3,
      starsactive:3,
    },
    {
      id:2,
      name:"CSS",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/css.png?raw=true",
      starstotal:3,
      starsactive:2,
    },
    {
      id:3,
      name:"JS",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/js.png?raw=true",
      starstotal:3,
      starsactive:1,
    },
    {
      id:4,
      name:"BS4",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/bs.png?raw=true",
      starstotal:3,
      starsactive:2,
    },
    {
      id:5,
      name:"React",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/react.png?raw=true",
      starstotal:3,
      starsactive:2,
    },
    {
      id:6,
      name:"Mysql",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/mysql.png?raw=true",
      starstotal:3,
      starsactive:2,
    },
    {
      id:7,
      name:"Python",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/python.png?raw=true",
      starstotal:3,
      starsactive:2,
    },
    {
      id:8,
      name:"flask",
      imageurl:"https://github.com/vijaykumar10022/Fullstackproject/blob/master/images/flask.jpg?raw=true",
      starstotal:3,
      starsactive:1,
    },
  ];
  
  const finalskillrow=[];
  for(let i=0;i<2;i++){
    let skillrow=skill.slice(i*4,(i+1)*4);
    finalskillrow.push(<div key={uuid()} className="d-flex justify-content-around py-3">
    {
    skillrow.map((skill)=>(
        <Skill key={uuid()} skill={skill} />
    ))  
  }      
    </div>);
    
  }
    return (
    <div className="bg-light w-100">
        <div className="container text-center py-5">
            <h1 className="font-weight-light">
                <span className="text-info">Technology</span> stack
            </h1>
            
            <div className="lead pb-5">I design, develop and deliver with these weapons</div>
            {finalskillrow}
        
        </div>
    </div>
    );
}
export default Skillstack; 