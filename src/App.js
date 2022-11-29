import EnquiryForm from './components/form/enquiryForm';
import './App.css';
import MovieList from "./components/list";

function App() {
  return (
    <div className="App">
    <MovieList />
    <EnquiryForm />
    </div>
  );
}

export default App;