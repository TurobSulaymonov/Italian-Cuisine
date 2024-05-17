import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";



interface ProductsPageProps {
 
}

export default function ProductsPage() {
 
    return <div className={"products-page"}>
      <Switch>
        <Route>
          <ChosenProduct  />
        </Route>
        <Route>
          <ProductsPage/>
          </Route>
      </Switch>
    </div>
  }