import style from "./Footer.module.css";
import footerSections from "../data/footerSections"
import Logo from "./Logo";

function Footer() {

	return (
		<footer className={style.footer}>
			<div className="flex-container boxed justify-content-space-between">
				<div className="flex-container align-items-center">
					<Logo slogan="Molisana, pasta italiana!" />
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