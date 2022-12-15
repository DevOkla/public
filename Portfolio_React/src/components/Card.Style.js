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
  background-color: transparent;
`;
export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0582e1;
  font-size: 7rem;
  border-radius: 1rem;
  @media (max-width: 950px) {
    &:hover {
    backface-visibility: hidden;
    transition: transform 0.8s;
  }
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
  padding: 2rem 1.3rem;
  border-radius: 1rem;
  transform: rotateY(180deg);
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
  margin: 0.5rem 1.3rem 0 0;
  width: 4.1rem;
  padding: 0 0.1rem;
  height: 2.25rem;
  align-items: center;
  border: 1px solid gray;
  outline: none;
  display: flex;
  justify-content: space-between;

`;
export const Green = styled.div`
  width: 0.6rem;
  height: 1.9rem;
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
  width: 0.6rem;
  height: 1.9rem;
  background: linear-gradient(
    to bottom,
    #84606095,
    #c7a9a995,
    #dbcece95,
    #c7a9a995,
    #89646495
  );
`;
