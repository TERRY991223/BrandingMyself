// import './style/default.scss';
// import 'animate.css'
// import { useState } from 'react';
// // import { cursor } from './scripts/cursor';

// function App() {

//   // useEffect(() => {
//   //   cursor();
//   // }, []);

//   const [isHovered1, setIsHovered1] = useState(false);
//   const [isHovered2, setIsHovered2] = useState(false);
//   const [isHovered3, setIsHovered3] = useState(false);
//   const [isHovered4, setIsHovered4] = useState(false);
//   const [isHovered5, setIsHovered5] = useState(false);
//   const [isHovered6, setIsHovered6] = useState(false);

//   return (
//     <>
//       <div className="main-wrap">
//         <div className="main-main">
//           <div className="main-txt">
//             <h1 className="animate__animated animate__fadeInRight">Branding</h1>
//             <h2 className="animate__animated animate__fadeInRight txtand size120 fw-700" style={{ lineHeight: "100px", animationDelay: "0.1s" }}>&</h2>
//             <h1 className="animate__animated animate__fadeInLeft " style={{ animationDelay: "0.2s" }}>Reinventing</h1>
//             <h1 className="animate__animated animate__fadeInRight " style={{ animationDelay: "0.4s" }}>Myself</h1>
//           </div>
//           <div className="flexColumn alignCenter justifyCenter">
//             <div className="label mainL animate__animated animate__bounce animate__infinite"
//               style={{
//                 animationDuration: "2s",
//                 animationIterationCount: "infinite",
//                 animationTimingFunction: "ease-in-out",
//               }}>
//               <p className="size20">Scroll</p>
//             </div>
//             <ul className="flexColumn gap10 mt10">
//               <li className="scroll-dot"></li>
//               <li className="scroll-dot"></li>
//               <li className="scroll-dot"></li>
//             </ul>
//           </div>
//         </div>
//         <div className="main-about">
//           <div className="about-txt">
//             <p>ABOUT ME</p>
//           </div>
//           <div className="flex mx50 mt100 alignCenter justifyCenter gap180">
//             <div className="about-img">
//               <image>

//               </image>
//             </div>
//             <div className="about-info1">
//               <div className="about-info-txt">
//                 <p>NAME</p>
//                 <p>신혜수</p>
//               </div>
//               <div className="about-info-txt">
//                 <p>BIRTH</p>
//                 <p>1999.12.23</p>
//               </div>
//               <div className="about-info-txt">
//                 <p>PHONE</p>
//                 <p>010.9941.0082</p>
//               </div>
//               <div className="about-info-txt">
//                 <p>EMAIL</p>
//                 <p>chfhrl@naver.com</p>
//               </div>
//             </div>
//           </div>
//           <div>

