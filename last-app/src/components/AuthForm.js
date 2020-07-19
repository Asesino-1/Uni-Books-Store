import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto; 
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background:  rgb(255, 154, 171);
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  color: white;
  font-weight: 700;
  width: 100%;
  transition: all 0.5s;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  position: relative;
  
`;


const Error = styled.div`
  background-color: red;
`;

export { Form, Input, Button, Card, Title, Error };
