import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContentContainer from "./conteiner/Content/ContentContainer";
import HomeContainer from "./conteiner/Home/HomeContainer";
import CocktailContainer from "./conteiner/Cocktail/CocktailContainer";

export const ContextApp = React.createContext();

const routesConfig = [
  {
    layout: Wrapper,
    routes: [
      ["/cafe-app", HomeContainer, true],
      ["/search/:text", ContentContainer, true],
      ["/letter/:letter", ContentContainer, true],
      ["/cocktail/:id", CocktailContainer, true]

    ]
  }
];

const RoutesGenerator = ({ config }) => <BrowserRouter>
    <Switch>
      {config.map(({ layout: Layout, routes }) => (
        <Route
          key={routes[0][0]}
          path={routes.map(([firstElement]) => firstElement)}>
          <Layout>
            <Switch>
              {routes.map(([path, Component, exact]) => (
                <Route {...{ path, exact }} key={path}>
                  <Component/>
                </Route>
              ))}
            </Switch>
          </Layout>
        </Route>
      ))}
    </Switch>
  </BrowserRouter>;

const App = () => {
  return (
    <RoutesGenerator config={routesConfig}/>
  );
};

export default App;
