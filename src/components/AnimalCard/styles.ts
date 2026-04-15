import styled from "@emotion/styled";

export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 400px;
  padding: 30px;
  background: rgb(42, 19, 71);
  color: rgb(248, 250, 250);
  border-radius: 12px;
  font-size: 24px;

   & img{
    width: 200px;
    height: auto;
    border-radius: 8px;
  }
  `;

export const AnimalName = styled.h3`
margin: 0;
`;

export const AnimalSptcies = styled.div`
font-style: italic;
`


