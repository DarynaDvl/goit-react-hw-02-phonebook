import styled from 'styled-components';

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 24px;

  + input {
    padding: 5px 10px;
    width: 100%;
    max-width: 300px;
    text-align: left;
    font-size: 20px;

    border: 2px solid #005086;
    border-radius: 10px;
  }
`;
