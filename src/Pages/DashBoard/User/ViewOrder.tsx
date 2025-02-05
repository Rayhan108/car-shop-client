/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/Loader/Loader";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


import { useSingleOrderQuery } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { cn } from "@/lib/utils";

const ViewOrder = () => {
    const user = useAppSelector(selectCurrentUser);
    // console.log(user);
    const { data, isLoading} = useSingleOrderQuery(user?.userId, {
        skip: !user?.userId, 
      });

  if (isLoading) return <Loader />;

  return (
    <div className="p-4 md:p-6  lg:p-8">
      <h2 className="text-2xl font-bold text-center text-[#003d1f] mb-6">My Products</h2>
      <div className="overflow-x-auto  shadow-lg rounded-xl p-4">
        <Table className="w-full border-collapse border hover:border-[#003d1f] border-[#003d1f]">
          <TableCaption className="font-body">A list of your Ordered products.</TableCaption>
          <TableHeader>
            <TableRow className="bg-[#003d1f] hover:bg-[#003d1f] ">
              <TableHead className="p-3 text-white font-title font-bold">Brand</TableHead>
              <TableHead className="p-3 text-white  font-title font-bold">Price</TableHead>
              <TableHead className="p-3 text-white font-title font-bold">Status</TableHead>
              <TableHead className="p-3 text-white font-title font-bold">Method</TableHead>
              <TableHead className="p-3 text-white font-title font-bold text-center">Transaction</TableHead>
             
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item : any, id:string) => (
              <TableRow
                key={id}
                className="hover:bg-gray-100 text-black transition duration-300 border-b border-gray-200"
              >
                <TableCell className="p-3 font-body font-medium">{item.products[0].product.brand}</TableCell>
                <TableCell className="p-3 font-body font-medium">₺ {item.totalPrice}</TableCell>
                <TableCell className={cn("p-3 font-body font-bold",item.transaction.bank_status==="Failed"? "text-red-700":"text-green-700")}>{item.transaction.bank_status}</TableCell>
                
                <TableCell className="p-3 font-body font-medium">{item.transaction.method}</TableCell>
                <TableCell className="p-3 font-body font-medium text-center">{item.transaction.id}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ViewOrder;
