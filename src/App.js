import './App.css';
import NavBar from './NavBar';
import MainBody from './MainBody';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <div className='flex flex-col md:flex-row h-screen w-screen bg-[#F5F5F5] text-[#334E56]'>
          <NavBar className="flex-shrink-0 w-full md:w-1/4" />
          <div className='flex-1 flex flex-col mt-4 md:mt-0'>
              <Header />
              <div className='flex-1 overflow-y-auto'>
                  <MainBody />
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
