import React from "react";
import "./App.css";
import ListItems from "./components/ListItems";

class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="card">
        <header>
          <form className="container" onSubmit={this.addItem}>
            <center>
              <input
                type="text"
                placeholder="Enter Text"
                className="input"
                value={this.state.currentItem.text}
                onChange={this.handleInput}
              />
              <button type="submit" className="button">
                Add
              </button>
            </center>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
