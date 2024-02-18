
import React from 'react';
import 'chartjs-plugin-datalabels';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import './proplist_styles/chart.css';

const Chart = () => {
	const data = [
		{ name: 'Mortgage', amount: 630, color:'blueviolet' },
		{ name: 'Co-owner', amount: 303, color:'green' },
		{ name: 'Municipal Taxes', amount: 200, color:'black' },
		{ name: 'School Taxes', amount: 303,color:'brown' }
	];

// const COLORS = ['blueviolet', 'green', 'black', 'brown'];

	return ( 
		<div className="piechart">
			<div className="chart">
				<div className='pie'>
			<ResponsiveContainer className ="res-container" width="100%" height={400}>
			{/* <ResponsiveContainer > */}
			{/* // height={400}> */}
				<PieChart >
					
						<Legend formatter={(value, entry, index) => <span className="text-color-class">{value}</span>}
						wrapperStyle={{ marginBottom:'20px'}}
							layout="vertical" 
							verticalAlign="bottom"
					
							payload={
									data.map((item,index) => ({
										id: item.name,
										color:item.color,
										// type: "circle",
										value: `${item.name}          ${item.amount}`
							})
						)
					}
					
					/>
				
					<Pie
							data={data} 
							// cx={80} 
							cx={'60%'}
							cy={80} 
							// innerRadius={60}
							// outerRadius={80} 
							innerRadius={'45%'}
							outerRadius={'65%'} 
							dataKey="amount"
							// margin={{
							// 	top: 20,
							// 	right: 30,
							// 	left: 0,
							// 	bottom: 0,
							// 	}}
					>
					{
						data.map((entry, index) => <Cell fill={entry.color}/>)
					}	
				
					</Pie>
				
					</PieChart>
				</ResponsiveContainer>
				</div>
				</div>
			<div className="chartvalue">
				<h1> $1533</h1>
				<h6>/monthly</h6>
			</div>

		</div>
	);
}

export default Chart;