import React from "react";
import "../styles/Home.css";
import me from "../imgs/me.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={me} alt="Me" />
        <h2>Alison Souza</h2>
        <div className="prompt">
          <p>
            Cortes trabalhados em tesoura, máquina e navalha. Do corte social até o navalhado
          </p>
          <a className="social-media" href="">
            LinkedIn
          </a>
          <a className="social-media" href="">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
