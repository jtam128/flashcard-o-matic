import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import DeckCreate from "../Decks/DeckCreate";
import DeckView from "../Decks/DeckView";
import CardAdd from "../Cards/CardAdd";
import DeckStudy from "../Decks/DeckStudy";
import DeckEdit from "../Decks/DeckEdit";
import CardItem from "../Cards/CardItem";
import CardEdit from "../Cards/CardEdit";
import NotFound from "./NotFound";
import Header from "./Header";

// import "./App.css";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */
// put the route tag in your parent component
function Layout() {
  return (
    <div className="app-routes">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/decks/new">
          <DeckCreate />
        </Route>

        <Route exact path="/decks/:deckId/edit">
          <DeckEdit />
        </Route>

        <Route exact path="/decks/:deckId/cards/new">
          <CardAdd />
        </Route>

        <Route exact path="/decks/:deckId">
          <DeckView />
        </Route>

        <Route exact path="/decks/:deckId">
          <CardItem />
        </Route>

        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <CardEdit />
        </Route>

        <Route path="/decks/:deckId/study">
          <DeckStudy />
        </Route>


        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;