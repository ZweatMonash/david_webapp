import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 50px 10px;
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
  }
`;

export const SkillsCard = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 150px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    background: #003;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    border-radius: 5px;
    height: 120px;
    width: 120px;
    padding: 30px;
  }
`;

export const SkillsIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #000;
  margin-bottom: 15px;

  @media screen and (max-width: 786px) {
    font-size: 1rem;
  }
`;

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;

  @media screen and (max-width: 786px) {
    font-size: 0.6rem;
  }
`;
