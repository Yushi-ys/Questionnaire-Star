import { Button, Space, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { getUerInfo } from "../../api";
import { USER_TOKEN } from "../../constant";
import Styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../../router";

const UserInfo: React.FC = () => {
  const jumpUrl = useNavigate();
  const { data } = useRequest(getUerInfo);
  const { username = "" } = data || {};

  const logout = () => {
    localStorage.removeItem(USER_TOKEN);
    message.success("退出成功");
    setTimeout(() => {
      jumpUrl(LOGIN_PATHNAME);
    }, 1000);
  };

  return (
    <>
      <div className={Styles["username-text"]}>
        <Space>
          <UserOutlined />
          {username}
        </Space>
        <Button type="link" onClick={logout}>
          退出
        </Button>
      </div>
    </>
  );
};

export default UserInfo;
