import React from "react";
import Content from "./Context";
import Header from "./Header";
import Footer from "./Footer";
// isDark 를 실질적으로 사용하지 않고, 자녀 컴포넌트들에게 전달하는 역할
// data 필요하지 않음 !
const Page = () => {
    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};
export default Page;