import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./app.css";
const API_URL = "https://jsonplaceholder.typicode.com/users";

const App = (_) => {
  //STATE
  const [searchField, setSearchField] = useState("");
  const [robotsArray, setRobotsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Mount unmount
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((users) => {
        setIsLoading(false);
        setRobotsArray(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robotsArray.filter((robot) => {
    return (
      robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()) ||
      robot.email.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
  });

  return isLoading ? (
    <h1 className="tc v-mid">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
