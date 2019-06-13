import React from 'react';
import './App.css';
import {HashRouter as Router, Redirect, Link, Route, Switch} from 'react-router-dom'
import ArticleList from './Components/ArticleList'
import { SocialIcon, baseAddress } from './helpers';
import About from './Components/About'
import Admin from './Components/Admin'
import navImage from './assets/Kartik.jpg'
import axios from 'axios';

let PublicComponent = () => {
  
  return (
      <div>
      <div className="nav_container">
        <div className="nav_image_container">
          <Link to="/about" style={{textDecoration: 'none'}}><div className="nav_link">About</div></Link>
          <Link to="/posts"><img src={navImage} className="nav_image"/></Link>
        </div>
      </div>
      <Route path="/posts" component={ArticleList} /> 
      <Route path="/about" component={About} />
      <Redirect from="/" to="/posts" />
      <div className="container-fluid text-center">
        <div className="pt-5 pb-3" style={{fontFamily: '"consolas", "roboto-mono"'}}>
          &copy; 2019 KARTIK VERMA . <Link to="/about" style={{color: 'black'}}>About</Link> . <Link to="/posts" style={{color: 'black'}}>Posts</Link>
          <div>
            <ul style={{listStyleType: 'none', clear:'both', display: 'inline-block'}}>
                <li style={{display: 'inline', float: 'left'}}><SocialIcon icon="fab fa-github" link="https://github.com/vermakartik"/></li>
                <li style={{float: 'left'}}><SocialIcon icon="fab fa-codepen" link="https://codepen.io/simClev/"/></li>
                <li style={{float: 'left'}}><SocialIcon icon="fab fa-linkedin-in" link="https://www.linkedin.com/in/kartik-verma/"/></li>
                <li style={{float: 'left'}}><SocialIcon icon="fab fa-instagram" link="https://www.instagram.com/its.an.engineer/"/></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  )
}

class App extends React.Component {
  state = {
    isLoggedIn: (localStorage.getItem('isLoggedIn') ? true : false),
  }

  fetch = async (username, password) => {
    let response = await axios.post(baseAddress + '/users/signin', {
      'username': username,
      'password': password
    })
    console.log(response.data.authToken)
    if(response.data.status === 200){
      localStorage.setItem('authToken', response.data.authToken)
      localStorage.setItem('username', username)
      localStorage.setItem('isLoggedIn', true)
      this.setState({isLoggedIn: true})
    } else {
      this.setState({isLoggedIn: false})
    }
    // localStorage.setItem("isLoggedIn", true)
    console.log(response)
  }

  onChangeLogin = (username, password, value) => {
    console.log("username" + username)
    console.log("password" + password)
    if(value === true){
      this.fetch(username, password)
    } else {
      localStorage.clear()
      this.setState({isLoggedIn: true})  
    }
    
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={(props) => <Admin loginHandle={this.onChangeLogin} isLoggedIn={this.state.isLoggedIn} {...props}/>} />
          <Route path="/" component={PublicComponent}/>
        </Switch>
      </Router>
    );
  }
}

// let App = () => {
//   return (
//     <Router>
//       <div>
//         <Route path="/temp" component={Comp1}/>
//       </div>
//     </Router>
//   )
// }

// let Comp1 = ({match}) => {
//   return (
//       <div>
//         <Link to={match.url + "/1"}>One</Link>
//         <Link to={match.url + "/2"}>Two</Link>
//         <Link to={match.url + "/3"}>Three</Link>
//         <Route path={match.url + "/:value"} component={Comp2}/>
//       </div>
//   )
// }

// let Comp2 = ({match}) => {
//   return (
//       <div>
//         Got this is value. + {match.params.value}
//       </div>
//   )
// }

export default App;
