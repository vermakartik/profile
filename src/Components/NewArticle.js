import React from 'react'
import Logout from './Auth'
import {Link, Redirect, withRouter} from 'react-router-dom'
import {baseAddress, getAuthDetails} from '../helpers'
import Axios from 'axios'
import './AdminArticle.css'

export default withRouter(class EditArticle extends React.Component {
    state = {
        title: "",
        text: "",
        type: "",
        author: "",
        backColor: "#ffffff",
        publishDate: Date.now()
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = async (e) => {
        let date = Date.now()
        this.setState({publishDate: date})
        let userDetails = getAuthDetails()
        let userInfo = {}
        if(userDetails){
            userInfo = {
                ...this.state,
                'user': userDetails
            }
        } else {
            userInfo={
                ...this.state
            }
        }
        console.log(this.state)
        Axios.post(baseAddress + "/posts", userInfo).then(response => {
            console.log(response)
            this.props.history.replace('/admin/edit/' + this.state.title.split(" ").join("-"))
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row pb-4">
                    <div className="col-12">
                        <div style={{fontFamily: '"Fredoka One", "sans-serif"', fontSize: "24px", background: "#e8645a", padding: "10px 12px 10px 12px", borderRadius: "0px 0px 8px 8px"}} className="mb-3">New Article</div>
                        <form>
                            <div className="row">
                                <div className="input-container col-12 col-md-6">
                                    <label for="title">Post Title</label>
                                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                                </div>
                                <div className="input-container col-12 col-md-6">
                                    <label>Post Author</label>
                                    <input type="text" name="author" value={this.state.author} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="input-container mt-3">
                                <label>Post Type</label>
                                <input type="text" name="type" value={this.state.type} onChange={this.onChange}/>
                            </div>
                            <div className="input-container mt-3">
                                <label>Post Text</label>
                                <textarea type="text" name="text" value={this.state.text} onChange={this.onChange} rows='20' cols="50"/>
                            </div>
                            <div className="input-container mt-3 mb-3">
                                <label>Background color</label>
                                <input type="color" name="backColor" value={this.state.backColor} onChange={this.onChange} rows='20' cols="50"/>
                            </div>
                            <button type="button" className="border-0 pt-1 pb-1 pl-3 pr-3 rounded-sm bg-primary text-light" onClick={this.onSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="links-position">
                    <Link to="/admin"><span className="text-top"><button className="new-button list-button shadow-sm ml-1 mr-1" style={{backgroundColor: "#00897b"}}><i class="fas fa-clipboard-list"></i></button></span></Link>
                    <Logout loginHandle={this.props.loginHandle}/> 
                </div>
            </div>
        )
    }
})