import style from "./ProductsList.module.css";
import products from "../data/products";

function ProductsList() {

	return <div className={style.productsWrapper}>

		{products.map(prodotto => {

			return <div className={style.card} key={prodotto.id}>
				<h4>{prodotto.title}</h4>
				<img src={prodotto.src} alt="" />
				<p>Pasta {prodotto.type}</p>
				<p>Tempo di cottura: {prodotto.time} minuti</p>
			</div>

		})}

	</div>

}

export default ProductsList;