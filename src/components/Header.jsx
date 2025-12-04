import style from "./Header.module.css"

function Header() {

	return (
		<header className={style.header}>
			<img id="logo" src="/logo.png" alt="Logo La Molisana" />

			<nav>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Prodotti</a></li>
					<li><a href="#">Chi siamo</a></li>
					<li><a href="#">Contatti</a></li>
				</ul>
			</nav>
		</header>
	);

}

export default Header;