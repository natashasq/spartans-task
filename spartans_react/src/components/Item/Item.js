import { StyledItem } from "./Item.styled";

export default function Item({ name, origin }) {
  return (
    <StyledItem>
      <h3>{name}</h3>
      <p>{origin}</p>
    </StyledItem>
  );
}
