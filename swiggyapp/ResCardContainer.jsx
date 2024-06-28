import ResCard from "./ResCard";

const ResCardContainer = ({list}) => {
return (
    <>
        {list.map((restaurant, index) => (
        <ResCard
        key={index}  
        resData={restaurant}
        />
    ))}
    </>
);
};

export default ResCardContainer;


