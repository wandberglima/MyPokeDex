import React from "react";
const Pokeinfo = ({ data }) => {
  const handleClick = () => {
    // Adicionando o easterEgg do pikachu se remover a condição && igualando ao id do pikachu é possivel alterar o fundo para a imagem de qualquer pokemon.
    if (contador() === 3 ) {
      // && data.id === 25
      document
        .querySelector("[name=EasterEgg]")
        .addEventListener("click", function () {
          this.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg') `;
        });
    }
  };

  var count = 0;
  const contador = () => {
    count++;

    console.log(count);
    if (count === 3) {
      return count;
    }
  };

  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="card-img-top fundo">
            {/* Card de informações do Pokemon */}
            <h1>{data.name}</h1>

            <img
              id="poke-img"
              onClick={handleClick}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt=""
            />
            <div className="abilities">
              {data.types.map((poke) => {
                console.log(poke);
                return (
                  <>
                    <div className="group">
                      <h2 className="titulo">{poke.type.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              {data.stats.map((poke) => {
                // barra de status
                var barraStatusPokemon = {
                  color: "white",
                  backgroundColor: "blue",
                  width: poke.base_stat + "%",
                  animation: "progress-animation 5s normal",
                };
                
                return (
                  <>
                    {/* Status bar com animação continua */}
                    <div className="status">
                      <div className="espaco-status">{poke.stat.name}:</div>
                      <div className="progress-bar" id="progress">
                        <span className="barra" style={barraStatusPokemon}>
                          {poke.base_stat}
                        </span>
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