const { default: ProductDetail } = require("../_Components/ProductDetail");

const productId = async ({ params: paramsPromise }) => {
  // fix async with param before send to productDetail component

  const params = await paramsPromise; // fix await before return

  return <ProductDetail params={params} />;
};
export default productId;
