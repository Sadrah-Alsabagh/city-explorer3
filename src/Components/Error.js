import { Component } from "react";

export default class Error extends Component{
    render(){
        return(
            <p>{this.props.error}</p>
        )
    }
}
