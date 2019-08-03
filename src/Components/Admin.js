import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import NewArticle from './NewArticle'
import EditArticle from './EditArticle'
import Logout, {Login, AuthCheck} from './Auth'
import './Admin.css'
import {blogList, getDateInFormat, baseAddress, getAuthDetails} from '../helpers'
import Axios from 'axios';
import { userInfo } from 'os';

let Links = ({match, loginHandle}) => <div className="links-position">
                    <Link to={match.url + "/new"}><button className="new-button shadow-sm ml-1 mr-1"><i className="fas fa-plus"></i> <span className="pl-1" style={{fontWeight: 'bold'}}>NEW</span></button></Link> 
                    <Logout loginHandle={loginHandle}/>
                </div>

class AdminHome extends React.Component {
    state = {
        articleList: []
    }

    fetch = () => {
        let response = Axios.get(baseAddress + "/posts").then(response => {
            let articleList = response.data.hits
            this.setState({articleList: articleList})
            console.log(articleList)
        })
    }

    componentDidMount(){
        this.fetch()
    }

    handleDelete = (index) => {
        let userDetails = getAuthDetails()
        let userInfo;
        if(userDetails){
            userInfo = {
                "_id": this.state.articleList[index]._id,
                "user": userDetails
            }
        } else {
            userInfo = {
                "_id": this.state.articleList[index]._id
            }
        }
        Axios.post(baseAddress + "/posts/delete", userInfo).then(response => {
            console.log(response)
            this.fetch()
        })
    }

    render(){
        let {match} = this.props
        let {articleList} = this.state
        console.log(articleList)
        return (
        <div className="container-fluid">
            <div className='row bg-light'>
                <div style={{position: 'relative', color: 'white', letterSpacing: "1px", background: "#5ba386", fontFamily: 'Ubuntu, "serif"', fontSize: "24px", fontWeight: 'bold', padding: "16px 8px 16px 16px", left: '8px', width: 'calc(100% - 16px)', borderRadius: "0px 0px 12px 12px"}}>Article List</div>
            </div>
            <div className="row">
                {
                    this.state.articleList.map(
                    (item, index) => {
                        return (
                            <div className="col-md-4 col-lg-3 col-12">
                                <div className="row m-1 text-dark article-item">
                                    <div className="col-9">
                                        <Link to={match.url + "/edit/" + item.title.split(" ").join("-")} style={{textDecoration: 'none'}}>
                                            <div className="text-light pt-3 pb-3" style={{fontFamily: '"Ubuntu", sans-serif', fontSize: '18px'}}>
                                                <span className="font-weight-bold">Title: </span>{item.title} <br />
                                                <span className="font-weight-bold">Date: </span>{getDateInFormat(item.publishDate)}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <div style={{height: '100%', textAlign: 'right', position: 'relative'}}>
                                            <button style={{top: '50%', transform: 'translateY(-50%)'}} onClick={() => this.handleDelete(index)} className="delete-article-button"><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Links {...this.props}/>
        </div>
    )}
}

export default class Admin extends React.Component {

    render() {
        const {match, isLoggedIn} = this.props
        console.log(isLoggedIn)
        console.log(match)
        return(
            <div>
                <AuthCheck loginHandle={this.props.loginHandle} isLoggedIn={isLoggedIn}>
                        <Route path={match.url} exact component={() => <AdminHome match={match} loginHandle={this.props.loginHandle}/>}/>
                        <Route path={match.url + "/new"} component={(props) => <NewArticle loginHandle={this.props.loginHandle}/>} {...this.props}/>
                        <Route path={match.url + "/edit/:name"} component={(props) => <EditArticle loginHandle={this.props.loginHandle} {...props} />} />
                </AuthCheck>
            </div>
        )
    }
}