// import reactLogo from "./assets/coffee.jpg";

function CategoryCard({ img, id, name, handleClick }) {
    return (
        <div className="category-card" onClick={() => handleClick(name)}>
            <img src={img} alt="img" />
            <p>{name}</p>
        </div>
    );
}

export default CategoryCard;
