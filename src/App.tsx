import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, ConfigProvider, Menu, Breadcrumb, FloatButton } from "antd";
import {
  BookOutlined,
  HomeOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import Home from "./pages/Home";
import LessonDetail from "./pages/LessonDetail";
import "./App.css";
import Resources from "./pages/Resources";

const { Header, Content, Footer } = Layout;

// Cấu hình Theme Học thuật/Chuyên nghiệp
const themeConfig = {
  token: {
    colorPrimary: "#0050b3", // Xanh dương đậm (Academic Blue)
    borderRadius: 6, // Bo góc nhỏ, sắc nét
    fontFamily: "'Inter', sans-serif",
    colorBgLayout: "#f0f2f5",
    colorLink: "#0050b3",
  },
  components: {
    Layout: {
      headerBg: "#001529", // Header màu tối (Phong cách doanh nghiệp/giáo dục)
      headerColor: "#FFF",
    },
    Card: {
      boxShadowTertiary: "0 1px 2px rgba(0,0,0,0.05)", // Bóng đổ tối giản
    },
  },
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          {/* Thanh điều hướng chuyên nghiệp */}
          <Header
            style={{ display: "flex", alignItems: "center", padding: "0 24px" }}
          >
            <div
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Merriweather, serif",
                marginRight: 40,
              }}
            >
              <BookOutlined style={{ marginRight: 8 }} />
              Tiếng Trung 101
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={[
                { key: "1", label: <Link to="/">Giáo trình</Link> },
                {
                  key: "2",
                  label: <Link to="/tai-lieu">Tài liệu tham khảo</Link>,
                },
              ]}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>

          <Content style={{ padding: "0 50px", marginTop: 24 }}>
            {/* Breadcrumbs (Đường dẫn điều hướng) */}
            <Breadcrumb
              style={{ margin: "16px 0" }}
              items={[
                {
                  title: (
                    <Link to="/">
                      <HomeOutlined /> Trang chủ
                    </Link>
                  ),
                },
                { title: "Nội dung bài học" },
              ]}
            />

            <div style={{ background: "#f0f2f5", minHeight: 380 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bai-hoc/:id" element={<LessonDetail />} />
                <Route path="/tai-lieu" element={<Resources />} />
              </Routes>
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Học tiếng Trung Quốc ©{new Date().getFullYear()}
          </Footer>
          <FloatButton.BackTop
            tooltip={<div>Lên đầu trang</div>}
            type="primary"
            style={{ right: 24, bottom: 24 }}
            icon={<VerticalAlignTopOutlined />}
          />
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
