import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Styles from "./index.module.scss";
import Logo from "../../components/Logo";
import UserInfo from "../../components/UserInfo";
import { USER_NAME } from "../../constant";

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Header className={Styles.header}>
        <div className={Styles.left}>
          <Logo />
        </div>
        <div className={Styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Layout className={Styles.main}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer className={Styles.footer}>Created By {USER_NAME}</Footer>
    </Layout>
  );
};

export default MainLayout;
