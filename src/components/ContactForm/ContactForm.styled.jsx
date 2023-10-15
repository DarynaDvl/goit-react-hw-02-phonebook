import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
`;

export const StyledField = styled(Field)`
  padding: 5px 5px;
  width: 100%;

  text-align: left;
  font-size: 24px;
  border: 2px solid #005086;
  border-radius: 10px;

  margin-bottom: 10px;
`;

export const StyledBtn = styled.button`
  margin-top: 12px;

  padding: 5px 15px;
  flex-basis: 15%;

  font-size: 20px;
  font-weight: 500;

  border: 2px solid #005086;
  border-radius: 10px;
  background-color: #bfd3dfdf;

  cursor: pointer;
`;
