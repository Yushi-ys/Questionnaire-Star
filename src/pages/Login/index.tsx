import { Form, Input, Checkbox, Button, Space, Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { ILogin } from "../../types";
import Styles from "./index.module.scss";
import { CSSProperties } from "react";

const { Title } = Typography;

const InputStyle: CSSProperties = {
  width: "300px",
};

const Login: React.FC = () => {
  const onSubmit = (values: ILogin) => {
    const { username, password, remember } = values;
    console.log(username, password, remember);
  };

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
        onFinish={onSubmit}
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

        <Form.Item<ILogin>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
