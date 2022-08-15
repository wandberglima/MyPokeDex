import React from "react";
const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {
        // Carregando a lista de pokemons e atribuindo a função de clique para abrir o card detalhado
        loading ? (
          <h1>Loading...</h1>
        ) : (
          pokemon.map((pokemon) => {
            return (
              <>
                <div
                  className="card container-nome"
                  key={pokemon.id}
                  onClick={() => infoPokemon(pokemon)}
                >
                  <h2 className="poke-nome">
                    {pokemon.id}
                    <div>
                      <img
                        src={pokemon.sprites.front_default}
                        className="nume"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <span className="poke-nome"> {pokemon.name} </span>
                    </div>
                  </h2>
                </div>
              </>
            );
          })
        )
      }
    </>
  );
};

export default Card;