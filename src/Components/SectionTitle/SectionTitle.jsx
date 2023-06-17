
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <h4 className="text-4xl text-center text-gray-800 font-bold uppercase">{heading}</h4>
            <p className="text-xl font-semibold pt-1  text-center">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;