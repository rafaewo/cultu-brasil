import React from 'react'
import './style.css'
import brasil from '../assets/brasil.svg'

export default function Header(props) {
	return(
		<>
		<div className='flex flex-wrap justify-center mt3'>
			
			<img src={brasil} alt='ícone bandeira do brasil' title='Bandeira bonita' className='w3 mr3'/>
			<div className='flex flex-wrap flex-column'>
				<h1 onClick={props.returnId} id='0' className='f1 pointer fw8 ma0 near-white'>CultuBrasil</h1>
				<h3 className='ttu tracked fw1 f5 white'>celebre a diversidade</h3>
			</div>
		</div>
		</>
	);
}