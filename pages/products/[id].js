import path from "path";
import fs from "fs/promises";
import Layout from "../../components/layout";
import Image from "next/image";

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

export default function Product({ foundItem }) {
  return (
    <Layout>
      <div className="w-full pl-4 pr-8 mt-8 mb-8">
        <div className="bg-rd-bg px-5 py-4 rounded-lg">
          <p className="text-gray-400">
            Заявки &gt; <span className="text-rd-primary">Оформить заказ</span>
          </p>

          <div className="bg-white my-6 py-6 px-8">
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
