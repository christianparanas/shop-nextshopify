import { getAllProducts, getProduct } from 'lib/shopify'

export default function Product({ product }) {
  return (
    <div>
      {product.title}
    </div>
 )
}

export async function getStaticPaths() {
  const products = await getAllProducts()

  const paths = products.map(product => {
    const handle = String(product.node.handle)

    return {
      params: { product: handle }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product)

  return {
    props: {
      product
    }
  }
}