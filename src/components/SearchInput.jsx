import { useStoreRenderCount } from "../performance/useStoreRenderCount";
import { borderStyle } from "../styles/border";

function SearchInput({ onSearch }) {
  useStoreRenderCount('Components', 'SearchInput');
  return (
    <input
      onInput={(e) => onSearch(e.target.value)}
      placeholder="Search..."
      style={borderStyle}
    />
  );
}

export default SearchInput;