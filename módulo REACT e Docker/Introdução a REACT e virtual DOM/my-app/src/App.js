import './App.css';
import coruja from "./assets/img/coruja.webp";


function App() {
    return (
        <div className="App">
            <h1>Aprendendo React</h1>
            <div>
                <img id="coruja"
                    src={coruja}
                    width="40%"
                    border-radius="10%"/>
                <div id="descricao">
                    <p>Por influência da mitologia grega, tanto que Atena, deusa da guerra e da sabedoria, tinha uma coruja como mascote. Os gregos consideravam a noite como o momento do pensamento filosófico e da revelação intelectual e a coruja, por ser uma ave noturna, acabou representando essa busca pelo saber.</p>
                </div>
            </div>
        </div>
    );
}

export default App;
