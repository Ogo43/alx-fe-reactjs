import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'
import './App.css'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const user = {name: "Alice", age: "25", bio: "Loves hiking and photography"};

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserContext.Provider value={user}>
        <UserProfile />
      </UserContext.Provider>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  )
}

export default App;
