import React, { useState } from 'react'
import Particles from 'react-particles-js'
import Header from './components/Header'
import Map from './components/Map'
import Card from './components/Card'
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

    const list = [
        {nome: 'Clique em um estado', main: 'aqui vai ter uma informação interessante', conteudo: 'e aqui mais outras'},
        {nome: 'Roraima (RO)', main: '', conteudo: ''},
        {nome: 'Amapá (AP)', main: '', conteudo: ''},
        {nome: 'Pará (PA)', main: 'berço da cultura marajoara', conteudo: 'Você sabia que no Pará chove 3 dias sim e 3 dias também?'},
        {nome: 'Amazonas (AM)', main: '', conteudo: ''},
        {nome: 'Maranhão (MA)', main: '', conteudo: ''},
        {nome: 'Piaui (PI)', main: '', conteudo: ''},
        {nome: 'Ceará (CE)', main: '', conteudo: ''},
        {nome: 'Tocantins (TO)', main: '', conteudo: ''},
        {nome: 'Rio Grande do Norte (RN)', main: '', conteudo: ''},        
        {nome: 'Paraíba (PB)', main: '', conteudo: ''},
        {nome: 'Mato Grosso (MT)', main: '', conteudo: ''},
        {nome: 'Pernambuco (PE)', main: '', conteudo: ''},
        {nome: 'Acre (AC)', main: 'dinossauros', conteudo: ''},
        {nome: 'Rondônia (RO)', main: '', conteudo: ''},
        {nome: 'Bahia (BA)', main: '', conteudo: ''},
        {nome: 'Alagoas (AL)', main: '', conteudo: ''},
        {nome: 'Sergipe (SE)', main: '', conteudo: ''},
        {nome: 'Goiás (GO)', main: '', conteudo: ''},
        {nome: 'Minas Gerais (MG)', main: '', conteudo: ''},
        {nome: 'Distrito Federal (DF)', main: '', conteudo: ''},
        {nome: 'Mato Grosso do Sul (MS)', main: '', conteudo: ''},
        {nome: 'Espírito Santo (ES)', main: '', conteudo: ''},
        {nome: 'São Paulo (SP)', main: '', conteudo: ''},
        {nome: 'Rio de Janeiro (RJ)', main: '', conteudo: ''},
        {nome: 'Paraná (PR)', main: '', conteudo: ''},
        {nome: 'Santa Catarina (SC)', main: '', conteudo: ''},
        {nome: 'Rio Grande so Sul (RS)', main: '', conteudo: ''},
        {nome: 'Curiosidade', main: 'intro', conteudo: 'explicação'}
    ]

    function handleCountryChange(evt) {
        setEstado(evt.target.id) 
    }

    return(
        <div className='Header'>
            <Particles className='particles' params={particlesOpt} />
            <div className='flex flex-wrap justify-around items-center'>
                <Header />
                <Map onCountryChange={handleCountryChange}/>
                <Card nome={list[estado].nome} main={list[estado].main} conteudo={list[estado].conteudo} />
            </div>
        </div>
    );
}