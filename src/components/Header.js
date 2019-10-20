import React from 'react'
import './style.css'
import brasil from './brasil.svg'

export default function Header() {
	return(
		<>
		<div className='flex flex-wrap justify-center'>
			<img src={brasil} alt='ícone bandeira do brasil' title='Bandeira bonita' className='w3 mr3'/>
			<div className='flex flex-wrap flex-column'>
				<h1 className='f1 fw8 ma0 near-white'>CultuBrasil</h1>
				<h3 className='ttu tracked fw1 f5 white'>celebre a diversidade</h3>
			</div>
		</div>
		</>
	);
}