import { useStoreRenderCount } from "../../performance/useStoreRenderCount";
import { AppProvider, useAppContext } from "./Store";
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

function AppContent() {
  useStoreRenderCount('Context', 'AppContent');
  const { count, user, title, increment, login, logout, setTitle } = useAppContext();

  return (
    <div style={borderStyle}>
      <h2>Context API Example</h2>
      <Counter count={count} />
      <IncreaseCounterButton onClick={increment} />
      <User user={user} />
      <LogInOutButtons onLogin={login} onLogout={logout} />
      <SearchInput onSearch={setTitle} />
      <Title title={title} />
      <ChildComp />
      <SiblingComp />
    </div>
  );
}

function ContextExample() {
  return (
    <AppProvider>
      <AppContent />
      <Tracker />
    </AppProvider>
  );
}

export default ContextExample;  