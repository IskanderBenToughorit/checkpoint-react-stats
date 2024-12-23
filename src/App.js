import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Elon Musk", 
        bio: "CEO de SpaceX, Tesla, et d'autres entreprises innovantes.",
        imgSrc: "/Images/Elon_Musk.jpg", 
        profession: "Entrepreneur, Ingénieur",
      },
      show: false,
      timeElapsed: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ timeElapsed: prevState.timeElapsed + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {show ? "Masquer le Profil" : "Afficher le Profil"}
        </button>
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} style={{ width: '150px', height: '150px' }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>Profession : {person.profession}</h3>
          </div>
        )}
        <div>
          <h4>Temps écoulé depuis le montage : {timeElapsed} secondes</h4>
        </div>
      </div>
    );
  }
}

export default App;
