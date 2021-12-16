import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function emoji(e) {
  return <Card key={e.id} emoji={e.emoji} name={e.name} meaning={e.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        */Iterating in array emojipedia and calling emoji function on each
        iteration/*
        {emojipedia.map(emoji)}
      </dl>
    </div>
  );
}

export default App;
