import React, {useState} from "react";
const FormTest = (props) => {
    const [state, setState] = useState({id:'',name:''});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onCreate(state);
        setState({id:'',name:''});
    }


    return (
        <form onSubmit={handleSubmit}>
            <input placeholder={'아이디'} value={state.id} onChange={handleChange} name={'id'}/>
            <input placeholder={'이름'} value={state.name} onChange={handleChange} name={'name'}/>
            <button type="submit">누르세요</button>
        </form>
    )
}

export default FormTest;