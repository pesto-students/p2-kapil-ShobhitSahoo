import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate =  useNavigate()

    const handleOnClick = () => {
        navigate('/Todolist')
    }

    return (
      <div className="home-main">
        <h1>Welcome to my Todo List</h1>
        <button onClick={handleOnClick}>Start Now!</button>
      </div>
    );
  }
  
  export default Home;
  