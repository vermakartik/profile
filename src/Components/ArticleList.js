import React from 'react'
import ArticleLink from './ArticleLink'
import {blogList} from '../helpers'
import ArticleView from "./ArticleView"
import {getAsLink, baseAddress} from '../helpers'
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'

let ArticleItem = ({articleURL, item}) => {
    // console.log(articleURL)
    return <Link to={articleURL} style={{textDecoration: 'none'}}>
        <ArticleLink article={item} />
    </Link>
}

let FullArticleList = ({blogList, url}) => {
    return (
        <div className="container-fluid">
            {
                blogList.map((item, index) => {
                    let articleText = getAsLink(item.title)
                    let articleURL = `${url}/${articleText}`
                    console.log(articleURL)
                    return <ArticleItem key={index} articleURL={articleURL} item={item}/>
                })
            }
        </div>
    )
}

export default class ArticleList extends React.Component {

    state = {
        blogList: []
    }   

    fetch = async () => {
        let articleList = await axios.get(baseAddress + "/posts")
        console.log(articleList)
        this.setState({blogList: articleList.data.hits})
    }

    componentDidMount(){
        this.fetch()
    }

    render(){
        let {match} = this.props
        console.log(match)
        return (
            <div>
                <Route exact path={match.url} component={() => <FullArticleList blogList={this.state.blogList} url={match.url}/>}/>
                <Route path={match.url + "/:id"} component={ArticleView}/>
            </div>
        )
    }
}