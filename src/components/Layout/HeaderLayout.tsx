import {
  BellOutlined,
  QuestionCircleOutlined,
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex, Image } from "antd";
import { Header } from "antd/es/layout/layout";
import { NavItemModel } from "./NavItemModel.ts";
import Search from "antd/es/input/Search";
import NavItems from "./NavItems.tsx";

export default function HeaderLayout() {
  const navItems: NavItemModel[] = [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Giới thiệu",
      href: "/introduction",
    },
    {
      title: "Khoá học",
      href: "/courses",
    },
    {
      title: "Thi đấu",
      href: "/competition",
    },
    {
      title: "Tải app",
      href: "/download-app",
    },
  ];
  return (
    <>
      <Header className="w-full h-10 bg-blueHeader">
        <Flex
          gap="small"
          justify="flex-end"
          className="max-w-screen-2xl mx-auto pt-1"
        >
          <Button type="link" href="/notification" className="text-white">
            <BellOutlined /> Thông báo
          </Button>
          <Button type="link" href="/support" className="text-white">
            <QuestionCircleOutlined /> Hỗ trợ
          </Button>
        </Flex>
      </Header>
      <div className="w-full">
        <Flex align={"center"} justify={"center"} className="w-full h-28">
          <Flex align="center" className="max-w-screen-2xl mx-auto h-20 px-4">
            <Button type="link" href="/" className="px-0">
              <Image src="../public/logo.png" height={50} preview={false} />
            </Button>

            <div className="flex-1 ml-8">
              <Flex gap="middle" align="center">
                <NavItems navItems={navItems} />
              </Flex>
            </div>

            <Flex gap="middle" align="center">
              <Search
                placeholder="Tìm kiếm"
                allowClear
                className="w-64"
                onSearch={() => {}}
              />
              <Button
                type="text"
                className="bg-buy-500 hover:bg-buy-700 rounded-full"
                href={"/buy"}
              >
                <span>
                  <ShopOutlined />
                </span>
                <span className="text-white">Mua sắm</span>
              </Button>
              <Button
                type="link"
                className="text-textGrey-800 pb-3 border border-borderColor rounded-full"
              >
                <ShoppingOutlined className="text-xl" />
              </Button>
              <Button
                type="link"
                className="text-textGrey-800 pb-3 border border-borderColor rounded-full"
              >
                <UserOutlined className="text-xl" />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
