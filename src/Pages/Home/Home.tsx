

import Banner from "@/components/Banner/Banner";
import { Helmet } from "react-helmet-async";
import FAQ from "./FAQ";
import FeatureProducts from "./FeatureProducts";
import Testimonial from "./Teastimonial";

const Home = () => {
    return (
        <div>
            <Helmet> <title>NextGen Cars | Home</title></Helmet>
         <Banner/>
         <FeatureProducts/>
         <Testimonial/>
         <FAQ/>
        </div>
    );
};

export default Home;