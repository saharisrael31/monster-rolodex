import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.components.jsx'
import { SearchBox } from './components/search-box/search-box.components.jsx';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
      };
      
    
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }


  render() {
    
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters
      .filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (

    <div className="App">
      <h1 className="main-title">Monster Rolodex</h1>
      <SearchBox
        placeholder='search'
        handleChange={ this.handleChange } />
      <CardList monsters={filteredMonsters}/>

    </div>);
    
  }
}

export default App;
