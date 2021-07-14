import { useEffect, useState } from "react"
import style from "../styles/despertador.module.css"

function Despertador() {

    var data = new Date()
    const [hour, setHour] = useState(data.getHours())
    const [minute,setMinute] = useState(data.getMinutes())
    const [segundo, setSegundo] = useState(data.getSeconds())

    const [horaAlarme, setHoraAlarme] = useState(null) 
    const [minAlarme, setMinAlarme] = useState(null)
   

    const [isActive,setIsActive] = useState(false)

    
    useEffect(()=>{
        setTimeout(()=>{
            data = new Date()
            setHour(data.getHours())
            setMinute(data.getMinutes())
            setSegundo(data.getSeconds())
        },1000)
    },[segundo])

    useEffect(() =>{
        if (horaAlarme == hour && minute == minAlarme) {
            document.getElementById('audio').play()
        }
    },[segundo])


   function ativarAlarme(){
        setHoraAlarme(parseInt(document.getElementById('hora').value))
        setMinAlarme(parseInt(document.getElementById('minuto').value))
        document.getElementById('mensagem').style = "opacity:100;"
        setIsActive(!isActive)
    } 


    function desativarAlarme() {
        setHoraAlarme(null)
        setMinAlarme(null)
        document.getElementById('audio').pause()
        setIsActive(!isActive)
        document.getElementById('mensagem').style = "opacity:0;"        
    }


    function more(type, max) {
        var val = parseInt(document.getElementById(type).value);
        document.getElementById(type).value = val < max ? val + 1 : val = 0;
    }


    function less(type, max) {
        var val = parseInt(document.getElementById(type).value);
        document.getElementById(type).value = val > 0 ? val -1 : val = max;
    }

    return(

        <div id="despertador" className={style.despertador}>
            <audio hidden id="audio" loop="loop">
                <source src="toque.mp3" type="audio/mp3"></source>
            </audio>
            <div>
                <label htmlFor="hora" >Horas</label><br></br>

                <button onClick={() => less('hora', 23)} id='less'>
                    <img src="less.png" alt="<="></img>
                </button>
                
                <input type="number" id="hora"></input>
                
                <button onClick={() => more('hora', 23)} id='more'>
                    <img src="more.png" alt="=>"></img>
                </button>
            
            </div>

            <div>
                <label htmlFor="minuto">Minutos</label><br></br>

                <button onClick={() => less('minuto', 59)} id='less'>
                    <img src="less.png" alt="<="></img>
                </button>

                <input type="number" id="minuto"></input>
                
                <button onClick={() => more('minuto', 59)} id='more'>
                    <img src="more.png" alt="=>"></img>
                </button>

            </div>

            {!isActive?
            <button onClick={() => ativarAlarme()} className={style.btnAtivo}>Ativar Alarme</button>
            :
            <button onClick={() => desativarAlarme()} className={style.btnInativo}>Desativar Alarme</button>}
            <p id='mensagem'>Seu alarme tocará às <span>{horaAlarme < 10? '0' + horaAlarme : horaAlarme} : {minAlarme < 10? '0' + minAlarme : minAlarme}</span></p>
        </div>
    )
}
export default Despertador