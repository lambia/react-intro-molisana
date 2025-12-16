import style from "./Main.module.css";
import ProductsList from "./ProductsList";

function Main() {

	return (
		<main className={style.main}>
			<div className="boxed">

				<h2>Lista Prodotti</h2>
				<ProductsList />

			</div>
		</main>
	);

}

export default Main;