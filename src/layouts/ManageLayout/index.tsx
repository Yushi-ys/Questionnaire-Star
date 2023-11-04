import { Outlet } from "react-router-dom";
import Styles from "./index.module.scss";
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";

const ManageLayout: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.left}>
        <Button type="primary" size="large" icon={<PlusOutlined />}>
          创建问卷
        </Button>
        <Space direction="vertical" className={Styles.options}>
          <div>
            <Button icon={<UnorderedListOutlined />}>我的问卷</Button>
          </div>
          <div>
            <Button icon={<StarOutlined />}>星标问卷</Button>
          </div>
          <div>
            <Button icon={<DeleteOutlined />}>回收站</Button>
          </div>
        </Space>
      </div>
      <div className={Styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
