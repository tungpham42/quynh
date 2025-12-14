import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
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
    colorPrimary: "#0050b3",
    borderRadius: 6,
    fontFamily: "'Inter', sans-serif",
    colorBgLayout: "#f0f2f5",
    colorLink: "#0050b3",
  },
  components: {
    Layout: {
      headerBg: "#001529",
      headerColor: "#FFF",
    },
    Card: {
      boxShadowTertiary: "0 1px 2px rgba(0,0,0,0.05)",
    },
  },
};

// 1. Create a separate component for the content to use useLocation
const AppLayout: React.FC = () => {
  const location = useLocation();

  // 2. Logic to determine which menu key is active based on the path
  const getSelectedKey = () => {
    if (location.pathname === "/tai-lieu") {
      return ["2"];
    }
    // Default to "1" for Home ("/") and Lesson Details ("/bai-hoc/...")
    return ["1"];
  };

  return (
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
          // 3. Use selectedKeys for dynamic control
          selectedKeys={getSelectedKey()}
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
        {/* Breadcrumbs */}
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
            // Optional: Dynamic breadcrumb logic can be added here
            {
              title: location.pathname.includes("bai-hoc")
                ? "Nội dung bài học"
                : "Danh mục",
            },
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
  );
};

// 4. Main App component wraps everything in Router
const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Router>
        <AppLayout />
      </Router>
    </ConfigProvider>
  );
};

export default App;
