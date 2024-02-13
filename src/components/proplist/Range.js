import '../styles/range.css'
const Range = ({ title,min, max,step,value1,value2,value3,handleChange }) => {
  
  return (
    <div className="slider-container">
			<div className="heading">
				<span className="title"> {title}</span>
				{value2? <div><span className="value">{value2}</span><span className="value">{value1}</span></div>
				:
				value3?
				<span className="value">{value3} years</span>
				:
				<span className="value">{value1}</span>
				}
				</div>
      <input
        type="range"
        value={value1}
        min={min}
        max={max}
        step={step}
        onChange = {handleChange}
      />

			{/* <p>The value is: <span>{value}</span></p> */}
      {/* <p>The max value is: <span>{value.max}</span></p> */}
    </div>
  );
};

export default Range