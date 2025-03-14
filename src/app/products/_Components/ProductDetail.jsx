import { getProductByIdService } from "@/service/product.service";

const ProductDetail = async ({ params }) => {
  const productDetail = await getProductByIdService(params.productId);

  const {
    productName,
    price,
    description,
    image,
    availability,
    colors,
    sizes,
    rating,
    detailedDescription,
  } = productDetail;
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4 ">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={productName}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className=" cursor-pointer  hover:text-black transition-all hover:bg-[orange] w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold  ">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full hover:text-black   cursor-pointer transition-all hover:bg-[orange] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold ">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {productName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  $ {price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability :
                </span>{" "}
                <span className="text-gray-600 dark:text-gray-300">
                  {availability === "In Stock" ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Color:
              </span>
              <div className="flex items-center mt-2">
                {colors.map((color, index) => (
                  <button
                    style={{ background: color }}
                    key={index}
                    className="w-6 h-6 rounded-full dark:bg-gray-200 mr-2"
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                  >
                    {sizes}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
