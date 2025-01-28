import "../style/default.scss";


function Header() {
    return (
        <>
            <header>
                {/* <div className="cursor"></div> */}
                <div className="header-wrap flex px16" style={{ position: "fixed", top: 0 }}>
                    <div className="flex alignCenter justifyBetween" style={{ width: "100%" }}>
                        <img className="w80" src="/public/images/header-logo.svg" alt="html"></img>
                        <button className="flex alignCenter justifyCenter w45 h45 bgc-main-col" style={{ borderRadius: "100px" }}>
                            <ul className="flexColumn gap5">
                                <li className="flex w25 h5 bgc-main-yellow" style={{ borderRadius: "10px" }}></li>
                                <li className="flex w25 h5 bgc-main-yellow" style={{ borderRadius: "10px" }}></li>
                                <li className="flex w25 h5 bgc-main-yellow" style={{ borderRadius: "10px" }}></li>
                            </ul>
                        </button>
                        <navigator className="header-btn-wrap">
                            <ul className="">

                            </ul>
                        </navigator>
                    </div>
                </div >
            </header>
        </>
    )
}

export default Header;