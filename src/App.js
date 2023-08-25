import './App.css';
import AjaxTest from "./AjaxTest";
import {useState} from "react";
import Clock from "./Clock";
import TFCheck from "./TFCheck";
import FormTest from "./FormTest";

function App() {
    const [showAjaxTest, setShowAjaxTest] = useState(false);
    const [inputData, setInputData] = useState('');
    const [count, setCount] = useState(0);

    const toggleAjaxTest = () => {
        setShowAjaxTest(prevShowAjaxTest => !prevShowAjaxTest);
        setCount(count + 1);
    }

    const handleCreate = (data) => {
        setInputData(data);
    }

  return (
    <div className="App">
        <button onClick={toggleAjaxTest}>주차장 데이터 보기</button>
        <table>
            <tbody>
                <tr>
                    {showAjaxTest && <AjaxTest />}
                </tr>
            </tbody>
        </table>

        <div>{count}번 클릭하셨습니다</div>

        <Clock/>
        <TFCheck unreadMessages={['asd']}/>
        <FormTest onCreate={handleCreate}/>
        {JSON.stringify(inputData)}
    </div>
  );
}

export default App;
