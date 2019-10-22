import React from 'react'

export default function Card(props){
	return(
		<div className='flex flex-column mw5 tj'>
			<h2 className='mt2 mb0'><span className='fw1 bg-blue white code'>{props.nome}</span></h2>
			<h3 className='mb2'>
				<span className='fw4 f6 white ttu tracked'>{props.main}</span>			
			</h3>
			<span className='white code'>{props.conteudo} (colocar animação do ponto piscando no final)</span>		
		</div>	
	);
}