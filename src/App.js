import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.css";
import Second from "./second";
import Gallery from "./gallery";
import First from "./first";
import Reg from "./Reg";
import Attract from "./attract";

function App() {
  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <>
              <First />
              <Second />
            </>
          </Route>

          <Route exact path="/Gallery">
            <Gallery />
          </Route>

          <Route exact path="/Reg">
            <Reg />
          </Route>

          <Route exact path="/Attract">
<Attract/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App;