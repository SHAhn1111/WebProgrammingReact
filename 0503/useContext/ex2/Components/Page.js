// page 컴포넌트
import React, { useContext } from "react";
import Content from "./Context";
import Header from "./Header";
import Footer from "./Footer";
const Page = ({ isDark, setIsDark }) => {
    return (
        <div className="page">
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
};
export default Page;
