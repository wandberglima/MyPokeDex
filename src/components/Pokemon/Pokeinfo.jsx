import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          {/* Add EasterEgg de qualquer pokemon tag ficticia */}
          <i className="easterEgg">
            if ({data.id} === {data.name}){" "}
            {document
              .querySelector("[name=EasterEgg]")
              .addEventListener("click", function () {
                this.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg') `;
              })}
          </i>
          <div className="card-img-top fundo">
            {/* Card de informações do Pokemon */}

            <h1>{data.name}</h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt=""
            />
            <div className="abilities">
              {data.types.map((poke) => {
                console.log(poke);
                return (
                  <>
                    <div className="group">
                      <h2>{poke.type.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              {data.stats.map((poke) => {
                if ({ poke } === {poke}) {
                  document
                    .querySelectorAll("[name=barra]")
                    .addEventListener("click", function () {
                      this.style.backgroundColor = `blue`;
                      // this.style.width = `{poke.base_stat}`;
                      this.sttyle.border = `1px solid black`;
                      this.props.ariaValuemax = `{poke.base_stat}`;
                    });
                }

                return (
                  <>
                    <div className="status">
                      <div> {poke.stat.name}: </div>
                      <div className="progress">
                        <div name="barra" className="progress-bar">
                          {poke.base_stat}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
