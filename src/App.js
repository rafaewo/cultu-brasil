import React, { useState } from 'react'
import Particles from 'react-particles-js'
import Header from './components/Header'
import Map from './components/Map'
import Card from './components/Card'
import info from './components/info'
import './App.css'
import feather from './assets/feather1.svg'
import question from './assets/question.svg'

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
                <Header returnId={handleCountryChange}/>
                <Map onCountryChange={handleCountryChange}/>
                <Card nome={info[estado].nome} main={info[estado].main} conteudo={info[estado].conteudo} />
            </div>
            <div className='flex justify-start items-center mv3 ml4'>
                <img src={feather} alt='ícone de uma pena azul' width={31}/>
                <a href='https://rafaewo.github.io/portfael' target='_blank' rel="noopener noreferrer" className='f6 moon-gray hover-green tracked link'>rafaewo</a>
            </div>
            <div className='bg-black-30 pv1 bg-animate hover-bg-black-50'>
                <a href='https://github.com/rafaewo/cultu-brasil/blob/master/README.md' target='_blank' rel='noopener noreferrer' className='flex flex-column tc items-center link animation'>
                    <img src={question} alt='question' title='Como contribuir' className='w2' />
                    <span className='moon-gray code f7 ttu tracked hover-green mt1'>como contribuir</span>
                </a>
            </div>
        </div>
    );
}