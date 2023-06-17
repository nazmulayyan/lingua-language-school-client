import Banner from "./Banner/Banner";
import Intro from "./Intro/Intro";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;