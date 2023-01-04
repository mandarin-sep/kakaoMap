import styled from "@emotion/styled";
import { FormEvent, useState } from "react";

const SearchLocation = () => {
  const [keyword, setKeyword] = useState("");
  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handlesubmit}>
        <Input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </Form>
      <List>
        {Array.from({ length: 70 }).map((item, index) => {
          return (
            <Item key={index}>
              <label>지역</label>
              <span>수원 권선구 곡반정동 577-4</span>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  opacity: 0.8;
  overflow-y: auto;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  position: sticky;
  top: 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 8px;
  border: 1px solid #c0c0c0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-bottom: 1px dashed #d2d2d2;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
    trasition: background-color 0s;
  }
`;

export default SearchLocation;
