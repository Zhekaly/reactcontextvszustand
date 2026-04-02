import { useStoreRenderCount } from "../../performance/useStoreRenderCount";
import { useAppStore } from "./Store";
import { Tracker } from "../../performance/Tracker";
import Counter from "../../components/Counter";
import IncreaseCounterButton from "../../components/IncreaseCounterButton";
import User from "../../components/User";
import LogInOutButtons from "../../components/LogInOutButtons";
import SearchInput from "../../components/SearchInput";
import Title from "../../components/Title";
import ChildComp from "../../components/ChildComp";
import SiblingComp from "../../components/SiblingComp";
import { borderStyle } from "../../styles/border";

// Каждый компонент подписывается ТОЛЬКО на нужное значение
function CounterSection() {
  useStoreRenderCount('Zustand', 'CounterSection');
  const count = useAppStore(state => state.count);
  const increment = useAppStore(state => state.increment);
  return (
    <>
      <Counter count={count} />
      <IncreaseCounterButton onClick={increment} />
    </>
  );
}

function UserSection() {
  useStoreRenderCount('Zustand', 'UserSection');
  const user = useAppStore(state => state.user);
  const login = useAppStore(state => state.login);
  const logout = useAppStore(state => state.logout);
  return (
    <>
      <User user={user} />
      <LogInOutButtons onLogin={login} onLogout={logout} />
    </>
  );
}

function SearchSection() {
  useStoreRenderCount('Zustand', 'SearchSection');
  const title = useAppStore(state => state.title);
  const setTitle = useAppStore(state => state.setTitle);
  return (
    <>
      <SearchInput onSearch={setTitle} />
      <Title title={title} />
    </>
  );
}

function ZustandExample() {
  useStoreRenderCount('Zustand', 'ZustandExample');
  return (
    <div style={borderStyle}>
      <h2>Zustand Example</h2>
      <CounterSection />
      <UserSection />
      <SearchSection />
      <ChildComp />
      <SiblingComp />
      <Tracker />
    </div>
  );
}

export default ZustandExample;