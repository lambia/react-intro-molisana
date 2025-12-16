import style from "./Footer.module.css";
import footerSections from "../data/footerSections"

function Footer() {

	return (
		<footer className={style.footer}>
			<div className="flex-container boxed justify-content-space-between">
				<div className="flex-container align-items-center">
					<img src="/logo.png" alt="La Molisana" className="logo" />
				</div>

				{footerSections.map((sezione, i) => {

					return <div key={i}>
						<h4>{sezione.title}</h4>
						<ul>{
							sezione.links.map(voce => {
								return <li key={voce.id}><a href={voce.href} >{voce.label}</a></li>
							})
						}</ul>
					</div>

				})}

			</div>
		</footer >
	);

}

export default Footer;