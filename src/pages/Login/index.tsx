import { Form, Input, Button, Space, Typography, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { ILogin } from "../../types";
import Styles from "./index.module.scss";
import { CSSProperties, useState } from "react";
import { login } from "../../api";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import { MANAGE_INDEX_PATHNAME } from "../../router";
import { USER_TOKEN } from "../../constant";

const { Title } = Typography;

const InputStyle: CSSProperties = {
  width: "300px",
};

const Login: React.FC = () => {
  const jumpUrl = useNavigate();
  // 登陆成功之后，会有个定时器的跳转，在这期间不可以再次点击 button
  const [btnStatu, setBtnStatu] = useState(false);
  const onSubmit = async (values: ILogin) => {
    const { username, password } = values;
    return await login(username, password);
  };

  const { loading: loginLoading, run: onLogin } = useRequest(onSubmit, {
    manual: true,
    onSuccess(result) {
      const { token } = result;
      localStorage.setItem(USER_TOKEN, token);
      message.success("登陆成功, 即将跳转首页");
      setBtnStatu(true);
      setTimeout(() => {
        jumpUrl(MANAGE_INDEX_PATHNAME);
      }, 1000);
    },
  });

  return (
    <div className={Styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>登录</Title>
        </Space>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onLogin}
      >
        <Form.Item<ILogin>
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名！" }]}
        >
          <Input style={InputStyle} />
        </Form.Item>

        <Form.Item<ILogin>
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码！" }]}
        >
          <Input.Password style={InputStyle} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={InputStyle}
            loading={loginLoading}
            disabled={btnStatu}
          >
            立即登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
