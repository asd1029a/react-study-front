import React, {useEffect, useState} from "react";

function AjaxTest() {
    const [state, setState] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://172.20.14.53:8888/disabled");
            const data = await res.json();
            return data;
        }
        fetchData().then(d => {
            console.log(d);
            setState(d)
        })
            .catch(e => {
                setState(e);
            });
    }, []);

    return (
        <>
            {state.slice(0, 1).map((m,index) => {
                    return <React.Fragment key={index}>
                        <td>주차장 이름 : <span>{m.name}</span></td>
                        <td>주소 : <span>{m.address}</span></td>
                        <td>주차장 리스트 : <span>{m.disabledParkingDeviceDtos.slice(0, 3).map((d, ind) => {
                            return <React.Fragment key={ind}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>디바이스 아이디 : <span>{d.deviceId}</span></td>
                                            <td>디바이스 넘버 : <span>{d.mgmtNum}</span></td>
                                            <td>주차장 층 수 : <span>{d.floor}층</span></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </React.Fragment>
                        })}</span></td>
                    </React.Fragment>
            })}
        </>
    );
}

export default AjaxTest;