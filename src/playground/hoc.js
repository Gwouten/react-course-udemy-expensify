import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Some Info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAthentication = (WrappedComponent) => {
  return (props) => (
      <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p>}
      </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="the details" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="the details" />, document.getElementById("app"));
