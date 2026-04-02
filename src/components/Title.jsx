import { useStoreRenderCount } from "../performance/useStoreRenderCount";
import { borderStyle } from "../styles/border";

function Title({ title }) {
  useStoreRenderCount('Components', 'Title');
  return <p style={borderStyle}>Title: {title}</p>;
}

export default Title;