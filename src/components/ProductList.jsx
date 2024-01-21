import ReactLoading from "react-loading";
import ProductItem from "./ProductItem";
import { useGetAllProductsQuery } from "../redux/productsApi";
import { Container, Row } from "react-bootstrap";

const ProductList = () => {
  const { data: products, isFetching } = useGetAllProductsQuery();

  console.log(products && products);

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
            height={"10%"}
            width={"10%"}
          />
        )}

        <Row style={{ justifyContent: "space-around", gap: "20px" }}>
          {products &&
            products.map(({ id, title, price, description, image }) => (
              <ProductItem
                title={title}
                price={price}
                description={description}
                image={image}
                key={id}
              />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
