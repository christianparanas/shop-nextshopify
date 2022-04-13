import { getProductsInCollection } from 'lib/shopify'

export default function Home({ products }) {
  console.log(products)

  return (
    <div className="">
      hey
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: {
      products
    }
  }
}
