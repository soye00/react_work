import React from 'react';
import {Modal} from "antd";
import {useNavigate} from "react-router-dom";


function Logout(props) {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = React.useState(false);
    const showModal = () => {
        setOpenModal(true);
    }
    const okModal = () => {
        setOpenModal(false);
        sessionStorage.clear();
        navigate('/user/login');
        navigate('/');
        navigate('/user/login');
    }
    const cancelModal = () => {
        setOpenModal(false);
    }
    return (
        <div>
            <h1 onClick={showModal}>로그아웃</h1>
            <Modal title={'로그아웃'} open={openModal}  onOk={okModal} onCancel={cancelModal}>
                <h1>로그아웃 할거?</h1>

            </Modal>
        </div>
    );
}

export default Logout;