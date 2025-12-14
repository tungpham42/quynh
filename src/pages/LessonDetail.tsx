import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Tabs, Table, Divider } from "antd";
import {
  SoundOutlined,
  ArrowLeftOutlined,
  ReadOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { lessons } from "../data";
import { speak } from "../utils/speech";

const { Title, Paragraph, Text } = Typography;

const LessonDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) return <div>Không tìm thấy bài học trong hệ thống.</div>;

  // 1. Giao diện Bảng từ vựng (Table View)
  // Phù hợp cho việc tra cứu và học thuật
  const columns = [
    {
      title: "Hán tự",
      dataIndex: "hanzi",
      key: "hanzi",
      render: (text: string) => (
        <span
          className="hanzi-text"
          style={{ fontSize: "28px", fontWeight: "bold" }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Phiên âm (Pinyin)",
      dataIndex: "pinyin",
      key: "pinyin",
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: "Định nghĩa",
      dataIndex: "meaning",
      key: "meaning",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          size="small"
          icon={<SoundOutlined />}
          onClick={() => speak(record.hanzi)}
        >
          Phát âm
        </Button>
      ),
    },
  ];

  const VocabSection = () => (
    <Card bordered={false} title="Thuật ngữ mới">
      <Table
        dataSource={lesson.vocab}
        columns={columns}
        pagination={false}
        rowKey="hanzi"
        bordered
        size="middle"
      />
    </Card>
  );

  // 2. Giao diện Kịch bản hội thoại (Transcript View)
  // Trình bày giống như kịch bản văn học hoặc giáo trình
  const DialogueSection = () => (
    <Card bordered={false} title="Nội dung hội thoại">
      <div className="script-container">
        {lesson.dialogue.map((line, idx) => (
          <div
            key={idx}
            className="script-line"
            onClick={() => speak(line.hanzi)}
          >
            <div className="speaker-label">{line.speaker}:</div>
            <div className="script-content">
              <div className="hanzi-text" style={{ fontSize: "20px" }}>
                {line.hanzi}
              </div>
              <div style={{ color: "#0050b3", fontWeight: 500 }}>
                {line.pinyin}
              </div>
              <div
                style={{
                  color: "#8c8c8c",
                  fontStyle: "italic",
                  fontSize: "13px",
                }}
              >
                {line.meaning}
              </div>
            </div>
            <Button type="text" icon={<SoundOutlined />} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, textAlign: "right" }}>
        <Text type="secondary" italic>
          * Nhấn vào bất kỳ dòng nào để nghe âm thanh.
        </Text>
      </div>
    </Card>
  );

  return (
    <div style={{ paddingBottom: "40px" }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate("/")}
        style={{ marginBottom: 16 }}
      >
        Quay lại Giáo trình
      </Button>

      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "6px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Title level={2}>{lesson.title}</Title>
        <Paragraph type="secondary" style={{ fontSize: "16px" }}>
          {lesson.description}
        </Paragraph>
      </div>

      <Divider />

      <Tabs
        defaultActiveKey="1"
        type="card"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <span>
                <ReadOutlined /> Danh sách từ vựng
              </span>
            ),
            children: <VocabSection />,
          },
          {
            key: "2",
            label: (
              <span>
                <CommentOutlined /> Kịch bản hội thoại
              </span>
            ),
            children: <DialogueSection />,
          },
        ]}
      />
    </div>
  );
};

export default LessonDetail;
