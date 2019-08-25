import React from 'react'
import './Admin.css'
import {Link, withRouter} from 'react-router-dom'
import Logout from './Auth'
import {baseAddress, getAuthDetails} from '../helpers'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../Codeblock'
import './AdminArticle.css'
import { NONAME } from 'dns';

export default withRouter(class EditArticle extends React.Component {

    state = {
        _id: "",
        title: "",
        text: "",
        type: "",
        author: "",
        backColor: "",
        publishDate: "",
        isPublished: ""
    }

    fetch = async ( name ) => {
        console.log(name)
        let response = await axios.get(baseAddress + "/posts/" + name)
        let articleItem = response.data.data
        this.setState({
            _id: articleItem._id,
            title: articleItem.title,
            text: articleItem.text,
            type: articleItem.type,
            author: articleItem.author,
            backColor: articleItem.backColor,
            publishDate: articleItem.publishDate,
            isPublished: articleItem.isPublished
        })
        console.log(this.state)
    }
    
    componentDidMount(){
        this.fetch(this.props.match.params.name)
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = async (e) => {
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
        axios.post(baseAddress + "/posts/save", userInfo).then(response => {
            this.props.history.replace('/admin')
        })
    }

    onPublishToggleClick = async (e, publishState) => {
        let userDetails = getAuthDetails()
        let userInfo = {}
        let stateInfo = this.state
        stateInfo.isPublished = publishState
        if(userDetails){
            userInfo = {
                ...stateInfo,
                'user': userDetails
            }
        } else {
            userInfo={
                ...stateInfo
            }
        }
        axios.post(baseAddress + "/posts/save", userInfo).then(response => {
            this.props.history.replace('/admin')
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row pb-4">
                    <div className="col-md-1 col-0"></div>
                    <div className="col-12">
                        <div className="row pt-2 pl-2 pb-2 mb-3" style={{background: "#e8645a", borderRadius: "0px 0px 16px 16px"}}>
                            <div className="col-6" style={{fontFamily: '"Fredoka One", "sans-serif"', fontSize: "24px"}} >Edit</div>
                            <div className="col-6 text-right">
                                {
                                    this.state.isPublished === false ? <button onClick={e => this.onPublishToggleClick(e, true)} className="btn btn-secondary">Publish</button> : <span><button onClick={e => this.onPublishToggleClick(e, false)} className="btn btn-warning">UnPublish</button></span> 
                                }
                            </div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="input-container col-12 col-md-6">
                                    <label>Post Title</label>
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

                            <div className="row mt-3">
                                <div className="input-container col-md-6 col-12">
                                    <label>Post Text</label>
                                    <textarea type="text" name="text" value={this.state.text} onChange={this.onChange} rows='20' cols="50"/>
                                </div>
                                <div className="border rounded col-md-6 col-12">
                                    <div style={{maxHeight: '34em', overflow:'scroll', wordBreak: 'break-word', padding: "4px 8px", margin: 0}}>
                                        <ReactMarkdown 
                                        source={this.state.text}
                                        renderers={{code: CodeBlock}} style={{border: 'none'}} />
                                    </div>
                                </div>
                            </div>
                            <div className="input-container mt-3 mb-3">
                                <label>Background color</label>
                                <input type="color" name="backColor" value={this.state.backColor} onChange={this.onChange} rows='20' cols="50"/>
                            </div>
                            <button type="button" className="border-0 pt-1 pb-1 pl-3 pr-3 rounded-sm bg-primary text-light" onClick={this.onSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-1 col-0"></div>
                </div>
                <div className="links-position">
                    <Link to="/admin/new"><button className="new-button shadow-sm ml-1 mr-1"><i className="fas fa-plus"></i> <span className="pl-1" style={{fontWeight: 'bold'}}>NEW</span></button></Link> 
                    <Link to="/admin"><span className="text-top"><button className="new-button list-button shadow-sm ml-1 mr-1" style={{backgroundColor: "#00897b"}}><i class="fas fa-clipboard-list"></i></button></span></Link> 
                    <Logout loginHandle={this.props.loginHandle}/>
                </div>
            </div>
        )
    }
})