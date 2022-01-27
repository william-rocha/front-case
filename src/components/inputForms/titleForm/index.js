import "./style.css";

const TitleForm = ({ children, link }) => {
  return (
    <div className="title-container" style={{ display: "flex" }}>
      <span>
        <h5>{children}</h5>
      </span>
      {link && <span>{link}</span>}
    </div>
  );
};

export default TitleForm;
