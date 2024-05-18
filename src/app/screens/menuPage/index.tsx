import React from "react";
import { Route, Switch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";





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