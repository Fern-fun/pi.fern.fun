import Sidebar from "../components/Sidebar/Sidebar";
import { Tile } from "../components/Tile/Tile";

function Dashboard() {
  return (
    <div className="page">
      <Sidebar />
      <div className="tile-container">
        <Tile title="Dashboard" value="" />
      </div>
    </div>
  );
}

export default Dashboard;
