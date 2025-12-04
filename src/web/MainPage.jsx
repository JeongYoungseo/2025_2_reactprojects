import React from "react";
import "./style.css";

function MainPage({ goSignup }) {
    return (
        <div>
            <header>
                <div className="logo">
                    <a href="MainPage.jsx"><h1>Shop</h1></a>
                </div>
                <div className="right-menu">
                    <button onClick={goSignup} className="link-button">
                        <img src="/imgs/5368938.png"  alt="회원가입"  width={30}/>
                    </button>
                    <button>
                        <img src="/imgs/login.png" alt="로그인" width={30}/>
                    </button>
                    <button>
                        <img src="/imgs/cart.png" alt="장바구니" width={30}/>
                    </button>
                    <button>
                        <img src="/imgs/usericon.png" alt="마이페이지" width={30} />
                    </button>
                </div>
            </header>
            <nav>
                <ul>
                    <li>
                        <a href="#">Outer</a>
                        <ul>
                            <li><a href="#">패딩/코트</a></li>
                            <li><a href="#">가디건/자켓</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">Top</a>
                        <ul>
                            <li><a href="#">티셔츠</a></li>
                            <li><a href="#">셔츠/블라우스</a></li>
                            <li><a href="#">니트/맨투맨/후드티</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">Bottom</a>
                        <ul>
                            <li><a href="#">롱팬츠</a></li>
                            <li><a href="#">숏팬츠</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">Skirt/Dress</a>
                        <ul>
                            <li><a href="#">스커트</a></li>
                            <li><a href="#">원피스</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Accessories</a></li>

                    <li>
                        <a href="#">Community</a>
                        <ul>
                            <li><a href="#">Q&A</a></li>
                            <li><a href="#">공지사항</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="top-banner">
                <img src="/imgs/outer1.png" alt="banner1" />
                <img src="/imgs/bottom.png" alt="banner2" />
                <img src="/imgs/top1.png" alt="banner3" />
            </div>
            <div className="section-title">NEW</div>
            <div className="product-grid">
                <div className="product">
                    <img src="/imgs/outer1.png" alt="product1" />
                    <p>가디건</p>
                </div>
                <div className="product">
                    <img src="/imgs/outer2.png" alt="product2" />
                    <p>트위드</p>
                </div>
                <div className="product">
                    <img src="/imgs/skirt.png" alt="product3" />
                    <p>미니스커트</p>
                </div>
            </div>
            <div className="section-title">BEST</div>
            <div className="product-grid">
                <div className="product">
                    <img src="/imgs/top1.png" alt="best1" />
                    <p>셔츠</p>
                </div>
                <div className="product">
                    <img src="/imgs/top2.png" alt="best2" />
                    <p>셔츠</p>
                </div>
                <div className="product">
                    <img src="/imgs/bottom.png" alt="best3" />
                    <p>데님</p>
                </div>
            </div>
            <footer
                style={{
                    background: "whitesmoke",
                    padding: "20px",
                    marginTop: "450px",
                    textAlign: "center",
                }}
            >
                <p><strong>Fashion Shop</strong> | 대표: 홍길동</p>
                <p>서울특별시 강남구 역삼동 123-4 | 고객센터: 02-1234-5678</p>
                <p>&copy; 2025 Fashion Shop</p>
            </footer>
        </div>
    );
}

export default MainPage;