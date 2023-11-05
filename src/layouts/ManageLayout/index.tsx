import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Styles from "./index.module.scss";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Space, message } from "antd";
import { createQuestion } from "../../api";
import { useRequest } from "ahooks";

const ManageLayout: React.FC = () => {
  const jumpUrl = useNavigate();
  const { pathname } = useLocation();

  const { loading, run: handleCreateClick } = useRequest(createQuestion, {
    manual: true,
    onSuccess(res) {
      message.success("创建成功");
      jumpUrl(`/question/edit/${res.id}`);
    },
  });

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.left}>
        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          loading={loading}
          onClick={handleCreateClick}
        >
          创建问卷
        </Button>
        <Space direction="vertical" className={Styles.options}>
          <Button
            type={pathname.startsWith("/manage/list") ? "default" : "text"}
            icon={<BarsOutlined />}
            onClick={() => jumpUrl("/manage/list")}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith("/manage/star") ? "default" : "text"}
            icon={<StarOutlined />}
            onClick={() => jumpUrl("/manage/star")}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith("/manage/trash") ? "default" : "text"}
            icon={<DeleteOutlined />}
            onClick={() => jumpUrl("/manage/trash")}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={Styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
