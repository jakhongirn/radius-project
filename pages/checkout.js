import Image from 'next/image'
import Link from 'next/link'
import { products } from '../backend/productsData.json'

const ProductCard = ({ id, image, name, price, installment, period }) => {
  return (
    <Link
      href={`/products/${id}`}
      className="block p-3 bg-white rounded-md m-2"
    >
      <div className="bg-[#F7F7F7]  rounded-md flex justify-center py-4">
        <Image
          src={`/images/${image}.png`}
          className="object-contain"
          width={100}
          height={100}
          alt="Samsung A50"
        />
      </div>
      <h2>{name}</h2>
      <p className="font-semibold mb-2">{price} сум</p>
      <span className="bg-rd-secondary text-white rounded-md  px-2 py-1 font-semibold">
        от {installment} сум
      </span>
      <span className="text-gray-300 ml-2">x{period}</span>
    </Link>
  )
}

const productsList = products.map((product) => {
  return (
    <ProductCard
      key={product.id}
      id={product.id}
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
    <div className="w-full pl-4 pr-8 mt-8 mb-8">
      <div className="bg-rd-bg px-5 py-4 rounded-lg">
        <p className="text-gray-400">
          Заявки &gt; <span className="text-rd-primary">Оформить заказ</span>
        </p>
        <h1 className="text-xl font-semibold text-rd-blue mt-4 mb-2">
          Оформить заказ
        </h1>
        <form className="">
          <div className="relative">
            <input
              className="w-full absolute px-4 py-2 rounded-full focus:outline-none"
              placeholder="Поиск по названию товара"
            />
            <button className="absolute right-0 px-6 py-2 bg-rd-primary rounded-r-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 14.2715 20.5045 16.5823 18.9134 18.3165L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.8156 19.343C16.1488 20.6778 14.0354 21.477 11.7388 21.477C6.36876 21.477 1.99976 17.108 1.99976 11.738C1.99976 6.368 6.36876 2 11.7388 2ZM11.7388 3.5C7.19576 3.5 3.49976 7.195 3.49976 11.738C3.49976 16.281 7.19576 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
        <p className="py-3 mt-16 font-semibold">Все товары (121)</p>

        <div className="grid grid-cols-5">{productsList}</div>

        <div className="flex justify-between items-center  mt-6 mx-4">
          <a href="#">
            <Image src="/images/arrow-left.svg" width={12} height={12} alt="" />
          </a>

          <div className="font-semibold flex items-center  gap-x-2">
            <a
              className="w-9 h-9 rounded-md text-center pt-1 text-white bg-rd-primary"
              href="#"
            >
              1
            </a>
            <a className="p-2" href="#">
              2
            </a>
            <a className="p-2" href="#">
              3
            </a>
            <a className="p-2" href="#">
              4
            </a>
            <a className="p-2" href="#">
              5
            </a>
            <a className="p-2" href="#">
              ...
            </a>
            <a className="p-2" href="#">
              10
            </a>
          </div>
          <a href="#">
            <Image
              src="/images/arrow-right.svg"
              width={12}
              height={12}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Checkout
