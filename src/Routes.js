import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Jackets from "./pages/Jackets/Jackets";
import Jeans from "./pages/Jeans/Jeans";
import Pants from "./pages/Pants/Pants";
import Shorts from "./pages/Shorts/Shorts";
import Shirts from "./pages/Shirts/Shirts";
import Tshirts from "./pages/Tshirts/Tshirts";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/jackets" exact component={Jackets} />
      <Route path="/jeans" exact component={Jeans} />
      <Route path="/pants" exact component={Pants} />
      <Route path="/shorts" exact component={Shorts} />
      <Route path="/shirts" exact component={Shirts} />
      <Route path="/tshirts" exact component={Tshirts} />
    </Switch>
  );
}
