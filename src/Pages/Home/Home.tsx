

import Banner from "@/components/Banner/Banner";
import { Helmet } from "react-helmet-async";
import FAQ from "./FAQ";

const Home = () => {
    return (
        <div>
            <Helmet> <title>NextGen Cars | Home</title></Helmet>
         <Banner/>
         <FAQ/>
        </div>
    );
};

export default Home;