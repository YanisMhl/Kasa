function Banner({ children, background }) {
    return (
        <div className="banner" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            }}>
            {children}
        </div>
    );
}

export default Banner;