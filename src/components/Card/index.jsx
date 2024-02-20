import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="card" style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 1)), url(${cover})`,
            backgroundSize: "cover"
            }}>
            <p>{title}</p>
        </Link>
    );
}

export default Card;