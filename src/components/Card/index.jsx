function Card(img, title) {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <p>{title}</p>
        </div>
    );
}

export default Card;