import React,{Component} from "react";

import Header from "./Header";

class Jokes extends Component{
    state={joke:{},jokes:[]}
    
    componentDidMount(){
        //fetch('https://official-joke-api.appspot.com/random_joke').then(response=>console.log('response',respnse));
        fetch('https://official-joke-api.appspot.com/random_joke').then(response=>{return response.json() })
        .then(json => console.log('json',json))
        .then(json=>this.setState({joke:json}))
        .catch(error =>alert(error.message));

    }
    fetchJokes=()=>{
        fetch('https://official-joke-api.appspot.com/random_ten').then(response=>response.json() ) // equivalent to response=>{return response.json() }
        .then(json=>this.setState({jokes:json}))
        .catch(error =>alert(error.message));
    }
    render(){
        const {setup,punchline}=this.state.joke;
        return(
            <div>
                <Header/>
                <h2>joke section</h2>
                <p>{setup}<em>{punchline}</em> </p>
                <hr/>
                <h3>want 10 more jokes</h3>
                <button onClick={this.fetchJokes}>click for more jokes</button>
                {
                    this.state.jokes.map(joke=>{
                        const{id,setup,punchline}=joke;
                        return <p key={id}>{setup}<em>{punchline}</em></p>
                    })
                }
            </div>
           
        )
    }
}
export default Jokes;