import React, {useState} from "react";
import './NamesForm.css';

function NamesForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "email":
                setEmail(target.value);
                break;
            case "address":
                setAddress(target.value);
                break;
        }
    }

    const handleSumbit = (event) => {
        alert(`입력된 성명: ${name} 입력된 내용: ${email} 입력된 주소: ${address}`);
    }


    return(
        <form onSubmit={handleSumbit}>
            <label>
                이름: <input type={"text"} id={"name"} onChange={handleChange} />
            </label>
            <label>
                이메일: <input type={"email"} id={"email"} onChange={handleChange} />
            </label>
            <label>
                주소:
                <textarea id={"address"} onChange={handleChange} rows={"5"} cols={"20"}/>
            </label>
            <button>완료</button>
        </form>
    );
}

export default NamesForm;