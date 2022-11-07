import Image from "next/image"
import { products } from "./dataProducts"

const ProductCard = ({image, name, price, installment, period}) => {
  return (
    <div className="bg-white p-3 rounded-md">
        <div className="bg-[#F7F7F7]  rounded-md flex justify-center py-4">
            <Image 
              src={`/images/${image}.png`}
              className="object-contain" 
              width={100}
              height={100}
              alt="Samsung A50"/>
        </div>
        <h2>{name}</h2>
        <p className="font-semibold mb-2">{price} сум</p>
        <span className="bg-rd-secondary text-white rounded-md  px-2 py-1 font-semibold">от {installment} сум</span><span className="text-gray-300 ml-2">x{period}</span>
    </div>
  )
} 

const productsList = products.map((product) => {
  return (
  <ProductCard 
    key={product.name}
    image={product.image}
    name={product.name}
    price={product.price}
    installment={product.installment}
    period={product.period}
  />
)
})

const Checkout = () => {
  return (
    <div className='w-full pl-4 pr-8 mt-8 mb-8'>
        <div className="bg-rd-bg px-5 py-4 rounded-lg">
            <p className="text-gray-400">Заявки &gt; <span className="text-rd-primary">Оформить заказ</span></p>
            <h1 className="text-xl font-semibold text-rd-blue mt-4 mb-2">Оформить заказ</h1>
            <form className="">
              <div className="relative">
              <input className="w-full absolute px-4 py-2 rounded-full" placeholder="Поиск по названию товара"/>
              <button className="absolute right-0 px-6 py-2 bg-rd-primary rounded-r-full">Search</button>
              </div>
            </form> 
            <p className="py-3 mt-16 font-semibold">Все товары (121)</p>

            <div className="grid grid-cols-5">
              
              {productsList}

            </div>
        </div>
    </div>
  )
}

export default Checkout