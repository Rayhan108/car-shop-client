import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";


const AllProduct = () => {
    // const { data: semesterData, isFetching } =
    // useGetAllRegisteredSemestersQuery(undefined);
    const {data:products,isFetching}=useGetAllProductsQuery(undefined);
    console.log(products);
    console.log(isFetching);
    return (
        <div>
            <SectionTitle header={"All Products"}></SectionTitle>
        </div>
    );
};

export default AllProduct;