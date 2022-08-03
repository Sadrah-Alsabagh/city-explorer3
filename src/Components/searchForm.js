import {Component} from 'react';
export default class SearchForm extends Component{
render(){
    return(
        <>
        <form onSubmit={this.props.submitHandler}>
            <h1>City Explorer!</h1>
            <input type="text" id ="searchQuery"/>
            <button type='submit'>Explore!</button>
        </form>
            </>
    )
}
}