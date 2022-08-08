import { Component } from "react";
import WeatherDay from "./WeatherDay";

export default class weather extends Component{
render(){
    return(
     <>
     {
        this.props.weatherInfo.map(item => 
          <WeatherDay dayData={item}/>
         
        )
     }
    
    </>
    )}
}