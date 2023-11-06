import { IQuestionCardInfo } from "../../../types";
import {
  Typography,
  Empty,
  Tag,
  Spin,
  Space,
  Button,
  Popconfirm,
  message,
} from "antd";
import Styles from "./index.module.scss";
import Table, { ColumnsType } from "antd/es/table";
import Search from "../../../components/Search";
import useLoadQuestionListData from "../../../hooks/useLoadQuestionListData";
import { useState } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { deleteQuestions, updateQuestion } from "../../../api";
import { useRequest } from "ahooks";

const { Title } = Typography;

const Trash: React.FC = () => {
  const [selectIds, setSelectIds] = useState<string[]>([]);
  const {
    data = {},
    loading,
    refresh,
  } = useLoadQuestionListData({ isDeleted: true });
  const { list: questionList = [], total: totalNumber = 0 } = data;

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

  /** 恢复 */
  const restoreSelectedFn = async () => {
    for await (const id of selectIds) {
      await updateQuestion(id, { isDeleted: false });
    }
  };

  /** 批量彻底删除 */
  const deleteSelectedBatchFn = async () => {
    await deleteQuestions(selectIds);
  };

  const { loading: restoreLoading, run: restoreSelected } = useRequest(
    restoreSelectedFn,
    {
      manual: true,
      onSuccess() {
        message.success("恢复成功");
        refresh();
        setSelectIds([])
      },
    }
  );

  const { loading: batchDeleteLoading, run: deleteSelected } = useRequest(
    deleteSelectedBatchFn,
    {
      manual: true,
      onSuccess() {
        message.success("批量删除成功");
        refresh();
        setSelectIds([])
      },
    }
  );

  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={Styles.right}>
          <Search />
        </div>
      </div>
      <div className={Styles.options}>
        <Space>
          <Button
            disabled={!selectIds.length}
            onClick={restoreSelected}
            loading={restoreLoading}
          >
            恢复
          </Button>
          <Popconfirm
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            title="确定删除所选项?"
            okText="确定"
            cancelText="取消"
            onConfirm={deleteSelected}
          >
            <Button
              danger
              disabled={!selectIds.length}
              loading={batchDeleteLoading}
            >
              彻底删除
            </Button>
          </Popconfirm>
        </Space>
      </div>
      <div className={Styles.content}>
        {loading && (
          <div className={Styles.spin}>
            <Spin />
          </div>
        )}
        {!loading && !questionList.length && <Empty description="暂无数据" />}
        {questionList.length > 0 && (
          <Table
            dataSource={questionList}
            columns={tableColums}
            pagination={false}
            rowKey={(it) => it._id}
            rowSelection={{
              type: "checkbox",
              onChange: (rowKeys) => {
                setSelectIds(rowKeys as string[]);
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default Trash;
