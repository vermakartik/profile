import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'

export class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-md-5 mt-3">
                    <div className="col-0 col-md-4"></div>
                    <div className="col-12 col-md-4 rounded-lg pt-3 pb-3" style={{background: '#9b4dcb'}} >
                        <div className="text-center" style={{fontFamily: '"Fredoka One", sans-serif', fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase', color: "white"}}>Login</div>
                        <form>
                            <div className="form-group">
                                <label className="text-light" style={{fontFamily: "ubuntu, sans-serif"}}>Username</label>
                                <input name="username" type="text" onChange={this.handleChange} value={this.state.username} className="form-control" id="username" />
                            </div>
                            <div className="form-group">
                                <label className="text-light" style={{fontFamily: "ubuntu, sans-serif"}}>Password</label>
                                <input name="password" type="password" className="form-control" id="password" onChange={this.handleChange} value={this.state.password}/>
                            </div>
                            <div className="text-right">
                                <button type="button" style={{border: 'none', textTransform: "uppercase"}} className="rounded-lg pl-3 pr-3 pt-1 pb-1" onClick={(e) => this.props.loginHandle(this.state.username, this.state.password, true)}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-0 col-md-4"></div>
                </div>
            </div>
        )
    }
}

class Logout extends React.Component {

    render() {
        return (
            <button className="logout-button bg-warning" onClick={() => {
                this.props.loginHandle("", "", false)
                this.props.history.push('/posts')
            }} style={{display: 'inline-block', border: 'none', borderRadius: "50%", padding: "4px 8px 4px 10px", fontSize: "20px", color: "white"}}>
                <i className="fas fa-sign-out-alt"></i>
            </button>
        )
    }
}

export class AuthCheck extends React.Component {
    render() {
        
        var toRender = (
            this.props.isLoggedIn ? this.props.children : <Login loginHandle={this.props.loginHandle} />
        )
        console.log(toRender)
        return (
            <div>
                {toRender}
            </div>
        )
    }
}

export default withRouter(Logout)