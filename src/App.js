import './App.css';
import SearchForm from './Components/searchForm';
import axios from 'axios';
import {Component} from 'react';
import DisplayedInformation from './Components/DisplayedInformation'
import Map from './Components/Map';
import Error from './Components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
constructor(props){
    super(props);
    this.state ={
        display_name:'',
        latitude:'',
        longitude:'',
        map_src:'',
        displayInfo:false,
        error_msg:'',
        displayError:false,
        weather:[],
        displayWeather:false,
    }
}
    displayLocation= async (e)=>{
e.preventDefault();
const searchQuery=  e.target.searchQuery.value;
const url =`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_TOKEN}&q=${searchQuery}&format=json`; 
//console.log(url);
try {
  const city = await axios.get(url);
// console.log(city);
this.setState({
display_name:city.data[0].display_name,
latitude:city.data[0].lat,
longitude:city.data[0].lon,
displayInfo:true,
displayError:false

}
)
 this.displayMap(city.data[0].lat,city.data[0].lon);

this.displayWeather(searchQuery,city.data[0].lat,city.data[0].lon)
} catch (error) {
 this.setState({
  displayInfo: false,
  displayError:true,
  error_msg:error.response.status +': '+ error.response.data.error
  
})

}

}

displayMap =(lat,lon)=>{
  const mapSrc =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_TOKEN}&center=${lat},${lon}&zoom=18`;
this.setState({
  map_src:mapSrc
})
}

displayWeather =async (searchQuery, lat,lon)=>{
  try {
    const weatherURL=await axios.get(`${process.env.PORT}/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`)
this.setState({
  displayWeather:true,
  weather:weatherURL.data
})
  } catch (error) {
   
    this.setState({
       errorMsg: error.response.status+ ': '+ error.response.data.error,
       displayError:false,
       displayWeather:false,
       displayInfo:false
    })
  }

}


render(){
return(
  
        <div className='App'>
  <img src='https://flyclipart.com/thumb2/environment-clip-art-158440.png' alt='earth' width='10%' height='10%'/>
            <SearchForm submitHandler={this.displayLocation}/>
{this.state.displayInfo &&
<>
<DisplayedInformation cityInfo={this.state}/>
<Map mapSource={this.state.map_src}/>
</>
}
{
  this.setState.displayWeather &&
  <weather weatherInfo={this.state.weather}/>
}
{

  this.state.displayError &&
  <Error error ={this.state.error_msg}/>
}
            <DisplayedInformation cityInfo={this.state}/>
            <Map mapSource={this.state.map_src}/>
        </div>
   
    )

}
    
}

export default App;