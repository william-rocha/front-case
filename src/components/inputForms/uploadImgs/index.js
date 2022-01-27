/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";

const UploadImgs = ({ name, setFieldValue, disabled, logo, ...rest }) => {
  return (
    <Row className="mt-2">
      <label className="uploud-msg-label">
        O logotipo será incluído ao seu anúncio impresso quando optar por
        ADICIONAR LOGO.
      </label>
      <img id="uploud-image-viewer" src={logo} />
      <input
        onChange={(e) => {
          const fileReader = new FileReader();
          fileReader.onload = () => {
            if (fileReader.readyState === 2) {
              setFieldValue("logo", fileReader.result);
              var output = document.getElementById("uploud-image-viewer");
              output.src = fileReader.result;
            }
          };
          fileReader.readAsDataURL(e.target.files[0]);
        }}
        {...rest}
        alt=""
        type="file"
        // accept="image/*"
        accept="image/png, image/jpeg"
        name={name}
        id={name}
        {...rest}
        style={{ display: "none" }}
      />
      <label
        className={`fake-link ${disabled && "uploud-disabled"}`}
        htmlFor="logo"
      >
        Clique aqui para alterar
      </label>
      <label className="uploud-msg-label">
        Cadastrar imagem em PNG ou JPG, tamanho máximo para arquivo de 10MB.
        (validar se tamanho máximo é 10mb mesmo)
      </label>
    </Row>
  );
};

export default UploadImgs;
