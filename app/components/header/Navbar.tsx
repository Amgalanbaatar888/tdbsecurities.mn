"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Menu, MenuItem, Button } from "@mui/material";
import { headerMenu } from "./headerMenu";

interface SubmenuItem {
  id: number;
  label: string;
  link: string;
}

interface MenuItem {
  id: number;
  label: string;
  link: string;
  submenu?: SubmenuItem[];
}

export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    if (activeMenuId === id) {
      setActiveMenuId(null);
      setAnchorEl(null);
    } else {
      setActiveMenuId(id);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setActiveMenuId(null);
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center relative">
      {headerMenu.map((item) => (
        <div key={item.id} className="relative">
          <div className="relative text-black hover:text-[#007AFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#007AFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#007AFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <Button
              variant="text"
              onClick={(e) => (item.submenu ? handleClick(e, item.id) : null)}
              className="!text-white !font-semibold"
            >
              {item.label}
            </Button>
          </div>
          {item.submenu && (
            <Menu
              anchorEl={anchorEl}
              open={activeMenuId === item.id}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {item.submenu.map((subItem) => (
                <MenuItem
                  key={subItem.id}
                  onClick={handleClose}
                  component="a"
                  href={subItem.link}
                >
                  {subItem.label}
                </MenuItem>
              ))}
            </Menu>
          )}
        </div>
      ))}
      <div className="text-xl font-semibold cursor-pointer ml-5">
        <IoSearch />
      </div>
    </div>
  );
}
