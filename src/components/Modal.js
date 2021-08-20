import React, {useRef,useEffect,useCallback} from 'react'
import {useSpring,animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import FormComp from './FormComp'
import './Modal.css'

const Background = styled.div`
  width: 100%;
  height: 90%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 1000px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 0px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background-image: linear-gradient(to right top, #0099ff, #24a4ff, #3caeff, #52b8ff, #66c2ff);
    color: rgb(250,250,250);
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({showModal,setShowModal}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal  ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false)
        }
    }

    return(
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ModalWrapper showModal={showModal}>
                      <div className="container-welcome">
                        <h4>Welcome to</h4>
                        <h2>Magnificent Accounting</h2>
                        <hr/>
                        <p>Login to your personal account</p>
                      </div>
                        <ModalContent>
                            <FormComp />
                            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(
                                prev=> !prev
                            )}/>
                        </ModalContent>
                    </ModalWrapper>
                </animated.div>
                </Background>
            ) : null}
        </>
    )
}