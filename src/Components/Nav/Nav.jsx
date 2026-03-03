import "./Nav.css";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Link } from "react-router-dom";

export default function Nav({ setSearchTerm }) {
  const itemRenderer = (item) => (
    <Link to={item.to} className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </Link>
  );

  const items = [
    { label: "Home", icon: "pi pi-home", to: "/" },
    { label: "About Us", icon: "pi pi-search", to: "/About" },
    { label: "Contact", icon: "pi pi-envelope", to: "/Contact" },
  ].map((item) => ({
    ...item,
    template: itemRenderer,
  }));

  const start = <h2 className="mr-2 logo">C O D V E D A</h2>;

  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search ..."
        type="text"
        className="w-8rem sm:w-auto"
        onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
      />
    </div>
  );

  return (
    <div className="nav">
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
}
