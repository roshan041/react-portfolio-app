//import React,{ Component } from 'react';

import React from 'react';
import PROJECTS from '../data/projects';
/*
class Project extends Component{
    render(){

        const {title,image,description,link} = this.props.project;
        
        return(
          <div style={{display:'inline-block', margin:10,widht:300}}>
              <h3>{title}</h3>
              <img src={image} alt='picture' style={{width:200, height:120}} />
              <p>{description}</p>
              <a href={link}>{link}</a>
          </div>
        )
    }
    
}

class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT =>{
                            return(
                                <Project key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
                
            </div>
            
        )
    }
}
*/


//stateless component
const Project=props=>{
    const {title,image,description,link} = props.project;
    
    return(
      //  <div>{this.props.project.title}</div>
      <div style={{display:'inline-block', margin:10,widht:300}}>
          <h3>{title}</h3>
          <img src={image} alt='picture' style={{width:200, height:120}} />
          <p>{description}</p>
          <a href={link}>{link}</a>
      </div>
    )

}


//stateless component and inline return
const Projects=()=>(
    <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT =>{
                            return(
                            //    <div key={PROJECT.id}>{ PROJECT.title}</div>
                                <Project key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
                
            </div>
)
 
export default Projects;