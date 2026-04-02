import { useStoreRenderCount } from "../performance/useStoreRenderCount";
import { borderStyle } from "../styles/border";

function Counter({ count }) {
  useStoreRenderCount('Components', 'Counter');
  return <p style={borderStyle}>Count: {count}</p>;
}

export default Counter; 