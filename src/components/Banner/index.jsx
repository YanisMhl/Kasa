function Banner({ children, background }) {
    return (
        <div className="banner" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`}}>
            {children}
        </div>
    );
}

export default Banner;