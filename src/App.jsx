import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import PrimarySearchAppBar from './components/NavBar';
import SimpleContainer from './components/ContainerImg';
import ImgMediaCard from './components/CardImg';

function App() {

  return (
    <>
      <PrimarySearchAppBar />
      <ImgMediaCard />
      {/* <SimpleContainer /> */}
    </>
  )
}

export default App
