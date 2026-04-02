import { useStoreRenderCount } from "../performance/useStoreRenderCount";
import { borderStyle } from "../styles/border";

function IncreaseCounterButton({ onClick }) {
  useStoreRenderCount('Components', 'IncreaseCounterButton');
  return <button onClick={onClick} style={borderStyle}>Increase count!</button>;
}

export default IncreaseCounterButton;