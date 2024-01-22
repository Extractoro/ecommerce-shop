import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { useGetProductQuery } from "../../redux/productsApi";
import { Button, Container } from "react-bootstrap";
import s from "./ProductItemDetail.module.css";

const ProductItemDetail = () => {
  const { productId } = useParams();
  const { data: product, isFetching } = useGetProductQuery(productId);
  console.log(product && product);

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
        <div className={s.div}>
          {product && (
            <>
              <img
                className={s.img}
                src={product.image}
                style={{
                  width: "15rem",
                  height: "20rem",
                  marginBottom: "20px",
                }}
              />
              <div style={{}}>
                <h1>{product.title}</h1>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <Button>Buy now!</Button>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default ProductItemDetail;
