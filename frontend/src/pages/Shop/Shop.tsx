import { useEffect, useState } from "react";
import BannerItem from "../../components/BannerItem/BannerItem";
import Support from "../../components/Support/Support";
import Product from "../../components/ProductCard/ProductCard";
import "../../pages/Home/ProductList/ProductList.css";
import "./Shop.css";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image_link: string;
  image?: string;
  is_new?: boolean;
  category?: string;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 16;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const allProducts = response.data;

        let extendedProducts = [...allProducts];
        while (extendedProducts.length < 32) {
          extendedProducts = [
            ...extendedProducts,
            ...allProducts.map((p) => ({
              ...p,
              id: `${p.id}-${extendedProducts.length}`,
            })),
          ];
        }

        setProducts(extendedProducts);
        setDisplayedProducts(extendedProducts.slice(0, productsPerPage));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSeeDetails = (productId: number | string) => {
    const originalId = productId.toString().split("-")[0];
    console.log("Viewing details for product:", originalId);
  };

  const handlePagination = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setDisplayedProducts(products.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="shop-page">
      <BannerItem
        imgUrl="/assets/images/RectangleImage.png"
        icon="/assets/icons/arrow.svg"
        title="Shop"
        linkHome="/"
        linkShop="#"
        type="2"
      />

      <div className="filters-wrapper">
        <div className="filters">
          <div className="filters-left">
            <button>
              <img src="assets/icons/filtering.svg" alt="Filter Icon" />
              Filter
            </button>
            <img src="assets/icons/grid-big-round.svg" alt="Grid Icon" />
            <img src="assets/icons/view-list.svg" alt="View list Icon" />
            <img src="assets/icons/line.svg" alt="Icon Bar" />
          </div>

          <div className="filters-center">
            <div className="pagination-info">
              Showing {(currentPage - 1) * productsPerPage + 1}–
              {Math.min(currentPage * productsPerPage, products.length)} of{" "}
              {products.length} results
            </div>
          </div>

          <div className="controls">
            <label htmlFor="Show">Show</label>
            <input
              type="number"
              name="show"
              id="show"
              min={1}
              defaultValue={productsPerPage}
            />
            <label htmlFor="Short">Short by</label>
            <input type="text" placeholder="Default" />
          </div>
        </div>
      </div>

      <div className="product-list">
        <div className="product-list__grid">
          {displayedProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>

        <div className="pagination-buttons">
          {[...Array(totalPages)].map((_, index) => (
            <div key={index + 1} className="pagination">
              <button
                className={`pagination-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePagination(index + 1)}
              >
                {index + 1}
              </button>
            </div>
          ))}
          {currentPage < totalPages && (
            <div className="pagination">
              <button
                className="pagination-button pagination-button-next"
                onClick={() => handlePagination(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      <Support />
    </section>
  );
};

export default Shop;
