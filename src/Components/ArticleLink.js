import React from 'react'
import './ArticleLink.css'
import {getDateInFormat, Dot, monthsInWords, getAsLink} from '../helpers'
import {Link} from 'react-router-dom'



export default class ArticleLink extends React.Component {

    render(){
        console.log(this.props.article.backColor)
        return (
            <div className="row pt-5 pb-5 pt-4 pb-4" style={{backgroundColor: `${this.props.article.backColor}`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-0"></div>
                        <div className='col-md-6 col-12 article-link-title'>{this.props.article.title}</div>
                        <div className="col-md-3 col-0"></div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-md-3 col-0"></div>
                        <div className="col-md-6 col-12 article-link-desc">
                            <span className="article-tag">{this.props.article.type}</span> <Dot /> 
                            <span>{getDateInFormat(this.props.article.publishDate)}</span> <Dot />
                            <span style={{fontWeight: 'bold', letterSpacing: '1px'}}>{this.props.article.author}</span>
                        </div>
                        <div className="col-md-3 col-0"></div>
                    </div>
                </div>
            </div>
        )
    }
}