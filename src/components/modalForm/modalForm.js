import React from 'react'
import closeIcon from "../../static/closeIcon.svg";
import Button from "../button/button";
import Modal from "@material-ui/core/Modal/Modal";
import firebase from '../../firebase';

String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};

class ModalForm extends React.Component {

    state = {
        modal: {
            open:false,
        },
        email: "",
        name:"",
        phone:"",
        numbers:[],
        isValid:{
            email:false,
            name:false,
            phone:false,
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

    uuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4();
    }

    submitForm = () => {
        let isValid = true
        Object.keys(this.state.isValid).forEach((k)=>{
            console.log("key:",k)
            if (!this.state.isValid[k]) {
                isValid = false
                // Добавляем стиль
                switch(k) {
                    case "name":
                        console.log("name - is not valid")
                        let inputName = document.getElementById('inputName')
                        inputName.classList.add("isNotValid")
                        break
                    case "email":
                        console.log("email - is not valid")
                        let inputEmail = document.getElementById('inputEmail')
                        inputEmail.classList.add("isNotValid")
                        break
                    default:
                        console.log("phone - is not valid")
                        let inputPhone = document.getElementById('inputPhone')
                        inputPhone.classList.add("isNotValid")
                }
            }
        })
        if (isValid) {
            console.log("success:",isValid)
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            db.collection('message').add({
                name:this.state.name,
                email:this.state.email,
                phone:this.state.phone,
            })
                .then(
                    this.handleCloseModal()
                )
        }

    }

    handleInputName = (e) => {
        let inputName = document.getElementById('inputName');
        const alphaExp = /^[a-zA-Zа-яА-Я]+$/;
        if(e.target.value.match(alphaExp)){
            this.setState({
                name:e.target.value,
                isValid:{
                    name:true,
                    email:this.state.isValid.email,
                    phone:this.state.isValid.phone,
                }
            })
            inputName.classList.remove("isNotValid")
        } else {
            this.setState({isValid:{name:false}})
            inputName.classList.add("isNotValid")
        }
    }

    handleInputEmail = (e) => {
        let inputEmail = document.getElementById('inputEmail');
        const emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value.match(emailExp)){
            this.setState({
                email:e.target.value,
                isValid:{
                    email:true,
                    phone:this.state.isValid.phone,
                    name:this.state.isValid.name,
                }
            })
            inputEmail.classList.remove("isNotValid")
        } else {
            this.setState({isValid:{email:false}})
            inputEmail.classList.add("isNotValid")
        }
    }

    changeTemplate = (n) => {
        let template = `+7 (___) ___-__-__`
        console.log("n",n)
        if (n.length <= 3) {
            template = `+7 (${n.join("")}) ___-__-__`
            console.log(template)
        } else if (n.length <= 6) {
            template = `+7 (${n.slice(0,3).join("")}) ${n.slice(3,6).join("")}-__-__`
            console.log(template)
        } else if (n.length <= 8) {
            template = `+7 (${n.slice(0,3).join("")}) ${n.slice(3,6).join("")}-${n.slice(6,8).join("")}-__`
            console.log(template)
        } else if (n.length <= 10) {
            template = `+7 (${n.slice(0,3).join("")}) ${n.slice(3,6).join("")}-${n.slice(6,8).join("")}-${n.slice(8,10).join("")}`
            console.log(template)
        }
        this.setState({
            phone:template,
            numbers:n,
        })
    }

    handleInputPhone = (e) => {
        let inputPhone = document.getElementById('inputPhone');
        const numbers = this.state.numbers
        const exp = /^[0-9]*$/
        const lastValue = e.target.value.substr(e.target.value.length-1)
        console.log("lastValue",lastValue)

        if(lastValue.match(exp) && numbers.length < 10){
            numbers.push(lastValue)
            this.changeTemplate(numbers)
            console.log(lastValue)

            inputPhone.classList.add("isNotValid")
        } else if (numbers.length > 0) {
            numbers.pop()
            this.changeTemplate(numbers)

            inputPhone.classList.add("isNotValid")
        } else if (numbers.length === 10) {
            numbers.pop()
            this.changeTemplate(numbers)

            inputPhone.classList.add("isNotValid")
        }

        if (numbers.length === 10) {
            this.setState({
                isValid:{
                    phone:true,
                    name:this.state.isValid.name,
                    email:this.state.isValid.email,
                }
            })
            inputPhone.classList.remove("isNotValid")
        }
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
                        <input id="inputName" type={'text'} placeholder={'Ваше имя'} onInput={this.handleInputName}/>
                        <input id="inputEmail" type={'text'} placeholder={'Email'} onInput={this.handleInputEmail}/>
                        <input id="inputPhone" className="inputPhone" type={'text'} placeholder={'+7 ( ___ ) ___-__-__'} onInput={this.handleInputPhone} value={this.state.phone}/>
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
                                }}
                                onClick={this.submitForm}>
                        </Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalForm