import style from "./Header.module.css"

const links = [
	{
		id: 1,
		text: "Home",
		url: "#",
		active: false
	},
	{
		id: 2,
		text: "Prodotti",
		url: "#",
		active: true
	},
	{
		id: 3,
		text: "Chi siamo",
		url: "#",
		active: false
	},
	{
		id: 4,
		text: "Contatti",
		url: "https://www.google.it",
		active: false
	},
];

function Header() {

	return (
		<header className={style.header}>
			<img className="logo" src="/logo.png" alt="Logo La Molisana" />

			<nav>
				<ul>
					{/* <li><a href="#">Home</a></li>
					<li><a href="#">Prodotti</a></li>
					<li><a href="#">Chi siamo</a></li>
					<li><a href="#">Contatti</a></li> */}

					{
						links.map(link => {

							// Se la classe è globale (index.css o header.css, senza moduli)
							// let classeDaUsare = link.active ? "activeLink" : "";

							// Se la classe arriva da un modulo:
							let classeDaUsare = link.active ? style.active : "";

							return <li key={link.id} className={classeDaUsare} ><a href={link.url}>{link.text}</a></li>
						})
					}
				</ul>
			</nav>
		</header>
	);

}

export default Header;