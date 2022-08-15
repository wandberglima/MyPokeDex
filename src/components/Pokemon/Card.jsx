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
                <div className="card container-nome" key={pokemon.id} onClick={() => infoPokemon(pokemon)}>
                    <img src={pokemon.sprites.front_default} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 className="poke-nome">{pokemon.id}
                        <span className="poke-nome"> {pokemon.name} </span>
                        </h2>
                    </div>
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
