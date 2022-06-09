import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CatBox from './Cat/CatBox';
import Head from './Head/Head';

function App() {
  return (
    <div>
      <Head title='title' />
      <CatBox
        color="red"
        title="Art, société & sciences humaines"
        categories={["Ethnologie","Histoire Ancienne","Histoire et Philo Des Sciences"]}
      />
    </div>
  );
}

export default App;
