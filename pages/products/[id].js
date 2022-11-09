import path from "path";
import fs from "fs/promises";
import Layout from "../../components/Layout.jsx";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const filePath = path.join(process.cwd(), "backend", "productsData.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export async function getStaticProps(context) {
  const productId = context.params?.id;
  const data = await getData();
  const foundItem = data.products.find((product) => productId === product.id);

  if (!foundItem) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      foundItem,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const pathsWithParams = data.products.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

function TradeCard({ image, title, gift, isTick }) {
  return (
    <div className="flex justify-between items-center my-8">
      <div className="flex items-start gap-x-4">
        <Image
          src={`/images/icon-trade${image}.svg`}
          width={36}
          height={28}
          alt=""
          className=""
        />
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-gray-400 ">- {gift}</p>
        </div>
      </div>
      <Image src={`/images/tick${isTick}.svg`} width={24} height={24} alt="" />
    </div>
  );
}

export default function Product({ foundItem }) {
  return (
    <Layout>
      <div className="w-full pl-4 pr-8 mt-8 mb-8">
        <div className="bg-rd-bg px-5 py-4 rounded-lg">
          <p className="text-gray-400">
            Заявки &gt; Оформить заказ &gt;
            <span className="text-rd-primary"> {foundItem.fullName}</span>
          </p>

          <div className="bg-white my-6 py-6 px-8 rounded-lg">
            <h1 className="text-rd-blue text-2xl font-semibold ">
              {foundItem.fullName}
            </h1>

            <div className="grid grid-cols-2 gap-x-4 my-6">
              <div className="bg-rd-bg p-4 rounded-[12px]">
                <div className="text-center">
                  <Image
                    src={`/images/${foundItem.image}.png`}
                    height={200}
                    width={200}
                    alt=""
                    className="my-10 inline"
                  />
                </div>
                <div className="text-center">
                  <Image
                    src="/images/dots.svg"
                    height={60}
                    width={60}
                    alt=""
                    className="inline"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-gray-400">Цена телефона</h2>
                <p className="font-bold">{foundItem.price} сум</p>
                <h2 className="text-gray-400 mt-8">Общая цена (с наценкой)</h2>
                <div className="flex justify-between">
                  <p className="font-bold">{foundItem.totalPrice} сум</p>
                  <div>
                    <p className="inline bg-rd-secondary text-white font-semibold px-1 py-1 rounded-md">
                      {foundItem.installment} сум{" "}
                    </p>{" "}
                    <span className="ml-3 text-gray-400">x3</span>
                  </div>
                </div>
                <div className="my-3 border-rd-primary border-2 grid grid-cols-4 rounded-md ">
                  <span className=" py-2 text-center bg-rd-primary text-white border-rd-primary border-r-2">
                    3 месяц
                  </span>
                  <span className=" py-2 text-center text-rd-primary border-rd-primary border-r-2">
                    3 месяц
                  </span>
                  <span className=" py-2 text-center text-rd-primary border-rd-primary border-r-2">
                    3 месяц
                  </span>
                  <span className=" py-2 text-center text-rd-primary border-rd-primary">
                    3 месяц
                  </span>
                </div>
                <p className="text-center">
                  {" "}
                  Наценка <span className="font-semibold">5%</span>
                </p>
                <div className="mt-8">
                  <p className="text-gray-400">Общие характеристики</p>
                  <p>Тип: моноблок (классический)</p>
                  <p>Стандарт: 2G, 3G, 4G (LTE), 5G</p>
                  <p>Операционная система: iOS 14</p>
                  <Link
                    className="font-semibold text-rd-primary mt-4 block"
                    href="#"
                  >
                    Показать все
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-rd-primary font-semibold">Акции</p>
            <TradeCard
              image=""
              title="Обменяй свой старый айфон и получи скидку на новый"
              gift="400 000 сум"
              isTick="0"
            />
            <hr />
            <TradeCard
              image="2"
              title="Наушники в подарок"
              gift="Apple EarPods"
              isTick="1"
            />
            <hr />
            <TradeCard
              image="3"
              title="Скидка 20% на смартфоны"
              gift="10 000 сум"
              isTick="1"
            />
            <hr />
            <TradeCard
              image="4"
              title="Скидка на айфоны"
              gift="100 000 сум"
              isTick="1"
            />
            <button className="bg-rd-primary w-full rounded-full text-white py-4 text-center">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
