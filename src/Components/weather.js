import { Component } from "react";

export default class weather extends Component{
render(){
    return(
     <>
     {
        this.props.weatherInfo.map(item => 
          <li>{item.date}: {item.description}</li>   
        )
     }
    
    </>
    )}
}