import React, { Component } from 'react';
import './App.css';


import Posts from './components/posts';
import PostForm from './components/postform';



class App extends Component {
 
  render() {

    return (

     <React.Fragment>
         <PostForm /> 
         <hr></hr>
         <Posts />
     </React.Fragment>

    );
  }
}

export default App;
