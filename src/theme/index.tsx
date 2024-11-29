import { ConfigProvider } from "antd";

function ThemProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#222831",
          borderRadius: 2,
        },
        components: {
          Button: {
            controlHeight: 45,
            controlOutline: "none",
          },
          Input: {
            controlHeight: 45,
            controlOutline: "none",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemProvider;
