
import './App.css';
import SignUpForm from './components/signUpForm';
import Grid from './components/grid';
import Column from './components/column';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="column">
          <h1 className="centered">Learn to code by watching others</h1>
          <p className="centered">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
        </div>
        <div className="column">
          <div class="button accent shadow">
            <span class="bold">Try it free 7 days</span> then $20/mo. thereafter
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default App;
