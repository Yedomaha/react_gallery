import { Router, Route, IndexRoute } from "react-router";
import App from "./App";

const PrimaryLayout = props => (
  <div className="primary-layout">
    <header>Our React Router 3 App</header>
    <main>{props.children}</main>
  </div>
);

const HomePage = () => <div>Home Page</div>;
const UsersPage = () => <div>Users Page</div>;

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </Route>
  </Router>
);
