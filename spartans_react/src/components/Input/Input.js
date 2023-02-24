import { StyledInput } from "./Input.styled";

export default function Input({ onChange, value }) {
  return <StyledInput onChange={onChange} value={value} placeholder="Start typing..."/>;
}
