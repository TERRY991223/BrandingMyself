import { useState, useEffect } from 'react';

function Footer() {

    const text = "SEND ME!"; // 타이핑할 문구
    const [index, setIndex] = useState(0); // 타이핑 진행 상태
    const [typedText, setTypedText] = useState(''); // 타이핑된 텍스트
    const speed = 100; // 타이핑 속도 (밀리초 단위)
  

    useEffect(() => {
        const timer = setTimeout(() => {
          if (index < text.length) {
            setTypedText((prev) => prev + text.charAt(index)); // 새로운 글자를 추가
            setIndex(index + 1); // 인덱스 증가
          } else {
            setTimeout(() => {
              setTypedText(''); // 타이핑된 텍스트 지우기
              setIndex(0); // 인덱스 초기화
            }, 500); // 텍스트 끝났을 때 잠시 기다렸다가 초기화
          }
        }, speed);
    
        return () => clearTimeout(timer); // cleanup: timer 리셋
      }, [index, text, speed]); 

    return (
        <>
            <footer className="main-footer">
                <div className="footer-info">
                    <span>CONTACT</span>
                    <p> 함께 할 퍼블리셔를 찾고 계신가요?</p>
                    {/* <p>아래의 주소로 메일을 보내주세요</p> */}
                    <div className="email">
                        <a href="mailto:chfhrl99@gmail.com">
                            chfhrl99@gmail.com
                        </a>
                    </div>
                    <div className="email-chip">
                        <p>{typedText}
                            <span id="cursor"></span>
                        </p>
                    </div>
                </div>
                <div className="flex justifyBetween" style={{width:"100%", color: "var(--font-gr)"}} >
                    <p>&copy; thisisTerry.com</p>
                    <div className="flex gap50" >
                    <p>RESUME</p>
                    <p>CALL</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;