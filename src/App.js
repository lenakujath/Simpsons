import React, {Component} from 'react';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';


class App extends Component {

  
  constructor(props) {

          super(props);
          this.state = {
            quote: "",
            name: "",
            photo: "",
            isDataLoaded: false,
          };
          this.getQuote = this.getQuote.bind(this);
        }
      

      async getQuote() {
            const  data = await axios (`https://simpsons-quotes-api.herokuapp.com/quotes`)
            this.setState({
            quote: data.data[0].quote,
            name: data.data[0].character,
            photo: data.data[0].image,
            isDataLoaded: true,
          })
          console.log(this.state.photo)
        }

        
    render() {

      return (
        <div>
              
        
           
             
             <DisplayQuote action={this.getQuote} quote={this.state.quote} name={this.state.name} photo={this.state.photo} />
        

        </div>
      )
    }
  }

export default App;

