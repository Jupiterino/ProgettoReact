import './Ciccio.css';
import {useState} from 'react';

function Ciccio({nome, eta}) {


    const [contatore, setContatore] = useState(0);
    
    function gestisciClick(){
        setContatore(contatore +1);
    }
  return (
    <div className="rosso">    
        Ciao a tutti sono {nome} {eta}
        <button onClick={gestisciClick}>{contatore}</button>
    </div>
  );
}

export default Ciccio;
