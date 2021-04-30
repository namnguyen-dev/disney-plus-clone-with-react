import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';

const Detail = props => {


  return (
    <Container>
      <Background>
        <img
          alt=""
          src="https://i0.wp.com/thedisinsider.com/wp-content/uploads/2020/06/img_6841.jpg?fit=1280%2C720&ssl=1"
        />
      </Background>

      <ImageTitle>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>Subtitle</SubTitle>
        <Description>Description</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
