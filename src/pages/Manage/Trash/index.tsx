import { useState } from "react";
import { IQuestionCardInfo } from "../../../types";
import { Typography, Empty, Tag } from "antd";
import Styles from "./index.module.scss";
import Table, { ColumnsType } from "antd/es/table";

const { Title } = Typography;

const Trash: React.FC = () => {
  const [questionList, setQuestionList] = useState<IQuestionCardInfo[]>([
    {
      _id: "001",
      title: "问卷1",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
    {
      _id: "002",
      title: "问卷2",
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
    {
      _id: "003",
      title: "问卷3",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
    {
      _id: "004",
      title: "问卷4",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
  ]);

  const tableColums: ColumnsType<IQuestionCardInfo> = [
    {
      title: "标题",
      dataIndex: "title",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="green">已发布</Tag>
        ) : (
          <Tag color="red">未发布</Tag>
        );
      },
    },
    {
      title: "答卷",
      dataIndex: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
    },
  ];

  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={Styles.right}>
          <h3>search</h3>
        </div>
      </div>
      <div className={Styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && (
          <Table
            dataSource={questionList}
            columns={tableColums}
            pagination={false}
          />
        )}
      </div>
    </>
  );
};

export default Trash;
