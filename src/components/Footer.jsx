import style from "./Footer.module.css";

function Footer() {


	const footerSections = [
		{
			title: "Pastificio",
			links: [
				{ id: 1, label: "Il Pastificio", href: "/il-pastificio" },
				{ id: 2, label: "Grano", href: "/il-nostro-grano" },
				{ id: 3, label: "Filiera", href: "#" },
				{ id: 4, label: "100 anni di pasta", href: "#" },
				{ id: 5, label: "Sartoria della pasta", href: "#" },
			]
		},
		{
			title: "Prodotti",
			links: [
				{ id: 1, label: "Le classiche", href: "#" },
				{ id: 2, label: "Le Integrali", href: "#" },
				{ id: 3, label: "Le Speciali", href: "#" },
				{ id: 4, label: "Le Biologiche", href: "#" },
				{ id: 5, label: "Le Gluten-free", href: "#" },
			]
		},

	];

	return (
		<footer className={style.footer}>
			<div className="flex-container boxed justify-content-space-between">
				<div className="flex-container align-items-center">
					<img src="/logo.png" alt="La Molisana" className="logo" />
				</div>

				{footerSections.map(sezione => {

					return <div>
						<h4>{sezione.title}</h4>
						<ul>
							{
								sezione.links.map(voce => {
									return <li><a href={voce.href} key={voce.id} >{voce.label}</a></li>
								})
							}
						</ul>
					</div>

				})}

			</div>
		</footer >
	);

}

export default Footer;