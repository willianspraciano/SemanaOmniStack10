import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>

          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28768280?s=460&u=034dd7f27928494aba7194d3c7a6a119813ca5fc&v=4" alt="Willian S. Praciano"/>
              <div className="user-info">
                <strong>Willian S. Praciano</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por programação</p>
            <a href="https://github.com/willianpraciano">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28768280?s=460&u=034dd7f27928494aba7194d3c7a6a119813ca5fc&v=4" alt="Willian S. Praciano"/>
              <div className="user-info">
                <strong>Willian S. Praciano</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por programação</p>
            <a href="https://github.com/willianpraciano">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28768280?s=460&u=034dd7f27928494aba7194d3c7a6a119813ca5fc&v=4" alt="Willian S. Praciano"/>
              <div className="user-info">
                <strong>Willian S. Praciano</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por programação</p>
            <a href="https://github.com/willianpraciano">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28768280?s=460&u=034dd7f27928494aba7194d3c7a6a119813ca5fc&v=4" alt="Willian S. Praciano"/>
              <div className="user-info">
                <strong>Willian S. Praciano</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Apaixonado por programação</p>
            <a href="https://github.com/willianpraciano">Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
