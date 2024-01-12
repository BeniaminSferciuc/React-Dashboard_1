import ControlBar from "./components/ControlBar";
import Activity from "./components/Activity";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Table from "./components/Table2";

const App = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 ml-[85px]">
                    <Navbar />
                    <section className="mt-[66px]">
                        <Header />
                        <Activity />
                        <main className="p-4">
                            <ControlBar />
                            <Table />
                        </main>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;
