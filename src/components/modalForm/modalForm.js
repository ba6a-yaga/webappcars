import React from 'react'
import closeIcon from "../../static/closeIcon.svg";
import Button from "../button/button";
import Modal from "@material-ui/core/Modal/Modal";

class ModalForm extends React.Component {

    state = {
        modal: {
            open:false,
        },
    }

    handleOpenModal = () => {
        this.setState({
            modal: {
                open: true,
            }
        })
    }

    handleCloseModal = () => {
        this.setState({
            modal: {
                open: false,
            }
        })
    }

    render() {
        return (
            <Modal aria-labelledby="simple-modal-title"
                   aria-describedby="simple-modal-description"
                   open={this.state.modal.open}
                   onClose={this.handleCloseModal}
            >
                <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
                    <div className={'modalForm'}>
                        <img onClick={this.handleCloseModal} className={'modalCloseIcon'} alt={''} src={closeIcon}
                             width={25} height={25}/>
                        <div className={'modalTitle'}>Оставьте свои данные,и мы вам перезвоним</div>
                        <input type={'text'} placeholder={'Ваше имя'}/>
                        <input type={'text'} placeholder={'Email'}/>
                        <input type={'text'} placeholder={'+7 ( ___ ) ___-__-__'}/>
                        <a target="_blank" rel="noopener noreferrer" href="https://policies.google.com/privacy?hl=ru&gl=ua" className={'modalConditionsText'}>Даю согласие на обработку своих персональных данных</a>
                        <Button text={"Отправить"}
                                className={'block1-btn'}
                                textProperties={{
                                    color: '#FFF',
                                }}
                                styleProperties={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                    width: 160,
                                    height: 42,
                                    paddingTop: 5,
                                    cursor: 'pointer',
                                    zIndex: 2,
                                    backgroundColor: '#FF1F27',
                                    transition: 'background-color 300ms',
                                    ':hover': {
                                        backgroundColor: 'gray'
                                    },
                                    ':active': {
                                        backgroundColor: 'gray',
                                    }
                                }}>
                        </Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalForm