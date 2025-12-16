import style from "./Main.module.css";
import products from "../data/products";

function Main() {

	return (
		<main className={style.main}>
			<div className="boxed">

				<h2>Lista Prodotti</h2>

				<div className={style.productsWrapper}>

					{products.map(prodotto => {

						return <div className={style.card} key={prodotto.id}>
							<h4>{prodotto.title}</h4>
							<img src={prodotto.src} alt="" />
							<p>Pasta {prodotto.type}</p>
							<p>Tempo di cottura: {prodotto.time} minuti</p>
						</div>

					})}

				</div>

			</div>
		</main>
	);

}

export default Main;