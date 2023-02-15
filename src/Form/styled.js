import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border-radius: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.musselWhite};
  border: 1px solid ${({ theme }) => theme.color.pastelGray};
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.deepKoamaru};
  color: ${({ theme }) => theme.color.musselWhite};
  padding: 20px;
  font-weight: bold;
  border-radius: 20px;
`;

export const Label = styled.span`
  width: 100%;
  display: inline-block;
  max-width: 150px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.color.deepMauve};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.color.deepKoamaru};
  color: ${({ theme }) => theme.color.musselWhite};
  margin-top: 20px;
  padding: 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.deepKoamaru};
  text-align: center;
`;

export const StyledError = styled.p`
  color: ${({ theme }) => theme.color.crimson};
  text-align: center;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.deepKoamaru};
  text-align: center;
`;
