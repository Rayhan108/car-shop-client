import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

type TProductProps = {
    _id:string;
  brand: string;
  model: string;
  price: number;
  quantity: number;
image:string;
  category: string;
};

const ProductCard = ({ product }: { product: TProductProps }) => {
  return (
    <Card className="w-full max-w-sm bg-white shadow-md rounded-2xl overflow-hidden relative">
    <img    className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105 duration-300" src={product.image}  width={400} height={250} />
    <CardContent className="p-4">
    <Badge className={`absolute top-2 left-2 ${product.quantity > 0 ? " text-white" : "bg-red-500 hover:bg-red-600 text-white"}`}>
    {product.quantity > 0 ? "In Stock" : "Out of Stock"}
  </Badge>
      <p className="font-body text-sm"><strong>Brand:</strong> {product.brand}</p>
      <p className="font-body text-sm"><strong>Model:</strong> {product.model}</p>
      <p className="font-body text-sm"><strong>Category:</strong> {product.category}</p>
      <p className="font-body text-sm"><strong>Quantity:</strong> {product.quantity}</p>
      <p className="text-lg font-bold font-body text-[#003d1f] mt-2"><strong>Price:</strong> ₺{product.price}</p>
    </CardContent>
    <CardFooter className="p-4 flex gap-2">
 <Link to={`/product/${product._id}`}>
 <Button  className=" font-body bg-[#003d1f] text-white hover:bg-[#002a14]">View Details</Button>
 </Link>
      <Button className="w-1/2 font-body  text-white hover:bg-[#002a14]">Add to Cart</Button>
    </CardFooter>
  </Card>
  );
};

export default ProductCard;
