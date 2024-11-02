import './Logo.scss';

function Logo() {
	return (
		<header className="header">
			<h1>TODO</h1>
			<label className="checkbox">
				<input className="checkbox-control" type="checkbox" id="theme-switch" />
				<span className="checkbox-emulator"></span>
			</label>
		</header>
	);
}

export default Logo;
