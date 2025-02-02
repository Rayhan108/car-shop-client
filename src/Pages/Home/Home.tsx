import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet> <title>NextGen Cars | Home</title></Helmet>
            <h1 className="font-bold text-xl font-title">Home page</h1>
            <Button>Click here</Button>
        </div>
    );
};

export default Home;