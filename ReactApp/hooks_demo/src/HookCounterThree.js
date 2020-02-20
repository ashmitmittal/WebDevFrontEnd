import React from "react";

function HookCounterThree(props) {
	// const [name, setName] = useState({ firstName: "", lastName: "" });
	const name = props.name;
	return (
		<div>
			<form>
				<input
					type='text'
					value={name.firstName}
					onChange={e => props.setName({ ...name, firstName: e.target.value })}
				/>
				<input
					type='text'
					value={name.lastName}
					onChange={e => props.setName({ ...name, lastName: e.target.value })}
				/>
				<h2>Your First Name is: {name.firstName}</h2>
				<h2>Your Last Name is: {name.lastName}</h2>
			</form>
		</div>
	);
}

export default HookCounterThree;
