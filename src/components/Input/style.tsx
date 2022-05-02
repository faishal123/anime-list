import styled from "@emotion/styled";

export const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #505050;
  outline: none;
  border-radius: 5px;
  background: #303030;
  color: #efefef;
  font-size: 16px;
  transition: 0.1s;
  fontfamily: '"Jaldi", sans-serif';
  &:focus {
    transition: 0.1s;
    border: 1px solid #909090;
  }
`;
