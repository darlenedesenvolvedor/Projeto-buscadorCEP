import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch(){
    // 01310930/json/

    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }

    try{
      const response = await api.get('${input}/json');
    console.log(response.data)

    }catch{
      alert("Ops erro ao buscar");
    }
  }

  return (
    <div className="container">
      <h1 className= "title">Buscador CEP</h1>

      <div className="containerInput">
         <input
         type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button> 
        </div>

        <main className="main">
          <h2> CEP 62960000</h2>

          <span>Rua St Baixa do Juazeiro</span>
          <span>Complemento: sitio</span>
          <span>Zona Rural</span>
          <span>Tabuleiro do Norte - CE</span>

        </main>
    </div>
  );
}

export default App;
