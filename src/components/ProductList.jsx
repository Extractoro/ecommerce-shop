import ReactLoading from "react-loading";
import ProductItem from "./ProductItem";
import { useGetAllProductsQuery } from "../redux/productsApi";
import { Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const { data: products, isFetching } = useGetAllProductsQuery();

  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {isFetching && (
          <ReactLoading
            type={"spin"}
            color={"#000"}
            height={"100px"}
            width={"100px"}
          />
        )}

        <Row style={{ gap: "20px", justifyContent: "center" }}>
          {products &&
            products.map(({ id, title, price, description, image }) => (
              <div key={id} style={{ width: "19rem" }}>
                <Link
                  to={`/products/${id}`}
                  state={{ prevUrl: location }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ProductItem
                    title={title}
                    price={price}
                    description={description}
                    image={image}
                  />
                </Link>
              </div>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
