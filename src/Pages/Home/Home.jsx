import Banner from "./Banner/Banner";
import Intro from "./Intro/Intro";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;