import React from "react";
import PropTypes from "prop-types";

import "./App.css";

import bulletimgurl from "./assets/bullet hell js.png";
import uncrossimgurl from "./assets/uncross the lines.png";
import koreanimgurl from "./assets/korean number practice.png";

function App() {
    return (
        <div className="App">
            <h1>Projects by Autumn</h1>
            <p id="maincopy">
                Hello! This is a website where I keep links to all my most
                interesting projects. As you can see, my eye for design is
                underdeveloped, but if you take a dive into my source code,
                you&apos;ll find that my code logic and organization is much
                better.
            </p>
            <a
                href="https://github.com/jjayeon/my-homepage"
                target="_blank"
                rel="noreferrer noopener"
            >
                See source on Github
            </a>
            <div className="Cards">
                <Card
                    title="Bullet Hell JS"
                    copy="A bullet hell shooter written in pure Javascript."
                    img={bulletimgurl}
                    liveurl="https://bullet-hell-js.netlify.app/"
                    giturl="https://github.com/jjayeon/bullet-hell-js"
                />
                <Card
                    title="Uncross the Lines"
                    copy='A unique implementation of the "uncross the lines" puzzle game, where you can group and move around multiple dots at once.'
                    img={uncrossimgurl}
                    liveurl="https://uncrossthelines.netlify.app/"
                    giturl="https://github.com/jjayeon/uncross-the-lines"
                />
                <Card
                    title="Korean Number Practice"
                    copy="An app for practicing reading Korean numbers quickly and adding them together."
                    img={koreanimgurl}
                    liveurl="https://korean-number-practice.netlify.app"
                    giturl="https://github.com/jjayeon/korean-number-practice-2"
                />
                <Card
                    title="Input.js"
                    copy="A simple Javascript library for handling mouse and keyboard input in a granular, user-agnostic way."
                    giturl="https://github.com/jjayeon/inputjs"
                />
                <Card
                    title="Static Site Generator"
                    copy="A simple static site generator, good for rendering plain text with simple CSS backgrounds."
                    giturl="https://github.com/jjayeon/static-site-generator"
                />
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className="Card">
            <h2>{props.title}</h2>
            {props.img && (
                <a
                    href={props.liveurl}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={props.img} alt="imagine picture here" />
                </a>
            )}
            <p>
                {props.liveurl && (
                    <a
                        href={props.liveurl}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Try it out
                    </a>
                )}
                {props.liveurl && " | "}
                {props.giturl && (
                    <a
                        href={props.giturl}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        See source on Github
                    </a>
                )}
            </p>
            <p>{props.copy}</p>
        </div>
    );
}
Card.propTypes = {
    title: PropTypes.string,
    copy: PropTypes.string,
    img: PropTypes.string,
    liveurl: PropTypes.string,
    giturl: PropTypes.string,
};

export default App;
