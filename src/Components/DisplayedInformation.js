import {Component} from 'react';
export default class DisplayedInformation extends Component{
render(){
return(
    <>
    <p>City Name:{this.props.cityInfo.display_name} </p>
    <p>Latitude:{this.props.cityInfo.latitude} </p>
    <p>Longitude:{this.props.cityInfo.longitude}</p>
    </>
)

}

}   

