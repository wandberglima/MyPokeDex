import React, { useState, useEffect} from "react";
import Card from "../components/Pokemon/Card";
import Pokeinfo from "../components/Pokemon/Pokeinfo";
import axios from "axios";

// Importação da api pokeapi com axios 
const Main=()=>{
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    async function pokeFun() {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    }

    const getPokemon=async(res)=>{
       res.map(async(pokemons)=>{
          const result=await axios.get(pokemons.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }

    useEffect(()=>{
        pokeFun();
    },[url]);
    
    
    return(
        <>
            <div className="container-fluid">
                <div>
 {/* Listagem dos Pokemons */}
                    <div className="sm left-content">
                        <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>                    
                    </div>
                
{/* Card de Inforamações do pokemon após clicar no pokemon desejado */}
                <div className="sm right-content">
                    <Pokeinfo data={pokeDex}/>
                </div>    
                </div>           
                
                {/* Botões de avançar e voltar */}
                <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>
            </div>
        </>
    )
}
export default Main;