import { useStoreRenderCount } from "../performance/useStoreRenderCount";
import { borderStyle } from "../styles/border";

function LogInOutButtons({ onLogin, onLogout }) {
  useStoreRenderCount('Components', 'LogInOutButtons');
  return (
    <div style={borderStyle}>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LogInOutButtons;