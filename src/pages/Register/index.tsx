import { Form, Input, Button, Space, Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { IRegister } from "../../types";
import Styles from "./index.module.scss";
import { CSSProperties } from "react";

const { Title } = Typography;

const InputStyle: CSSProperties = {
  width: "300px",
};

const Register: React.FC = () => {
  const onSubmit = (values: IRegister) => {
    const { username, password, confirm_password } = values;
    console.log(username, password, confirm_password);
  };

  return (
    <div className={Styles.container}>
      <div>
      <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册</Title>
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
        <Form.Item<IRegister>
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名！" }]}
        >
          <Input style={InputStyle} />
        </Form.Item>

        <Form.Item<IRegister>
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码！" }]}
        >
          <Input.Password style={InputStyle} />
        </Form.Item>

        <Form.Item<IRegister>
          label="确认密码"
          name="confirm_password"
          rules={[{ required: true, message: "请再次输入密码！" }]}
        >
          <Input.Password style={InputStyle} />
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

export default Register;
