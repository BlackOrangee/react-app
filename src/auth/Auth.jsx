import React, { useState } from "react";
import { Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Registration from "./Registration";
import Login from "./Login";
const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setIsLoginForm(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      <Button type="primary" shape="circle" onClick={showModal} icon={<UserOutlined />} />

      <Modal
        title={isLoginForm ? "Login" : "Registration"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {isLoginForm ? <Login /> : <Registration />}
        
        <Button style={{ marginTop: "40px", position: "absolute", right: "20px", bottom : "20px" }} onClick={toggleForm}>
          {isLoginForm ? "Registration" : "Login"}
        </Button>
      </Modal>
    </>
  );
};
export default Auth;