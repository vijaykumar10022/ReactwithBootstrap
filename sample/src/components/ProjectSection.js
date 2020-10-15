import React from "react";
import ProjectCard from "./projectcard";


function Projectsection(){
    const projects=[
        {
            id:1,
            title:"project 1",
            imageurl:"https://raw.githubusercontent.com/vijaykumar10022/Fullstackproject/master/images/p1.jpg",
            excerpt:"This is my project about...",
        },
        {
            id:2,
            title:"project 2",
            imageurl:"https://raw.githubusercontent.com/vijaykumar10022/Fullstackproject/master/images/p2.jpg",
            excerpt:"This is My Full stack",
        },
        {
            id:3,
            title:"project 3",
            imageurl:"https://raw.githubusercontent.com/vijaykumar10022/Fullstackproject/master/images/p3.jpg",
            excerpt:"This is My flask",
        },
    ];
    return (
        <div className="container text-center my-5">
    <h1 className="font-weight-light">My <span className="text-info">Projects</span></h1>
    <div className="lead">I build products. Just like this website</div>
    <div className="row my-5 pt-3">
        {
            projects.map((project)=>
            (
                    <div key={project.id} className="col-12 col-md-4 my-2">
                        <ProjectCard 
                        project={project}
                        />
                    </div>
            ))}
      
    </div>
    
    <div className="my-5">
      <a href="/" className="text-dark text-right">
        <h5> See my projects
          <i className="fas fa-arrow-right align-middle"></i>
        </h5>
      </a>
    </div>
  </div>
    );
}
export default Projectsection; 