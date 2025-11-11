import React, {useState} from "react";
import './Signup.css';

function Signup(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [gender, setGender]=useState("여성");
    const [interests, setInterests]=useState("");

    const handleSubmit = (event ) => {
        alert(`이름: ${name}
               이메일: ${email}
               비밀번호: ${password}
               성별: ${gender}
               관심사: ${interests}
           `)
    }


    return(
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    이름:
                    <input type={"text"} value={name} onChange={(event) => {
                        setName(event.target.value);
                    }} required/>
                </label>
                <br/>
                <label>
                    이메일:
                    <input type={"email"} value={email} onChange={(event) => {
                        setEmail(event.target.value);
                    }} required/>
                </label>
                <br/>
                <label>
                    비밀번호:
                    <input type={"password"} value={password} onChange={(event) => {
                        setPassword(event.target.value);
                    }} required/>
                </label>
                <br/>
                <label>
                    성별
                    <select value={gender} onChange={(event) => {
                        setGender(event.target.value);
                    }}>
                        <option value={"남성"}>남성</option>
                        <option value={"여성"}>여성</option>
                        <option value={"기타"}>기타</option>
                    </select>
                </label>
                <br/>
                <label>
                    관심사:
                    <textarea value={interests} onChange={(event) => {
                        setInterests(event.target.value)
                    }} placeholder={"관심사를 자세히 입력해주세요."}/>
                </label>
                <br/>
                <button type={"submit"}>확인</button>
            </form>
        </div>
    );
}
export default Signup;