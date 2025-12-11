import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  // const teachers = ["Florian", "Samuele", "Simone"];

  return (
    <div id="app">
      {/* <div>{
        teachers.map((teacher, i) =>
          <p key={i} className="teacher-paragraph">{teacher}</p>
        )
      }</div> */}

      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
