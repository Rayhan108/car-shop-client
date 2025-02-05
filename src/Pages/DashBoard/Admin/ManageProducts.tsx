import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeleteProductMutation } from "@/redux/features/admin/manageProductApi";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ManageProduct = () => {
  const { data: products, isFetching } = useGetAllProductsQuery(undefined);
  const [deleteProduct, { isLoading}] = useDeleteProductMutation();
  console.log(products);
 // Handle delete
 const handleDelete = async (id  : string) => {

    try {
      await deleteProduct({ id }).unwrap();
      toast.success("Product deleted successfully!");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };
  // Loader
  if (isFetching || isLoading) return <Loader />;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-center text-[#003d1f] mb-6">Manage Products</h2>
      <div className="overflow-x-auto bg-white text-black shadow-lg rounded-xl p-4">
        <Table className="w-full border-collapse border hover:border-[#003d1f] border-[#003d1f]">
          <TableCaption className="font-body">A list of your recent products.</TableCaption>
          <TableHeader>
            <TableRow className="bg-[#003d1f] hover:bg-[#003d1f] text-white">
              <TableHead className="p-3 font-title font-bold">Brand</TableHead>
              <TableHead className="p-3 font-title font-bold">Model</TableHead>
              <TableHead className="p-3 font-title font-bold">Category</TableHead>
              <TableHead className="p-3 font-title font-bold">Price</TableHead>
              <TableHead className="p-3 font-title font-bold text-center">Quantity</TableHead>
              <TableHead className="p-3 font-title font-bold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.data?.result?.map((item, id) => (
              <TableRow
                key={id}
                className="hover:bg-gray-100 transition duration-300 border-b border-gray-200"
              >
                <TableCell className="p-3 font-body font-medium">{item.brand}</TableCell>
                <TableCell className="p-3 font-body font-medium">{item.model}</TableCell>
                <TableCell className="p-3 font-body font-medium">{item.category}</TableCell>
                <TableCell className="p-3 font-body font-medium">₺{item.price}</TableCell>
                <TableCell className="p-3 font-body font-medium text-center">{item.quantity}</TableCell>
                <TableCell className="p-3 font-body flex flex-col sm:flex-row gap-2 justify-center">
             <Link to={`/dashboard/updateProduct/${item._id}`}>     <Button className=" font-body hover:bg-[#003d1f] text-white px-4 py-2 rounded-lg">Update</Button></Link>
                  <Button     onClick={() => handleDelete(item._id)}
                    disabled={isLoading} className="bg-red-600 font-body hover:bg-red-800 text-white px-4 py-2 rounded-lg">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProduct;
