import React from 'react'
import './helpers.css'

export let baseAddress = 'https://tranquil-mountain-69690.herokuapp.com'
// export let baseAddress = 'http://localhost:3000'

let randomInt = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1) + a)
}

let randomColor = () => {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
}

export let monthsInWords = [
    'Jan', 'Feb', "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

export let getAsLink = (str) => {
    return str.split(' ').join('-')
}

export let Dot = () => {
    return (
        <span className="pl-2 pr-2"><i className="fas fa-circle align-middle" style={{fontSize: '4px'}}></i></span>
    )
}

export let getDateInFormat = (date) => {
    console.log(date)
    date = new Date(parseInt(date))
    console.log("called date ...")
    console.log(date)
    return (
        `${monthsInWords[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    )
}

export let SocialIcon = ({icon, link}) => {
    return <span className="pl-2 pr-2">
                <a href={link} className="social-link">
                    <i class={icon}></i>
                </a>
            </span>
}

export let AboutText = () =>
    <div style={{fontFamily: 'Fresca', fontSize: '20px'}}>
        <p>Hi, I'm Kartik Verma. I have done my graduation in Computer Science & Engineering from National Institute of Techology, Hamirpur.</p>

        <p>I am tech enthusiast and like to read and work on new technologies. I have worked in Deep Learning, Android development and Web Development. My current interest is Front End Development.</p>

        <p>I have done some competitions on algorithms on hackerearth, spoj, hackerrank. I have also participated in machine learning competitions on kaggle and hackerearth.</p>
    </div>

export let getAuthDetails = () => {
    let user = {
        username: "",
        authToken: ""
    }

    let username = localStorage.getItem('username')
    let authToken = localStorage.getItem('authToken')
    user.username = username
    user.authToken = authToken
    console.log('get AUth Details....')
    console.log(user)
    return user
    
}


export let Loader = () => <div className="container pb-3">
    <div className="c-loader text-center mt-5 mb-2">
        <span style={{marginRight: '24px', top: "4px", position: "relative", fontFamily: "'Fresca', sans-serif", textTransform: "uppercase", letterSpacing: '2px'}}>
            Loading...
        </span>
        <span>
            <div className="c-loader-item"></div>
            <div className="c-loader-item"></div>
        </span>
    </div>
</div>
