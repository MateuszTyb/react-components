import "./App.css";

import Line from "./components/Line";
import ReactLogo from "./components/ReactLogo";

import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Statistics from "./components/Statistics/Statistics";
import stats from "./components/Statistics/data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";

import TransactionHistory from "./components/Transactions/TransactionHistory";
import items from "./components/Transactions/transactions.json";

function App() {
  return (
    <div className="App">
      <a
        className="App-Header"
        href="https://github.com/MateuszTyb/HW-REACT-COMPONENTS"
      >
        <ReactLogo className="App-logo" />
        <h1>Github - Mateusz Tybinkowski</h1>
      </a>
      <Line />
      <p>Zadanie 1 - Profil w sieci społecznościowej</p>
      <Profile user={user} />
      <Line />
      <p>Zadanie 2 - Sekcja statystyki</p>
      <Statistics title="Upload stats" stats={stats} />
      <Line />
      <p>Zadanie 3 - Lista znajomych</p>
      <FriendList friends={friends} />
      <Line />
      <p>Zadanie 4 - Historia transakcji</p>
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
