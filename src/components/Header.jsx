import style from "./Header.module.css"
import links from "../data/headerLinks"

function Header() {

	return (
		<header className={style.header}>
			<img className="logo" src="/logo.png" alt="Logo La Molisana" />

			<nav>
				<ul>{
					links.map(link => {
						// Se la classe è globale (index.css o header.css, senza moduli)
						// let classeDaUsare = link.active ? "activeLink" : "";

						// Se la classe arriva da un modulo:
						let classeDaUsare = link.active ? style.active : "";

						return <li key={link.id} className={classeDaUsare} ><a href={link.url}>{link.text}</a></li>
					})
				}</ul>
			</nav>
		</header>
	);

}

export default Header;