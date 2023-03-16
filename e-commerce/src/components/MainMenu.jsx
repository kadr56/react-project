import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { fetchMenu } from "../services/fetchData";

export default function MainMenu() {
  const URL = "http://localhost:8081/menu/all";
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetchMenu(URL, setMenus);
  }, []);

  console.log(menus);

  const subMenus = menus.map((subMenu) => {
    return (
      <SubMenu
        id={subMenu.id}
        title={subMenu.title}
        position={subMenu.position}
        children={subMenu.children}
      />
    );
  });

  return (
    <div>
      <Navbar bg="light" id="mainMenu-container" className="px-5">
        {subMenus}
      </Navbar>
    </div>
  );
}
