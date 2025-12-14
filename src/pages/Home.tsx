import React from "react";
import { Card, Typography, Row, Col, Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { ReadOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { lessons } from "../data";

const { Title, Text } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          marginBottom: "32px",
          borderBottom: "1px solid #d9d9d9",
          paddingBottom: "16px",
        }}
      >
        <Title level={2} style={{ marginTop: 0 }}>
          Đề cương khóa học
        </Title>
        <Text type="secondary">
          Vui lòng chọn một học phần bên dưới để bắt đầu phiên học tập.
        </Text>
      </div>

      <Row gutter={[16, 16]}>
        {lessons.map((item, index) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <Card
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Tag color="blue">Học phần {index + 1}</Tag>
                  <span style={{ fontSize: "16px" }}>
                    {item.title.split(":")[1]}
                  </span>
                </div>
              }
              extra={
                <Button
                  type="link"
                  onClick={() => navigate(`/bai-hoc/${item.id}`)}
                >
                  Bắt đầu
                </Button>
              }
              style={{ height: "100%" }}
              actions={[
                <div
                  key="vocab"
                  onClick={() => navigate(`/bai-hoc/${item.id}`)}
                >
                  <ReadOutlined /> {item.vocab.length} Từ vựng
                </div>,
                <div
                  key="action"
                  onClick={() => navigate(`/bai-hoc/${item.id}`)}
                >
                  Vào học <ArrowRightOutlined />
                </div>,
              ]}
            >
              <div style={{ height: "60px" }}>
                <Text type="secondary">{item.description}</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
