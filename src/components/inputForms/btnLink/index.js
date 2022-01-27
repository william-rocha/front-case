import "./style.css";
const BtnLink = ({ text, disableAll, ...rest }) => {
  return (
    <>
      <span {...rest}>
        {" "}
        <a href="#">{disableAll ? "Editar" : "Voltar"}</a>
      </span>
    </>
  );
};

export default BtnLink;
