import { useState, useEffect } from "react";
import { Card } from "./components/Card/Card";

function App() {
  const [tweets, setTweets] = useState(777);
  const [followers, setFollowers] = useState(
    localStorage.getItem("FOLLOWERS") || 100500
  );

  useEffect(() => {
    localStorage.setItem("FOLLOWERS", followers);
  }, [followers]);

  const increaseFollowers = (num) => {
    setFollowers(num);
  };

  return (
    <Card
      tweets={tweets}
      followers={followers}
      increaseFollowers={increaseFollowers}
    />
  );
}

export default App;
