import './Components.css'
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div>
            <span className="subHeading">{subHeading}</span>
            <p className="heading">{heading}</p>
        </div>
    );
};

export default SectionTitle;