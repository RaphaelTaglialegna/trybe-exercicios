import Image from './component/image';
import './App.css';

const linkImage = 'https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

function App() {
  return (
    <Image source={linkImage} alternativeText='Uma bela foto do Canadá' />
  );
}

export default App;
