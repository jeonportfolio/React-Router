import { useSearchParams } from "react-router-dom";

const Search = () => {
   
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");  

  return (
    <div>
        <h1>search Result: {query}</h1>
        <button onClick={() => setSearchParams({ q: "newQuery" })}>Update</button>
    </div>
  );
};

export default Search;