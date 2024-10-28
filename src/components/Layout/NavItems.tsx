import { Button } from "antd";
import { NavItemModel } from "./NavItemModel.ts";

interface NavItemProps {
  navItems: NavItemModel[];
}

export default function NavItems(props: NavItemProps) {
  return (
    <>
      {props.navItems.map((item, index) => {
        return (
          <Button
            type={"link"}
            className="text-black text-base font-medium"
            href={item.href}
            key={index}
          >
            {item.title}
          </Button>
        );
      })}
    </>
  );
}
