import { Input } from "semantic-ui-react";

function AddProductToCart() {
  return (
    <Input
      type="number"
      min="1"
      placeholder="Quantity"
      action={{
        color: "orange",
        content: "Add to Cart",
        incon: "plus cart",
        default: "1",
      }}
    />
  );
}

export default AddProductToCart;
