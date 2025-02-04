import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { useChangeStatusMutation, useGetAllUsersQuery } from "@/redux/features/admin/manageUserApi";
import { TUsers } from "@/types/global.type";

import { toast } from "sonner";


const ManageUser = () => {
  const { data: users, isFetching } = useGetAllUsersQuery(undefined);
  const [changeStatus, { isLoading}] = useChangeStatusMutation();
//   console.log(users);
 // Handle delete
 const handleBlock = async (id  : string) => {
const status={
    id:id,
    data:{
  status:"blocked"
    }
  ,
}
console.log(status.data);
    try {
      await changeStatus(status).unwrap();
      toast.success("User is Blocked!");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to Block");
    }
  };
  // Loader
  if (isFetching || isLoading) return <Loader />;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-center text-[#003d1f] mb-6">Manage Users</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-4">
        <Table className="w-full border-collapse border hover:border-[#003d1f] border-[#003d1f]">
          <TableCaption className="font-body">A list of your Users.</TableCaption>
          <TableHeader>
            <TableRow className="bg-[#003d1f] hover:bg-[#003d1f] text-white">
              <TableHead className="p-3 font-title font-bold">Name</TableHead>
              <TableHead className="p-3 font-title font-bold">Email</TableHead>
              <TableHead className="p-3 font-title font-bold">Role</TableHead>
           
              <TableHead className="p-3 font-title font-bold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.data?.map((item:TUsers) => (
              <TableRow
                key={item._id}
                className="hover:bg-gray-100 transition duration-300 border-b border-gray-200"
              >
                <TableCell className="p-3 font-body font-medium">{item.name}</TableCell>
                <TableCell className="p-3 font-body font-medium">{item.email}</TableCell>
                <TableCell className="p-3 font-body font-medium">{item.role}</TableCell>
          
                <TableCell className="p-3 font-body flex flex-col sm:flex-row gap-2 justify-center">
           
                  <Button     onClick={() => handleBlock(item._id)}
                    disabled={isLoading || item.status == 'blocked'} className="bg-red-600 font-body hover:bg-red-800 text-white px-4 py-2 rounded-lg">
                     
                        Block</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageUser;
