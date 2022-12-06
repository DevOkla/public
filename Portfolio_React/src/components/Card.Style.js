import styled from "styled-components";

export const Cards = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  width: 15rem;
  height: 15rem;
`;
export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0582e1;
  font-size: 7rem;

  border-radius: 1rem;
  transform: rotateY(0deg);
  &:hover {
    transform: rotateY(0);
  }
`;
export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background: linear-gradient(to top right, #b6b8f0, #7e9af5, #b7f386f1);
  color: black;
  text-align: left;
  padding: 2rem;
  border-radius: 1rem;

  transform: rotateY(180deg);
  scale: (-1, 1);
  &:hover {
    transform: rotateY(-180deg);
  }
`;
export const CardBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;

  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;
export const Bars = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 20px 0 0;
  width: 62px;
  padding: 0 2px;
  height: 36px;
  align-items: center;
  border: 1px solid gray;
  outline: none;
  display: flex;
  justify-content: space-between;
`;
export const Green = styled.div`
  width: 10px;
  height: 30px;
  outline: none;
  background: linear-gradient(
    to bottom,
    #019d1b,
    #1bc301,
    #34f217,
    #1bc301,
    #029c1c
  );
`;
export const Red = styled.div`
  width: 10px;
  outline: none;
  height: 30px;
  background: linear-gradient(
    to bottom,
    #a20202,
    #fa5757,
    #f99797,
    #fa5757,
    #a20202
  );
`;
