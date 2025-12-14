import React from "react";
import { Card, List, Typography, Button, Tag, Row, Col } from "antd";
import {
  LinkOutlined,
  DownloadOutlined,
  BookOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const resourcesData = [
  {
    category: "Từ điển & Công cụ",
    items: [
      {
        title: "Hanzii Dict",
        desc: "Từ điển Trung-Việt tốt nhất hiện nay",
        url: "https://hanzii.net",
        tag: "Web/App",
      },
      {
        title: "Pleco",
        desc: "Từ điển tiếng Trung số 1 thế giới",
        url: "https://www.pleco.com",
        tag: "Mobile App",
      },
      {
        title: "MDBG",
        desc: "Từ điển Hán ngữ online tra cứu nhanh",
        url: "https://www.mdbg.net",
        tag: "Website",
      },
    ],
  },
];

const Resources: React.FC = () => {
  return (
    <div style={{ paddingBottom: 40 }}>
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "6px",
          border: "1px solid #f0f0f0",
          marginBottom: 24,
        }}
      >
        <Title level={2} style={{ marginTop: 0 }}>
          Tài liệu tham khảo
        </Title>
        <Text type="secondary">
          Tổng hợp các nguồn tài liệu, từ điển và công cụ hỗ trợ việc học tiếng
          Trung.
        </Text>
      </div>

      <Row gutter={[24, 24]}>
        {resourcesData.map((section, idx) => (
          <Col span={24} key={idx}>
            <Card
              title={
                <span>
                  <BookOutlined /> {section.category}
                </span>
              }
              bordered={false}
            >
              <List
                itemLayout="horizontal"
                dataSource={section.items}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      item.tag === "PDF" ? (
                        <Button
                          icon={<DownloadOutlined />}
                          type="primary"
                          ghost
                        >
                          Tải về
                        </Button>
                      ) : (
                        <Button
                          icon={<LinkOutlined />}
                          href={item.url}
                          target="_blank"
                        >
                          Truy cập
                        </Button>
                      ),
                    ]}
                  >
                    <List.Item.Meta
                      title={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ fontSize: 16, fontWeight: 600 }}
                          >
                            {item.title}
                          </a>
                          <Tag color="blue">{item.tag}</Tag>
                        </div>
                      }
                      description={item.desc}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resources;
