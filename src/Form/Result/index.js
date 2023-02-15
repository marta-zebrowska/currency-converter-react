import "./styled.js";
import { StyledResult } from "./styled";

export const Result = ({ result }) => (
    <StyledResult>
      {result !== "" && (
                <>
                    {result.amount}&nbsp;PLN&nbsp;={" "}
                    <strong>{result.targetAmount.toFixed(2)}&nbsp;{result.currency}</strong>
                </>
            )}
  </StyledResult>
)