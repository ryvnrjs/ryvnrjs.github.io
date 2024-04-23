import './Separator.css';

const Separator = (prop) => {
    return (
        <div className="div-separator-container">
            <div className="div-separator-bar"></div>
            <div className="div-separator-section">
                <div className="div-separator-header">{prop.header}</div>
                <div className="div-separator-content">{prop.content}</div>
            </div>
        </div>
    );
}

export default Separator;