import style from "./Footer.module.css";

function Footer() {

	const pastificioLinks = [
		{ id: 1, label: "Il Pastificio", href: "/il-pastificio" },
		{ id: 2, label: "Grano", href: "/il-nostro-grano" },
		{ id: 3, label: "Filiera", href: "#" },
		{ id: 4, label: "100 anni di pasta", href: "#" },
		{ id: 5, label: "Sartoria della pasta", href: "#" },
	];

	const prodottiLinks = [
		{ id: 1, label: "Le classiche", href: "#" },
		{ id: 2, label: "Le Integrali", href: "#" },
		{ id: 3, label: "Le Speciali", href: "#" },
		{ id: 4, label: "Le Biologiche", href: "#" },
		{ id: 5, label: "Le Gluten-free", href: "#" },
	];

	return (
		<footer className={style.footer}>
			<div className="flex-container boxed justify-content-space-between">
				<div className="flex-container align-items-center">
					<img src="/logo.png" alt="La Molisana" className={style.footerLogo} />
				</div>
				<div>
					<h4>Pastificio</h4>
					<ul>
						{pastificioLinks.map(link => {
							return <li><a href={link.href} key={link.id} >{link.label}</a></li>
						})}
					</ul>
				</div>
				<div>
					<h4>Prodotti</h4>
					<ul>
						{prodottiLinks.map(link => {
							return <li><a href={link.href} key={"prodotti-" + link.id} >{link.label}</a></li>
						})}
					</ul>
				</div>
			</div>
		</footer >
	);

}

export default Footer;