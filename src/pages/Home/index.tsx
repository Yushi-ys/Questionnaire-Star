import { useNavigate } from "react-router-dom";
import Styles from "./index.module.scss";
import { Button, Typography } from "antd";
import { MANAGE_INDEX_PATHNAME } from "../../router";

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const jumpUrl = useNavigate();

  return (
    <div className={Styles.container}>
      <div className={Styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => jumpUrl(MANAGE_INDEX_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
