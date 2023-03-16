import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
import { GeoAlt } from "react-bootstrap-icons";
import menus from "../data/menus";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import { fetchMenu } from "../services/fetchData";

export default function MainMenu() {

  const URL = 'http://localhost:8009/menu/all'

  const [ menus, setMenus] = useState([])

  useEffect(()=> {
    fetchMenu(URL, setMenus)
  }, [])

  console.log(menus)

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
