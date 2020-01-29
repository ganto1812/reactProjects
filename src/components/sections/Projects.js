import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Projects() {
	const projects = [
		{
			id: 1,
			title: 'Weather App',
			info:
				'An app that searches the weather conditions of an specific country or city in real time',
			img: 'weather.png'
		},
		{
			id: 2,
			title: 'Retail Phone Store',
			info:
				'A phone retail shop with incorporated cart and paypal transactions',
			img: 'retail.png'
		},
		{
			id: 3,
			title: 'To do App',
			info:
				'An app that lets you add anything to do the list. With get and fetch real time actions from an API',
			img: 'todo.png'
		}
	];
	return (
		<div>
			<Section sectionName='My Projects' sectionId='projects' key='2'></Section>
			<p>Here are some of my projects.</p>
			<p>Take a look!</p>
			<div>
				<h2>React Projects</h2>
				<div className='row'>
					<Card projects={projects}></Card>
				</div>
			</div>
			<div>
				<h2>Vanilla JS Projects</h2>
			</div>
		</div>
	);
}
