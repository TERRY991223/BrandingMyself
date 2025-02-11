import '../style/default.scss';
import {useState} from 'react';
import ProjectLabel from '../component/projectLabel.jsx';

function Home() {
    console.log("Home 렌더링됨");  
      const [isHovered1, setIsHovered1] = useState(false);
      const [isHovered2, setIsHovered2] = useState(false);
    
    return(
        <>
            <main style={{position:"relative"}}>
                <div className="main-wrap">
                    {/* main */}
                    <section className="main-main">
                    <div className="mainImg-txt">
                        <p>THIS IS <span className="italic">TERRY !</span></p>
                        <div className="mt30 myImg1">
                        <img src="/public/images/mainImg1.png" alt="myImg1" style={{width:"480px"}}></img>
                        </div>
                        <div className="myImg2">
                        <img src="/public/images/mainImg2.png" alt="myImg2"></img>
                        </div>
                        <div className="myImg3">
                        <img src="/public/images/mainImg3.png" alt="myImg2"></img>
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
                            <a href="#">
                                <img 
                                src="/public/images/projectImg1.png"
                                alt="projectImg1"
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)} 
                                >
                                </img>
                                <div className={`projects-txt ${isHovered1 ? 'show' : ''}`}>
                                <h2 className="mb10">Edulime | Mobile</h2>
                                <p>학생 관리 시스템을 e-러닝 시스템과 접목하여</p>
                                <p>대학교 모바일 어플리케이션을 제작하였습니다</p>
                                </div>
                                </a>
                                <div className="project-info">
                                <div className="project-desc italic">
                                    <p>에듀라임 모바일 앱</p>
                                    <p>UIUX | 퍼블리싱</p>
                                </div>
                                <div className="project-label-wrap">
                                    <ProjectLabel type="REACT" />
                                    <ProjectLabel type="SCSS" />
                                    <ProjectLabel type="JAVASCRIPT" />
                                </div>
                                </div>
                            </li>
                            <li className="projects">
                            <a href="#">
                                <img 
                                src="/public/images/projectImg2.png" 
                                alt="projectImg2"
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                                >
                                </img>
                                <div className={`projects-txt ${isHovered2 ? 'show' : ''}`}>
                                <h2 className="mb10">SAMSUNG E&A | Web</h2>
                                <p>SAMSUNG E&A의 사내 프로그램을</p>
                                <p>사용자 경험과 가독성에 맞춰</p>
                                <p>퍼블리싱 및 유지보수 작업에 참여하였습니다</p>
                                </div>
                            </a>
                            <div className="project-info">
                                <div className="project-desc italic">
                                <p>SAMSUNG E&A</p>
                                <p>Web | 사내 프로그램 퍼블리싱 </p>
                                </div>
                                <div className="project-label-wrap">
                                <ProjectLabel type="REACT" />
                                <ProjectLabel type="SCSS" />
                                <ProjectLabel type="TYPESCRIPT" />
                                <ProjectLabel type="JAVASCRIPT" />
                                </div>
                            </div>
                            </li>
                        </ul>
                        <ul>
                        <li className="projects">
                            <a href="#">
                                <img 
                                src="/public/images/projectImg3.png" 
                                alt="projectImg3"
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                                >
                                </img>
                                <div className={`projects-txt ${isHovered2 ? 'show' : ''}`}>
                                <h2 className="mb10">LUSH | Web Clone</h2>
                                <p>브랜드 LUSH의 사이트를</p>
                                <p>Html과 css를 사용해 순수 코딩으로 클론하였습니다</p>
                                </div>
                            </a>
                            <div className="project-info">
                                <div className="project-desc italic">
                                <p>LUSH</p>
                                <p>Web | 클론 사이트 </p>
                                </div>
                                <div className="project-label-wrap">
                                <ProjectLabel type="HTML" />
                                <ProjectLabel type="CSS" />
                                <ProjectLabel type="FIGMA" />
                                </div>
                            </div>
                            </li>
                            <li className="projects">
                            <a href="#">
                                <img 
                                src="/public/images/projectImg1.png"
                                alt="projectImg1"
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)} 
                                >
                                </img>
                                <div className={`projects-txt ${isHovered1 ? 'show' : ''}`}>
                                <h2 className="mb10">Edulime | Mobile</h2>
                                <p>학생 관리 시스템을 e-러닝 시스템과 접목하여</p>
                                <p>대학교 모바일 어플리케이션을 제작하였습니다</p>
                                </div>
                                </a>
                                <div className="project-info">
                                <div className="project-desc italic">
                                    <p>에듀라임 모바일 앱</p>
                                    <p>UIUX | 퍼블리싱</p>
                                </div>
                                <div className="project-label-wrap">
                                    <ProjectLabel type="REACT" />
                                    <ProjectLabel type="SCSS" />
                                    <ProjectLabel type="JAVASCRIPT" />
                                </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home;