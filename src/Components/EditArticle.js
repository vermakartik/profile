import React from 'react'
import './Admin.css'
import {Link, withRouter} from 'react-router-dom'
import Logout from './Auth'
import {baseAddress, getAuthDetails} from '../helpers'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../Codeblock'

export default withRouter(class EditArticle extends React.Component {

    state = {
        _id: "",
        title: "",
        text: "",
        type: "",
        author: "",
        backColor: "",
        publishDate: ""
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
            publishDate: articleItem.publishDate
        })
        console.log(this.state)
    }
    
    componentDidMount(){
        console.log("called ======")
        this.fetch(this.props.match.params.name)
    }

    onChange = (e) => {
        console.log('changed...' + e.target.name + " > " + e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = async (e) => {
        console.log("called update state")
        console.log(this.state)
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
        console.log("***UserInfo***")
        console.log(userInfo)
        axios.post(baseAddress + "/posts/save", userInfo).then(response => {
            console.log(response)
            this.props.history.replace('/admin')
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row pb-4">
                    <div className="col-md-1 col-0"></div>
                    <div className="col-md-10 col-12">
                        <div style={{fontFamily: '"Fredoka One", "sans-serif"', fontSize: "24px"}} className="pt-2 pl-0 pb-2">Edit</div>
                        <form>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <label className="font-weight-bold">Post Title</label>
                                    <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label className="font-weight-bold">Post Author</label>
                                    <input className="form-control" type="text" name="author" value={this.state.author} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Post Type</label>
                                <input className="form-control" type="text" name="type" value={this.state.type} onChange={this.onChange}/>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6 col-12">
                                    <label className="font-weight-bold">Post Text</label>
                                    <textarea className="form-control" type="text" name="text" value={this.state.text} onChange={this.onChange} rows='20' cols="50"/>
                                </div>
                                <div className="border rounded col-md-6 col-12">
                                    <div className="p-0 m-0" style={{maxHeight: '34em', overflow:'scroll', wordBreak: 'break-word'}}>
                                        <ReactMarkdown 
                                        source={this.state.text}
                                        renderers={{code: CodeBlock}} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Background color</label>
                                <input className="form-control" type="color" name="backColor" value={this.state.backColor} onChange={this.onChange} rows='20' cols="50"/>
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