import React, { useState } from 'react'
import Particles from 'react-particles-js'
import Header from './components/Header'
import Map from './components/Map'
import Card from './components/Card'
import info from './components/info'
import './App.css'


const particlesOpt = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },  
        }
    }
}

export default function App(){
    const [estado, setEstado] = useState(0)



    function handleCountryChange(evt) {
        setEstado(evt.target.id) 
    }

    return(
        <div className='Header'>
            <Particles className='particles' params={particlesOpt} />
            <div className='flex flex-wrap justify-around items-center'>
                <Header />
                <Map onCountryChange={handleCountryChange}/>
                <Card nome={info[estado].nome} main={info[estado].main} conteudo={info[estado].conteudo} />
            </div>
        </div>
    );
}