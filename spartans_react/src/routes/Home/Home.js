import useCats from "../../hooks/api/useCats";

//components
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { InputWrapper, ItemsWrapper } from "./Home.styled";
import Item from "../../components/Item/Item";

export default function Home() {
  const {
    data,
    value,
    loading,
    setValue,
    handleNextPage,
    handlePreviousPage,
    error,
  } = useCats();

  return (
    <div>
      <InputWrapper>
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
        <Button onClick={handlePreviousPage} text="Previous Page" />
        <Button onClick={handleNextPage} text="Next Page" />
      </InputWrapper>
      <ItemsWrapper>
      {!data.length && !loading && <h3>No cats to show.</h3>}
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        data.map((item) => 
         <Item name={item.name} origin={item.origin}/>
        )
      )}
      {error && <h3>Something bad happened...</h3>}
      </ItemsWrapper>
    </div>
  );
}
