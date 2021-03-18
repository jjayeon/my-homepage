import "./App.css";

let app = document.getElementById("app");

function makeLink(title, copy, liveurl, giturl) {
  let out = document.createElement("div");

  let livelink = document.createElement("a");

  livelink.href = liveurl;
  livelink.target = "_blank";
  livelink.rel = "noopener noreferrer";
  livelink.innerHTML = title;

  let copyp = document.createElement("p");
  copyp.innerHTML = copy;

  let gitlink = document.createElement("a");
  gitlink.href = giturl;
  gitlink.target = "_blank";
  gitlink.rel = "noopener noreferrer";
  gitlink.innerHTML = "See source on Github";

  let hr = document.createElement("hr");

  out.appendChild(livelink);
  out.appendChild(copyp);
  out.appendChild(gitlink);
  out.appendChild(hr);

  return out;
}

app.appendChild(
  makeLink(
    "Bullet Hell JS",
    "game",
    "https://bullet-hell-js.netlify.app/",
    "https://github.com/jjayeon/bullet-hell-js"
  )
);
