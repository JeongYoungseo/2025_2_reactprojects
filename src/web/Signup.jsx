import React, { useState } from "react";
import "./style.css";

function Signup() {
    const [form, setForm] = useState({
        name: "",
        id: "",
        pw: "",
        pwCheck: "",
        address: "",
        phone: "",
        email: ""
    });

    const isPwMatch = form.pw === form.pwCheck;

    const [focused, setFocused] = useState("");

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        setForm((prevForm) => {
            const update = {
                name: prevForm.name,
                id: prevForm.id,
                pw: prevForm.pw,
                pwCheck: prevForm.pwCheck,
                address: prevForm.address,
                phone: prevForm.phone,
                email: prevForm.email
            };

            update[name] = value;
            return update;
        });
    };

    const handleSumbit = (event) => {
        event.preventDefault();
        if(
            form.name === "" ||
            form.id === "" ||
            form.pw === "" ||
            form.pwCheck === "" ||
            form.address === "" ||
            form.phone === "" ||
            form.email === ""
        ){
            alert("모든 항목을 입력하세요");
            return;
        }
        if(form.pw !==form.pwCheck) {
            alert("비밀번호가 일치하지 않습니다.")
            return;
        }
        alert("회원가입 완료되었습니다!")
    };

    return(
        <div>
            <header>
                <div className="logo">
                    <a href="MainPage.jsx"><h1>Shop</h1></a>
                </div>
                <div className="right-menu">
                    <button>
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

            <main>
                <h2 style={{ textAlign: "center", margin: "20px auto" }}>Join</h2>

                <div className="signup">
                    <form className="signup-box" onSubmit={handleSumbit}>
                        <label>이름:</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused("")}
                            style={{ backgroundColor: focused === "name" ? "#eef" : "" }}
                        />
                        <br />
                        <label>아이디:</label>
                        <input
                            type="text"
                            name="id"
                            value={form.id}
                            onChange={handleChange}
                            onFocus={() => setFocused("id")}
                            onBlur={() => setFocused("")}
                            style={{ backgroundColor: focused === "id" ? "#eef" : "" }}
                        />
                        <br />
                        <label>비밀번호:</label>
                        <input
                            type="password"
                            name="pw"
                            value={form.pw}
                            onChange={handleChange}
                            onFocus={() => setFocused("pw")}
                            onBlur={() => setFocused("")}
                            style={{ backgroundColor: focused === "pw" ? "#eef" : "" }}
                        />
                        <br />
                        <label>비밀번호 확인:</label>
                        <input
                            type="password"
                            name="pwCheck"
                            value={form.pwCheck}
                            onChange={handleChange}
                            onFocus={() => setFocused("pwCheck")}
                            onBlur={() => setFocused("")}
                            style={{ backgroundColor: focused === "pwCheck" ? "#eef" : "" }}
                        />
                        {!isPwMatch && form.pwCheck && (
                            <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
                        )}
                        <br />
                        <label>주소:</label>
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            onFocus={() => setFocused("address")}
                            onBlur={() => setFocused("")}
                            style={{ backgroundColor: focused === "address" ? "#eef" : "" }}
                        />
                        <br />
                        <label>연락처:</label>
                        <input
                            type="number"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            onFocus={() => setFocused("phone")}
                            onBlur={() => setFocused("")}
                            style={{ backgroundColor: focused === "phone" ? "#eef" : "" }}
                        />
                        <br />
                        <label>이메일:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused("")}
                            style={{ backgroundColor: focused === "email" ? "#eef" : "" }}
                        />
                        <br />
                        <input
                            type="submit"
                            value="회원가입"
                            style={{marginTop: "20px", fontSize: "18px"}}/>

                        <p>이미 회원이신가요? <a href="MainPage.jsx">로그인</a></p>
                    </form>
                </div>
            </main>
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
export default Signup;