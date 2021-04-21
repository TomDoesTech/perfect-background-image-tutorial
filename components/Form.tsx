import styled from "styled-components";

const Form = styled.form`
  background-color: rgba(256, 256, 256, 0.9);
  padding: 2rem;
  border-radius: 4px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: solid 1px #6e8efb;
`;

const Button = styled.button`
  border-radius: 4px;
  color: #6e8efb;
  border: solid 3px #6e8efb;
  padding: 5px 10px;
`;

function ExampleForm() {
  return (
    <Form>
      <Input placeholder="email" type="email" />
      <br />
      <Input placeholder="password" type="password" />
      <br />
      <Button>LOGIN</Button>
    </Form>
  );
}

export default ExampleForm;
