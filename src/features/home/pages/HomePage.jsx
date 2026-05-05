import { Card } from "@/shared";
// estas rutas dinamicas no las admite express
import { products } from "../../../../data/products/products";

export default function HomePage() {
    return(
        <div className="mx-auto max-w-7xl">
                {/* Hero */}
                {/* Carrusel */}
                {/* Titulo */}
            <h2 className="text-h2 place-self-center mb-12">
                Productos
            </h2>
                {/* Cards */}
            <div
                className="
                grid
                gap-4
                mx-6
                sm:grid-cols-2
                sm:mx-12
                lg:grid-cols-3
                xl:grid-cols-4
                justify-items-center
                max-w-max
                ">
                    {/* max-w-max se adapta al contenido */}
                    {/* mapee los productos y cada uno llamelo product */}
                {products.map((product) =>(
                    <Card key={product.id} product={product}/>
                ))}

                </div>
        </div>

    )
}