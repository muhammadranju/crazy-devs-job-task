import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <main className="flex bg-main-bg relative">
      <Sidebar />
      <MainContent />
    </main>
  );
};

export default App;
