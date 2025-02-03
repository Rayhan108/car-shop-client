

import Banner from "@/components/Banner/Banner";
import { Helmet } from "react-helmet-async";
import FAQ from "./FAQ";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
    return (
        <div>
            <Helmet> <title>NextGen Cars | Home</title></Helmet>
         <Banner/>
         <FeatureProducts/>
         <FAQ/>
        </div>
    );
};

export default Home;