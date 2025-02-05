import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOrdersQuery } from "@/redux/features/order/orderApi";

export interface Transaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export interface Product {
  product: string;
  quantity: number;
  _id: string;
}

export interface Order {
  transaction: Transaction;
  _id: string;
  user: string;
  products: Product[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ManageOrder = () => {
  const { isLoading, data } = useGetOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const orderData: Order[] = data?.data;
  console.log(orderData);
  return isLoading ? (
    <Skeleton />
  ) : (
    <div className="mx-auto p-10 columns-1 divide-y divide-x">
      <h2 className="text-4xl  md:py-6 text-[#003d1f] font-extrabold font-title text-center mb-12">
        Manage Your Order
      </h2>
      {orderData?.map((order, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 mb-4 md:grid-cols-2 gap-6 p-6 border-4 border-[#003d1f] rounded-lg bg-white shadow-lg font-body text-black"
        >
          {/* Customer Information */}
          <div className="space-y-3">
            <h3 className="text-xl font-title font-semibold border-b-2 border-[#003d1f] pb-2">
              Customer Information
            </h3>
            <p className="text-lg">
              User ID: <span className="font-medium">{order?.user}</span>
            </p>
            <p className="text-lg">
              Order Date:{" "}
              <span className="font-medium">
                {new Date(order?.createdAt).toLocaleString()}
              </span>
            </p>
            <p className="text-lg">
              Last Updated:{" "}
              <span className="font-medium">
                {new Date(order?.updatedAt).toLocaleString()}
              </span>
            </p>
          </div>

          {/* Order Summary */}
          <div className="space-y-3">
            <h3 className="text-xl font-title font-semibold border-b-2 border-[#003d1f] pb-2">
              Order Summary
            </h3>
            <p className="text-lg">
              Total Price:{" "}
              <span className="font-medium">
                ${order?.totalPrice?.toFixed(2)}
              </span>
            </p>
            <p className="text-lg flex items-center gap-2">
              Status:{" "}
              <Badge
                variant={order?.status === "Pending" ? "outline" : "default"}
                className="text-base font-medium"
              >
                {order?.status}
              </Badge>
            </p>
          </div>

          {/* Products */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xl font-title font-semibold border-b-2 border-[#003d1f] pb-2">
              Products
            </h3>
            <ul className="space-y-2">
              {order?.products?.map((product, i) => (
                <li key={i} className="text-lg">
                  <span className="font-medium">Product ID:</span>{" "}
                  {product?.product},{" "}
                  <span className="font-medium">Quantity:</span>{" "}
                  {product?.quantity}
                </li>
              ))}
            </ul>
          </div>

          {/* Transaction Details */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xl font-title font-semibold border-b-2 border-[#003d1f] pb-2">
              Transaction Details
            </h3>
            <p className="text-lg">
              Transaction ID:{" "}
              <span className="font-medium">{order?.transaction?.id}</span>
            </p>
            <p className="text-lg">
              Payment Method:{" "}
              <span className="font-medium">{order?.transaction?.method}</span>
            </p>
            <p className="text-lg">
              Transaction Date:{" "}
              <span className="font-medium">
                {order?.transaction?.date_time}
              </span>
            </p>
            <p className="text-lg">
              Transaction Status:{" "}
              <span className="font-medium">
                {order?.transaction?.bank_status}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrder;
