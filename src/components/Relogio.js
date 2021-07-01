import style from '../styles/relogio.module.css'

import { useEffect, useState } from "react";

function Relogio() {

    var data =  new Date()
    const [hora, setHora] = useState(data.getHours());
    const [minuto, setMinuto] = useState(data.getMinutes());
    const [segundo,setSegundo] = useState(data.getSeconds());
    

    
    useEffect(() => {
        setTimeout(() => {
            data =  new Date()
            setHora(data.getHours())
            setMinuto(data.getMinutes())
            setSegundo(data.getSeconds())
        },1000)
    }, [segundo]) 



    return(
        <div id='relogio' className={style.relogio}>
             <h2>{hora < 10 ? '0' + hora: hora} : {minuto<10 ? '0' + minuto: minuto} : {segundo < 10 ? '0' + segundo: segundo}</h2>
        </div>
       
    );
}

export default Relogio;