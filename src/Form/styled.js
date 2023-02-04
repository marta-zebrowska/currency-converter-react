import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
    border-radius: 20px;
    padding: 10px;
    background-color: white;
    border: 1px solid #aaa;
`;
    
export const Legend = styled.legend`
    background-color: #39206b;
    color: white;
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
border: 1px solid #dc83dc;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    max-width: 500px;
`;
    
export const StyledButton = styled.button`
    width: 100%;
    background-color: #39206b;
    color: white;
    margin-top: 20px;
    padding: 15px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

&:hover {
    background-color: hsl(260, 54%, 35%);
}

&:active {
    background-color: hsl(260, 54%, 40%);
}
`;