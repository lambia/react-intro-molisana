// Versione base: accetta una prop "slogan" e la usa per stamparla in pagina
function Logo(props) {

	const slogan = props.slogan;

	//Alternativa: se slogan non è passato, usa un valore di default
	//const slogan = props.slogan ? props.slogan : "Il nostro motto"; //con ternario
	//const slogan = props.slogan || "Il nostro motto"; //con OR

	return <figure>
		<img className="logo" src="/logo.png" alt="Logo La Molisana" />
		<p>{slogan}</p>
	</figure>

}

//Versione dimostrativa: conditional rendering (visualizza IF valore) con AND
// function Logo(props) {

// 	const slogan = props.slogan;

// 	return <figure>
// 		<img className="logo" src="/logo.png" alt="Logo La Molisana" />
// 		{slogan && <p>{slogan}</p>}
// 	</figure>

// }

//Versione dimostrativa: conditional rendering (visualizza IF valore) con funzione
// function Logo(props) {

// 	const slogan = props.slogan;

// 	//Controllo condizione sulla presenza dello slogan (restituisce <p> solo se esiste slogan)
// 	const getSlogan = () => {
// 		if (slogan) {
// 			return <p>{slogan}</p>
// 		}
// 	}

// 	return <figure>
// 		<img className="logo" src="/logo.png" alt="Logo La Molisana" />
// 		{getSlogan()}
// 	</figure>

// }

export default Logo;