import { Form, Input, Button, Space, Typography, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { IRegister } from "../../types";
import Styles from "./index.module.scss";
import { CSSProperties, useState } from "react";
import { useRequest } from "ahooks";
import { register } from "../../api";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../../router";

const { Title } = Typography;

const InputStyle: CSSProperties = {
  width: "300px",
};

const Register: React.FC = () => {
  const jumpUrl = useNavigate();
  // 注册成功之后，会有个定时器的跳转，在这期间不可以再次点击 button
  const [btnStatu, setBtnStatu] = useState(false);

  const onSubmit = async (values: IRegister) => {
    const { username, password, confirm_password } = values;
    if (password !== confirm_password) {
      return message.error("两次密码输入不一致");
    }
    await register(username, password);
  };

  const { loading: registerLoading, run: onRegister } = useRequest(onSubmit, {
    manual: true,
    onSuccess() {
      message.success("注册成功, 即将跳转登陆页面");
      setBtnStatu(true);
      setTimeout(() => {
        jumpUrl(LOGIN_PATHNAME);
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
        onFinish={onRegister}
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
          <Button
            type="primary"
            htmlType="submit"
            block
            style={InputStyle}
            loading={registerLoading}
            disabled={btnStatu}
          >
            立即注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
