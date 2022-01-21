import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-purple-200 py-6 flex flex-row justify-center items-center">
      {/* <Header /> */}
      <div
        class="container drop-shadow-lg shadow-inner rounded-3xl bg m-10"
        style={{
          backgroundImage: `url("https://raw.githubusercontent.com/Blackwins-Tech/Scorecard-assets/main/CONTACT.svg")`,
        }}
      >
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          class="w-32 h-32 p-0 mb-3 m-28 flex justify-center items-center rounded-full bg-slate-100 hover:ring-offset-purple-500 ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-100"
          loading="lazy"
        />
        <div>
          <h1 class="text-purple-700 font-bold text-center">Pratham Gupta</h1>
          <h3 class="text-purple-700 text-center">Student</h3>
          <h3 class="text-purple-700 text-center uppercase font-bold">
            Front-End Developer
          </h3>

          <div>
            <h1 class="text-purple-900 text-7xl text-center uppercase font-bold">
              90
            </h1>
            <h1 class="text-purple-900 text-7xl text-center uppercase font-thin">
              Points Earned
            </h1>
          </div>
        </div>
        <h6 class="text-center text-purple-600 uppercase m-6">
          Blackwins Academy
        </h6>
      </div>
    </div>
  );
}

export default App;
