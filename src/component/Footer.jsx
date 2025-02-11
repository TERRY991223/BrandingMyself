function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-info">
                    <span>CONTACT</span>
                    <p> 함께 할 퍼블리셔를 찾고 계신가요?</p>
                    {/* <p>아래의 주소로 메일을 보내주세요</p> */}
                    <p className="email">chfhrl99@gmail.com</p>
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