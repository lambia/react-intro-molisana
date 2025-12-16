import style from "./ProductCard.module.css";

//Versione con una singola props che è un oggetto
// function ProductCard(props) {

// 	const prodotto = props.prodotto;

// 	return <div className={style.card}>
// 		<h4>{prodotto.title}</h4>
// 		<img src={prodotto.src} alt="" />
// 		<p>Pasta {prodotto.type}</p>
// 		<p>Tempo di cottura: {prodotto.time} minuti</p>
// 	</div>;

// }

//Versione con tanti singole props
function ProductCard(props) {

	//esempio base: creo 4 variabili manualmente dall'oggetto props
	const nome = props.nome;
	const image = props.image;
	const tipo = props.tipo;
	const cottura = props.cottura;

	//alternativa con destructuring in una riga
	// const { nome, image, tipo, cottura } = props;

	return <div className={style.card}>
		<h4>{nome}</h4>
		<img src={image} alt="" />
		<p>Pasta {tipo}</p>
		<p>Tempo di cottura: {cottura} minuti</p>
	</div>;

}

export default ProductCard;