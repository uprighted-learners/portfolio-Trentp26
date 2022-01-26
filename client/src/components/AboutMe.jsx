//Imports hooks from react
import React from "react";
import "./Style.scss";
import "./styles/AboutMe.scss";

export default function AboutMe() {
  return (
    //wrapping div
    <div className="aboutMe">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="topSVG"
      >
        <path
          fill="orange"
          fill-opacity="1"
          d="M0,0L48,10.7C96,21,192,43,288,48C384,53,480,43,576,69.3C672,96,768,160,864,176C960,192,1056,160,1152,176C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="textBox">
        <h1>About me!</h1>
        {/* paragraph about me  */}

        <p>
          I am a native Vermonter, born in Burltion VT and have been here ever
          since. In 2019 went to Castleton University for business management, i
          liked it but covid hit and sent everyone home. The following year i
          decided to take it of and explore my options. In my exploring i came
          across Burlington code academy. It sounded like a good option. I had
          always been working with computers and it sounded like a good focused
          carer path, out of this course. i took the preDev class and loved it!
          So here i am learning full stack developer in the web design corse!
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottomSVG"
      >
        <path
          fill="orange"
          fill-opacity="1"
          d="M0,256L60,218.7C120,181,240,107,360,101.3C480,96,600,160,720,154.7C840,149,960,75,1080,58.7C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
