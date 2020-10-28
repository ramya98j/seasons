import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    
         state={lat: null, errorMess:''};
        componentDidMount()
        {
            window.navigator.geolocation.getCurrentPosition
            (
                (position)=>this.setState({lat:position.coords.latitude}),
                err=>this.setState({errorMess:err.message})
                    
             );
        }
        render()
          {
              if(this.state.errorMess&&!this.state.lat)
              {
              return<div>Error:{this.state.errorMess}</div>;
              }
              if(!this.state.errorMess&&this.state.lat)
              {
              return<div><SeasonDisplay lat={this.state.lat}/></div>;
              }
        
               return <div><Spinner message="please accept location request"/></div>;
           
          }
    
    
}
ReactDOM.render(<App/>,document.querySelector('#root'));