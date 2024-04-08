import { Route, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Navigation.css";

export default function Navigation() {
  const navigate = useNavigate();
  function ButtonClick(path) {
    navigate(path);
  }

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );

  const end = (
    <div className="rght flex align-items-center gap-1">
      <InputText
        placeholder="Search your destination.."
        type="text"
        className="Input"
      />
      <Button
        id="ButtonR"
        label="Register"
        icon="pi pi-user-plus"
        iconPos="right"
      />
      <Button id="ButtonS" label="Sign In" icon="pi pi-user" iconPos="right" />
    </div>
  );

  return (
    <div className="nav card">
      <Menubar className="menu" start={start} end={end} />
    </div>
  );
}
