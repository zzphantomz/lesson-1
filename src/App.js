import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/ShopPage";
import SignIn from "./pages/sign-in/SignIn";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getDoc } from "firebase/firestore";
import { setCurrentUser } from "./redux/user/userActions";
import CheckOut from "./pages/CheckOut/CheckOut";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        getDoc(userRef).then((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            name: snapshot.name,
            ...snapshot.data(),
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  com;
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
