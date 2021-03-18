/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import PropTypes from "prop-types";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Projects by Autumn</h1>
      <p>
        Hello! This is a website where I keep links to all my most interesting
        projects. As you can see, my eye for design is underdeveloped, but if
        you take a dive into my source code, you&apos;ll find that my code logic
        and organization is much better.
      </p>
      <p>
        NOTE: if you can read this, it means that Netlify tracking is set up
        wrong. bad
      </p>
      <a
        href="https://github.com/jjayeon/my-homepage"
        target="_blank"
        rel="noreferrer noopener"
      >
        source here.
      </a>
      <Card
        title="Bullet Hell JS"
        copy="A bullet hell shooter written in pure Javascript."
        liveurl="https://bullet-hell-js.netlify.app/"
        giturl="https://github.com/jjayeon/bullet-hell-js"
      />
      <Card
        title="Uncross the Lines"
        copy='A unique implementation of the "uncross the lines" puzzle game, where you can group and move around multiple dots at once.'
        liveurl="https://uncrossthelines.netlify.app/"
        giturl="https://github.com/jjayeon/uncross-the-lines"
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
  );
}

function Card(props) {
  let livelink, gitlink;

  if (props.liveurl) {
    livelink = (
      <a href={props.liveurl} target="_blank" rel="noreferrer noopener">
        Try it out
      </a>
    );
  }
  gitlink = (
    <a href={props.giturl} target="_blank" rel="noreferrer noopener">
      See source on Github
    </a>
  );

  return (
    <div className="Card">
      <h2>{props.title}</h2>
      {livelink} | {gitlink}
      <p>{props.copy}</p>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  liveurl: PropTypes.string,
  giturl: PropTypes.string,
};

export default App;