//           </div>
//         </div>
//         <div className="main-skill">
//           <div className="skill-txt">
//             <p>SKILLS</p>
//           </div>
//           <div className="">
//             <div className="skill-grid">
//               <ul>
//                 <li className={`flexColumn line ${isHovered1 ? "active" : ""}`}
//                   onMouseEnter={() => setIsHovered1(true)}  // 마우스가 들어올 때 상태 변경
//                   onMouseLeave={() => setIsHovered1(false)} >
//                   <p>HTML</p>
//                   <div className="grid-img">
//                     <img src="/public/images/html.svg" alt="html"></img>
//                   </div>
//                   <div className="displaynone">
//                     <p>탄탄한 html을 기반으로 </p>
//                     <p>웹표준에 맞춘 웹사이트를 제작합니다</p>
//                   </div>
//                 </li>
//                 <li className={`flexColumn line ${isHovered2 ? "active" : ""}`}
//                   onMouseEnter={() => setIsHovered2(true)}  // 마우스가 들어올 때 상태 변경
//                   onMouseLeave={() => setIsHovered2(false)} >
//                   <p>CSS</p>
//                   <div className="grid-img">
//                     <img src="/public/images/css.svg" alt="css"></img>
//                   </div>
//                   <div className="displaynone">
//                     <p>탄탄한 html을 기반으로 </p>
//                     <p>웹표준에 맞춘 웹사이트를 제작합니다</p>
//                   </div>
//                 </li>
//                 <li className={`flexColumn line ${isHovered3 ? "active" : ""}`}
//                   onMouseEnter={() => setIsHovered3(true)}  // 마우스가 들어올 때 상태 변경
//                   onMouseLeave={() => setIsHovered3(false)} >
//                   <p>JAVASCRIPT</p>
//                   <div className="grid-img">
//                     <img src="/public/images/javascript.svg" alt="html"></img>
//                   </div>
//                   <div className="displaynone">
//                     <p>탄탄한 html을 기반으로 </p>
//                     <p>웹표준에 맞춘 웹사이트를 제작합니다</p>
//                   </div>
//                 </li>
//               </ul>
//               <ul>
//                 <li className={`flexColumn line ${isHovered4 ? "active" : ""}`}
//                   onMouseEnter={() => setIsHovered4(true)}  // 마우스가 들어올 때 상태 변경
//                   onMouseLeave={() => setIsHovered4(false)} >
//                   <p>VUE</p>
//                   <div className="grid-img">
//                     <img src="/public/images/vue.svg" alt="html"></img>
//                   </div>
//                   <div className="displaynone">
//                     <p>탄탄한 html을 기반으로 </p>
//                     <p>웹표준에 맞춘 웹사이트를 제작합니다</p>
//                   </div>
//                 </li>
//                 <li className={`flexColumn line ${isHovered5 ? "active" : ""}`}
//                   onMouseEnter={() => setIsHovered5(true)}  // 마우스가 들어올 때 상태 변경
//                   onMouseLeave={() => setIsHovered5(false)} >
//                   <p>REACT</p>
//                   <div className="grid-img">
//                     <img src="/public/images/react.svg" alt="html"></img>
//                   </div>
//                   <div className="displaynone">
//                     <p>탄탄한 html을 기반으로 </p>
//                     <p>웹표준에 맞춘 웹사이트를 제작합니다</p>
//                   </div>
//                 </li>
//                 <li className={`flexColumn line ${isHovered6 ? "active" : ""}`}
//                   onMouseEnter={() => setIsHovered6(true)}  // 마우스가 들어올 때 상태 변경
//                   onMouseLeave={() => setIsHovered6(false)} >
//                   <p>FIGMA</p>
//                   <div className="grid-img">
//                     <img src="/public/images/figma.svg" alt="html"></img>
//                   </div>

//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


// export default App
import './style/default.scss';
function App (){
  return(
    <>
    <div className="main-wrap">
      {/* main */}
      <section className="main-main">
        <div className="mainImg-txt">
          <p>THIS IS <span className="italic">TERRY !</span></p>
          <div className="mt30 myImg1">
            <img src="/public/images/mainImg1.jpg" alt="myImg1" style={{width:"480px"}}></img>
          </div>
          <div className="myImg2">
            <img src="/public/images/mainImg2.png" alt="myImg2"></img>
          </div>
        </div>
      </section>
      {/* about */}
      <section className="main-about">
        <p>About Me</p>
        <p>부드러움 속 조화를 만드는 웹 퍼블리셔, 신혜수입니다
          <br/>
          깔끔함과 기본을 바탕으로 조화로운 웹 경험을 추구합니다
          <br/>
          부드러운 감성 속에서도 섬세한 디테일의 UI/UX를 고민하며,
          <br/>
          사용자가 편안하게 머물 수 있는 웹 사이트를 제작합니다. 
        </p>
      </section>
      {/* skills */}
      <div className="main-skills">
        <div className="skills-group">
            <img src="/public/images/jstHtmlCss.png" alt="skillImg1"/>
            <img src="/public/images/figma.svg" alt="skillImg2"/>
            <img src="/public/images/vscode.svg" alt="skillImg6"/>
            <img src="/public/images/typescript.svg" alt="skillImg5"/>
            <img src="/public/images/vue.svg" alt="skillImg3"/>
            <img src="/public/images/react.svg" alt="skillImg4"/>
            {/* <img src="/public/images/main-arrow1.svg" alt="arrow1"/>
            <img src="/public/images/main-arrow2.svg" alt="arrow2"/>
            <img src="/public/images/main-circle.svg" alt="circle"/> */}
        </div>
        <div className="skills-group">
            <img src="/public/images/jstHtmlCss.png" alt="skillImg1"/>
            <img src="/public/images/figma.svg" alt="skillImg2"/>
            <img src="/public/images/vscode.svg" alt="skillImg6"/>
            <img src="/public/images/typescript.svg" alt="skillImg5"/>
            <img src="/public/images/vue.svg" alt="skillImg3"/>
            <img src="/public/images/react.svg" alt="skillImg4"/>
        </div>
      </div>
      {/* project */}
      <section className="main-project">
        <div className="project-wrap">
          <p>Project</p>
          <div className="project-group">
            <ul>
              <li className="projects">
                <a>
                  <img src="/public/images/projectImg1.png" alt="projectImg1"></img>
                </a>
              </li>
              <li className="projects"></li>
              <li className="projects"></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App;