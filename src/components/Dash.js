import React, { Component } from 'react';
import axios from "axios";


export class Dash extends Component {
    constructor(props){
        super(props)
        this.state={
            name: []
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response =>{
            console.log(response)
            this.setState({name: response.data})
        })
        .catch (error =>{
            console.log(error)
        })
    }
  render() {
      const {name} = this.state
    return (
      <div>

          {
              name.length ? name.map(names => <div key={names.id}>{names.title}</div>)
              : null
          }
      </div>
    )
  }
}

export default Dash