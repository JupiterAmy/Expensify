import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info}</p>
    </div>
);


// const WithAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             <p>This is private info don't share!!!</p>
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to see the information!</p>}
        </div>
    );
};

const Authinfo = requireAuthentication(Info);


ReactDOM.render(<Authinfo isAuthenticated={true} info="This is some info"/>, document.getElementById('app'));