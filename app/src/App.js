import Ciccio from "./Ciccio.js";
import "./App.css";
import { useState, useEffect } from "react"; //PERMETTE DI CARICARE LE CHIAMATE ALL'AVVIO DELLA PAGINA

function App() {
    useEffect(() => {
        caricaAlunni();
    });

    const [alunni, setAlunni] = useState([]); //VARIABILE DI STATO!


    //METODO PER FARE CHIAMATA CHE ASPETTA IL RISULTATO (va nella var Response)

    async function caricaAlunni() {
        const a = await fetch("http://localhost:8080/alunni", {
            method: "GET",
        });

        method: "GET", setAlunni(a);
    }

    /*  //METODO CHE FA LA STESSA COSA (noioso)

  function caricaAlunniProm(){
    fetch("http://localhost:8080/alunni", {method: "GET"})
    .then(Response => Response.json()
    .then(data => {
      console.log(data);
    })
    )
  }*/
    return (
        <div className="App">
            <button onClick={caricaAlunni}> carica </button>
            {alunni.map((a) => (
                <Alunno alunno={a} />
            ))}
        </div>
    );
}

export default App;
