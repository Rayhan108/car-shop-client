

import Banner from "@/components/Banner/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet> <title>NextGen Cars | Home</title></Helmet>
         <Banner/>
        </div>
    );
};

export default Home;