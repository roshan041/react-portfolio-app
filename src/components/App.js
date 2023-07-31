import React,{ Component } from 'react';

import Projects from './Projects';

import SocialProfiles from './SocialProfiles';

import profile from '../assets/profile.png';

import Title from './Title';

import Header from './Header';

class App extends Component{
  state={displayBio:false}

 toggleDisplayBio= () =>{
  this.setState({displayBio:!this.state.displayBio});
  }

  render(){
    return(
      <div>
        <Header/>
        <img src={profile} alt='my profile pic' className='profile'></img>
        <h1>Hello!</h1>
        <p>My name is Roshan</p>
        <Title/>
        <p>I'm React front End Developer and I like to work on meaningfull Projects</p>
      
        {
          this.state.displayBio?(
            <div>
                <p>I live in washim, Mharashtra</p>
                <p>My favourate language is JavaScript</p>
                <p>My hobbies are reading book,watching web series</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
              </div>
          ):(
            <div>
              <button onClick={this.toggleDisplayBio}>readMore</button>
            </div>

          )
        }
      <hr/>
      <Projects />
      <hr/>
      <SocialProfiles/>
      </div>
      
    )
  }
}
export default App;
