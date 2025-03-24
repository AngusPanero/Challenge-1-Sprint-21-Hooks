import React from "react"
import { useState, useEffect } from "react"
import '../App.css';

const useFetch = () => {
    const [ fetchApi, setFetchApi ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ selectecUrl, setSelectedUrl ] = useState("https://pokeapi.co/api/v2/pokemon/lugia")
    const [ error, setError ] = useState("")

    useEffect(() => {
        const getCharacters = async (selectecUrl) => {
            try {
                setLoading(true)
                const response = await fetch (selectecUrl)
                const data = await response.json()
                setFetchApi(data)
                console.log("DATA", data);
                
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        getCharacters(selectecUrl)

    }, [selectecUrl])

    if(error) return <h1>Error en la Petición</h1>
    if(loading) return <h1>Cargando</h1>
    
    return(
        <>
            <div className="button-div">
                <button onClick={() => setSelectedUrl(`https://pokeapi.co/api/v2/pokemon/lugia`)}>Pokemon</button>
                <button onClick={() => setSelectedUrl(`https://rickandmortyapi.com/api/character/1`)}>Rick</button>
            </div>
            <div className="fetch-div">
                <h1>{fetchApi?.name?.toUpperCase()}</h1>
                <img className="img" src={fetchApi?.sprites?.front_default || fetchApi?.image}  alt="fetch-Photo" />
            </div>
        </>
    )
        
    }

export default useFetch 