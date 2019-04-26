
      function Greeting(props){
        return <h1> Hello {props.name},</h1>;
      }

      function FancyBorder(props){
        return (
          <div className={"FancyBorder FancyBorder-"+props.color }>
            {props.children}
          </div>
        );
      }

    function Dialog(props){
      return(
        <FancyBorder color="red">
          <h1 className="Dialog-title">
            {props.title}
          </h1>
          <hr/>

          <h4 className="Dialog-message">
            {props.message}
          </h4>

          {props.children}
        </FancyBorder>
      );  
    }

    function WelcomeDialog(){
      return(
        <Dialog
          title="Welcome."
          message="And Thank you for visiting our spacecraft" />
      );
    }

    class SignupDialog extends React.Component{
      constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = {login: "", loggedIn:false};
      }

      render(){
        if(this.state.loggedIn){
          return <WelcomeDialog /> 
        }
        return(
          <Dialog title="Mars exploration program" message="What should I call you?">

            <input value={this.state.login} onChange={this.handleChange} />
            <button onClick={this.handleSignup} >
              Sign Me up
            </button>

          </Dialog>    
        );
      }

      handleChange(e){
        this.setState({login: e.target.value});
      }

      handleSignup(){
        alert(`Welcome Aboard, ${this.state.login}!`);
        this.setState({loggedIn: true});
      }
    }

    function LoginButton(props){
      return(
        <button onClick={props.onClick}>
          Login
        </button>
      );
    }

    function LogoutButton(props){
      return(
        <button onClick={props.onClick}>
          Logout
        </button>
      );
    }

    function Greeting(props){
      if (props.isLoggedIn){
        return <h1> Welcome {props.loggedInName} </h1>; //hardcoded this!!
      }
      else{
        return <h1> Welcome {props.loggedInName} </h1>; //This too!! lol
      }
    }
    
    class LoginControl extends React.Component{
      constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn:false, loggedInName:"Guest" };
      }

      handleLoginClick(){
        this.setState({isLoggedIn: true, loggedInName:"User"});
      }

      handleLogoutClick(){
        this.setState((state) => {return {isLoggedIn: false, loggedInName:"Guest"}; } );
      }

      render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn){
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else{
          button = <LoginButton onClick={this.handleLoginClick} />         
        }

        return(
          <div>
            <Greeting isLoggedIn = {this.state.isLoggedIn} loggedInName = {this.state.loggedInName} />
            {button}
          </div>
        );
      }
    }

    class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
    function App(){
      return(
        <div>
          <LoginControl />
          <Reservation />
          <LoggingButton />
        </div>
      );
    }

    class Foo extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          currentStatus: false
        };
        // this.toggleStatus = this.toggleStatus.bind(this);
        // this.checkStatus = this.checkStatus.bind(this);

      }

      toggleStatus = () => {
        this.setState((state) => ({currentStatus: !state.currentStatus}),
          () => {
            this.checkStatus();
          });
        }

        checkStatus = () => {
          if (this.state.currentStatus){
            console.log("Current Status is True");
          }
          else{
            console.log("Current status is False");
          }
        }

      render(){
        window.onload= console.log(this.state.currentStatus);
          return(
            <div>
            <h1> Welcome </h1>
            <button onClick = {this.toggleStatus}> Change Status </button>
            </div>
          );
        }
    }