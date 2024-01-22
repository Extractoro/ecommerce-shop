import { Card } from "react-bootstrap";

const ProductItem = ({ title, price, description, image }) => {
  return (
    <Card
      style={{
        width: "19rem",
        height: "36rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "15rem", height: "20rem" }}
      />
      <Card.Body>
        <Card.Title>
          {title && title.length > 40 ? `${title.slice(0, 39)}...` : title}
        </Card.Title>
        <Card.Text>${price}</Card.Text>
        <Card.Text>
          {description && description.length > 140
            ? `${description.slice(0, 139)}...`
            : description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
