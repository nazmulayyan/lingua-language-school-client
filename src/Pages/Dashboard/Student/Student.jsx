import addItems from "../../../Hooks/addItems";

const Student = () => {
    const [addClass] = addItems();
    return (
        <div>
            <h2>this is student dashboard {addClass.length}</h2>
        </div>
    );
};

export default Student;