"use client"
import { useState } from "react"
import Card from "./Card"
import './CardWrapper.css'
import data from "./data_tarjetas.json"


export default function CardWrapper () { 
    const [ filtros, setfiltros] = useState("all");
    return (
         <div className="wrapper"> 
         <h2 className="titulowrapper">Galeria</h2>
         <br />
         <div className="grilla">
            <div className="filtro">
                 <label >
                <input type="radio" name="categoria" value="aire" onChange={()=>{
                    setfiltros("aire")
                }}/> Aire acondicionado < br/>
                </label>
                
                <label >
                <input type="radio" name="categoria" value="lavarropa" onChange={()=>{
                    setfiltros("lavarropa")
                }}/> Lavarropas < br/>
                </label>
                <label >
                <input type="radio" name="categoria" value="secarropas" onChange={()=>{
                    setfiltros("secarropas")
                }}/> Secarropas < br/>
                </label>
               <label>
                <input type="radio" name="categoria" value="heladera" onChange={()=>{
                    setfiltros("heladera")
                }}/> Heladera < br/>
                </label>
               
            </div>    
            
           {data.map(elemento =>{
            if(filtros === "all"){
                return(
                    <Card key={elemento.id} producto={elemento}/>
                )}
            if(elemento.categoria === filtros) {
                return(
                    <Card key={elemento.id} producto={elemento}/>
                    )
                }
               }
            )}
         </div>
         </div>
    )

}