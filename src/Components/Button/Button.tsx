import React from "react";
import "./button.scss";

interface Props {
  id: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  disabled?: boolean;
  idActive?: string;
  active?: boolean;
}

const Button: React.FC<Props> = ({ id, children, onClick, ...attrs }) => {
  return (
    <button
      id={id}
      className={`btn ${
        (attrs.idActive && attrs.idActive === id) ||
        (attrs.active && !attrs.idActive && attrs.idActive !== undefined)
          ? "active"
          : ""
      }`}
      disabled={attrs.disabled ? true : false}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
