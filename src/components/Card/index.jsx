function Card({ title, cover }) {
    return (
        <div className="card" style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 1)), url(${cover})`}}>
            <p>{title}</p>
        </div>
    );
}

export default Card;