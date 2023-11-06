import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IQuestionCardInfo } from "../../types";
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Space, Divider, Tag, Popconfirm } from "antd";
import Styles from "./index.module.scss";
import { updateQuestion } from "../../api";
import { useRequest } from "ahooks";

const QuestionCard: React.FC<IQuestionCardInfo> = (props) => {
  const jumpUrl = useNavigate();
  const [deleteId, setDeleteId] = useState<string>();

  const { _id, answerCount, createAt, isPublished, isStar, title } = props;

  const onDelete = async (id: string) => {
    await updateQuestion(id, { isDeleted: true });
  };

  const { loading, run: deleteQuestion } = useRequest(onDelete, {
    manual: true,
    onSuccess() {
      setDeleteId(_id);
    },
  });

  if (deleteId === _id) return <></>;

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <div className={Styles.left}>
          <Link
            to={
              isPublished
                ? `/question/statistics/${_id}`
                : `/question/edit/${_id}`
            }
          >
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={Styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="green">已发布</Tag>
            ) : (
              <Tag color="red">未发布</Tag>
            )}
            <span>答卷：{answerCount}</span>
            <span>{createAt}</span>
          </Space>
        </div>
      </div>
      <Divider />
      <div className={Styles["btn-wrapper"]}>
        <div className={Styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => jumpUrl(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => jumpUrl(`/question/statistics/${_id}`)}
              disabled={isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={Styles.right}>
          <Space>
            <Button type="text" icon={<StarOutlined />}>
              {isStar ? "取消星标" : "星标"}
            </Button>
            <Popconfirm
              title="确定复制该问卷?"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {}}
            >
              <Button type="text" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>
            <Popconfirm
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              title="确定删除该问卷?"
              okText="确定"
              cancelText="取消"
              onConfirm={() => deleteQuestion(_id)}
            >
              <Button type="text" icon={<DeleteOutlined />} loading={loading}>
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
