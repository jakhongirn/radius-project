import path from "path";
import fs from "fs/promises";
import Layout from "../../components/layout";

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

export default function Product({foundItem}) {
  return (
    <Layout>
        <div>
            <h1 className="text-xl">{foundItem.name}</h1>
        </div>
    </Layout>
  );
}
