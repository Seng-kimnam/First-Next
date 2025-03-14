import { getAllProductService } from "@/service/product.service";
import ProductCard from "./_Components/ProductCard";

const ProudctPage = async () => {
  const productList = await getAllProductService();

  return <ProductCard productList={productList} />;
};
export default ProudctPage;
