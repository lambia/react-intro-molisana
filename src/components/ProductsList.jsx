import style from "./ProductsList.module.css";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductsList() {

	return <div className={style.productsWrapper}>

		{products.map(product => {

			//Attenzione: in un map ricordiamoci di mettere la key sull'elemento restituito!

			//Versione con props unificate (una prop con l'intero oggetto)
			//return <ProductCard key={product.id} prodotto={product}  />

			//Versione con singole props
			return <ProductCard key={product.id} nome={product.title} image={product.src} tipo={product.type} cottura={product.time} />

		})}

	</div>

}

export default ProductsList;