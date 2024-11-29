import './InputForm.scss';

const ipAddressPattern =
	'^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$';

export default function InputForm({ currentIP, setCurrentIP }) {
	function handleSubmit(e) {
		e.preventDefault();
		// console.log(e.target.elements.IPAddress.value);
		setCurrentIP(e.target.elements.IPAddress.value);
	}

	return (
		<form className="input-form" onSubmit={handleSubmit}>
			<input
				type="text"
				required
				placeholder="Search for any IP address or domain"
				pattern={ipAddressPattern}
				name="IPAddress"
			/>

			<button type="submit">
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
					<path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
				</svg>
			</button>
		</form>
	);
}
