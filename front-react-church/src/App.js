

//react
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { Fragment } from "react";
// generals componets

import Accesos from "./components/Sales/Accesos";
import NewSale from "./components/Sales/NewSale";
import NewClient from "./components/Clients/NewClient";
import BalanceSales from "./components/Sales/BalanceSale";
import NewProduct from "./components/Product/newProducto";
import Debts from "./components/Debts/Debts";
import ListClients from "./components/Clients/ListClients";
import ClientDetail from "./components/Clients/ClientDetail";
import Abonos from "./components/Sales/Abonos";

// login y autenticacion
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/ PrivateRoute";


function App() {
  return (
  
    <Router>
      <Fragment>
      <main class="contenedor"> 
     <Switch>

     <PrivateRoute exact path= "/" component={Accesos}  />
     <Route exact path= "/login" component={Login}  />
     <PrivateRoute exact path= "/new-sale" component={NewSale}  />
     <PrivateRoute exact path= "/new-client" component={NewClient}  />
     <PrivateRoute exact path= "/sales-balance" component={BalanceSales}  />
     <PrivateRoute exact path= "/new-product" component={NewProduct}  />
     <PrivateRoute exact path= "/list-debts" component={Debts}  />
     <PrivateRoute exact path= "/list-clients" component={ListClients}  />
     <PrivateRoute exact path= "/debt-client/:id" component={ClientDetail}  />
     <PrivateRoute exact path= "/abono/:id" component={Abonos}  />
     {/* <Route exact path= "/debt-client" component={ClientDetail}  /> */}

      </Switch>
  
   
    </main>
    
    </Fragment>
    </Router>

    
    
   
    
  );
}

export default App;
