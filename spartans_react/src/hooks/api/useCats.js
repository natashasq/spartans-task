import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { catsService } from "../../service/cats.service";
import useDebounce from "../useDebounce";

export default function useCats() {
  const params = useParams();

  const [value, setValue] = useState(params.name || "");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      navigate(`/${debouncedValue}/0`);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (params.name && params.offset) {
      setLoading(true);
      (async () => {
        try {
          const catsData = await catsService.getCats({
            name: params.name,
            offset: params.offset,
          });
          setData(catsData);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setError(err);
        }
      })();
    }
  }, [params]);

  const handleNextPage = (e) => {
    navigate(`/${params.name}/${parseInt(params.offset) + 20}`);
  };

  const handlePreviousPage = (e) => {
    const offset = parseInt(params.offset);

    navigate(`/${params.name}/${offset < 20 ? 0 : offset - 20}`);
  };

  return {
    value,
    setValue,
    loading,
    data,
    handleNextPage,
    handlePreviousPage,
    error,
  };
}
