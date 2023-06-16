import { RiMacbookLine, RiBookOpenFill, RiTeamLine, RiTimeLine } from "react-icons/ri";
import img1 from '../../../assets/intro/img1.jpg'

const Intro = () => {
    return (
        <div className="w-11/12 mx-auto mb-28">
            <div className="relative">
                <img className="w-full h-80 rounded-xl" src={img1} alt="" />
                
                <div className="grid grid-cols-4 gap-6 h-full absolute top-0 left-0 w-full glassEffect3 items-center px-4 rounded-xl">
                    <div className="flex rounded-lg justify-evenly py-5 glassEffect items-center">
                        <div className=" p-4 glassEffect3 rounded-full text-white text-2xl"><RiMacbookLine /></div>
                        <div><p className="text-xl text-black font-semibold">Online Tutoring</p></div>
                    </div>
                    <div className="flex rounded-lg justify-evenly py-5 glassEffect items-center">
                        <div className=" p-4 glassEffect3 rounded-full text-white text-2xl"><RiBookOpenFill /></div>
                        <div><p className="text-xl text-black font-semibold">50+ Courses</p></div>
                    </div>
                    <div className="flex rounded-lg justify-evenly py-5 glassEffect items-center">
                        <div className=" p-4 glassEffect3 rounded-full text-white text-2xl"><RiTimeLine /></div>
                        <div><p className="text-xl text-black font-semibold">Lifetime Access</p></div>
                    </div>
                    <div className="flex rounded-lg justify-evenly py-5 glassEffect items-center">
                        <div className=" p-4 glassEffect3 rounded-full text-white text-2xl"><RiTeamLine /></div>
                        <div><p className="text-xl text-black font-semibold">Activate Learning</p></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Intro;