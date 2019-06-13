import React from 'react'
import {SocialIcon, getDateInFormat, Dot, getBlogWithName, baseAddress} from '../helpers'
import './ArticleView.css'
import profile from '../assets/profile.jpg'
import axios from 'axios'

export default class ArticleView extends React.Component {
    state={
        articleItem: {}
    }

    fetch = async ( name ) => {
        console.log(name)
        let articleItem = await axios.get(baseAddress + "/posts/" + name)
        console.log(articleItem.data.data)
        this.setState({
            'articleItem': articleItem.data.data
        })
        console.log(this.state.articleItem)
    }

    componentDidMount(){
        this.fetch(this.props.match.params.id)
        // let item = 
        // this.setState({"articleItem": item})
    }

    render(){
        console.log('Article View Called..')
        console.log(this.state.articleItem)
        let {articleItem} = this.state
        console.log(articleItem['id'])
        return (
            <div className="container-fluid">
                <div className="row pt-5 pb-4 pt-md-5 pb-md-4 article-item-details" style={{backgroundColor: `${articleItem.backColor}`, color:'white'}}>
                    <div className="container">
                        <div className='row'>
                            <div className="col-md-1 col-0"></div>
                            <div className="col-md-10 col-12 article-view-title" >
                                {articleItem.title}
                            </div>
                            <div className="col-md-1 col-0"></div>
                        </div>
                        <div className='row pt-2'>
                            <div className="col-md-1 col-0"></div>
                            <div className="col-md-10 col-12" >
                                <span className="article-tag">
                                    <span>{articleItem.type}</span> <Dot />
                                    <span>{getDateInFormat(articleItem.publishDate)}</span> <Dot />
                                    <span style={{fontWeight: 'bold', letterSpacing: '2px'}}>{articleItem.author}</span>
                                </span>
                            </div>
                            <div className="col-md-1 col-0"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-4 pb-4">
                        <div className="col-0 col-md-1"></div>
                        <div className="col-12 col-md-10 article-view-text">{articleItem.text}</div>
                        <div className="col-0 col-md-1"></div>
                    </div>
                </div>
                <div className='row pt-4 pb-4 pt-md-5 pb-md-5' style={{backgroundColor: "#d3d3d3"}}>
                    <div className="container pt-0 pt-md-2 pb-md-2 pt-0 ">
                        <div className='row'>
                            <div className="col-0 col-md-1"></div>
                            <div className="col-0 col-md-10">
                                <div className='row'>
                                    <div className="col-md-8 col-12">
                                        <div className="font-weight-bold" style={{fontFamily: '"Fresca", sans-serif', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '18px'}}>About the Author</div>
                                        <div style={{fontFamily: '"Fresca", sans-serif', fontSize: '18px'}}>
                                             I'm a Computer Science & Engineering Graduate from National Institute of Technology, Hamirpur. I have worked in the fields of Deep Learning, Android Development and Web Development. My current interest is front end development.
                                        </div>
                                        <div className="container-fluid pt-3">
                                            <ul style={{listStyleType: 'none'}} className='row'>
                                                <li><SocialIcon icon="fab fa-github" link="https://github.com/vermakartik"/></li>
                                                <li><SocialIcon icon="fab fa-codepen" link="https://codepen.io/simClev/"/></li>
                                                <li><SocialIcon icon="fab fa-linkedin-in" link="https://www.linkedin.com/in/kartik-verma/"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 text-center">
                                        <img src={profile} style={{width: "164px", height: "164px", borderRadius: '50%', objectFit: 'cover', border: "3px solid white"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-0 col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}