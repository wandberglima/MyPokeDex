import React from "react";

const Pokeinfo = ({ data }) => {

    return (
        <>
        {
            (!data) ? "" : (
                <>
{/* Add EasterEgg de qualquer pokemon tag ficticia */}
<i className='easterEgg'> 
    if ({data.id} == {data.name}) {
        document.querySelector("[name=EasterEgg]").addEventListener('click', function() {
            this.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg') `;
            // this.style.backgroundRepeat = `no-repeat`;
            // this.style.backgroundPosition = `center`;
            
        })           
        }
</i>


                <div className="card-img-top fundo">
{/* Card de informações do Pokemon */}

                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" />
                    <div className="abilities">
                   
                        {
                            data.types.map(poke=>{
                                console.log(poke);
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.type.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                    <div>
                                        {poke.stat.name}
                                        :
                                        {poke.base_stat}
                                        
                                        {/* <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div> */}

                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>  
                </>
            )
        }
        </>
    )
}
export default Pokeinfo