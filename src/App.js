import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    // Component state includes profile data, visibility flag, and timer counter.
    this.state = {
      Person: {
        fullName: 'Ada Lovelace',
        bio: 'First computer programmer and visionary mathematician.',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
        profession: 'Mathematician',
      },
      shows: false,
      secondsSinceMount: 0,
    };

    this.timerId = null;
  }

  componentDidMount() {
    // Start counting elapsed time from the moment the component mounts.
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Prevent memory leaks by clearing the interval on unmount.
    clearInterval(this.timerId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, secondsSinceMount } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Class Profile</h1>
          <button onClick={this.toggleProfile}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>

          <p>Time since mount: {secondsSinceMount} seconds</p>

          {shows && (
            <div>
              <img
                src={Person.imgSrc}
                alt={Person.fullName}
                style={{ width: '220px', borderRadius: '12px', marginTop: '16px' }}
              />
              <h2>{Person.fullName}</h2>
              <p>{Person.profession}</p>
              <p>{Person.bio}</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
