import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HOME_PATHNAME } from "../../router";
import styles from "./index.module.scss";

const { Title } = Typography;

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to={HOME_PATHNAME}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>毕业设计</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;
