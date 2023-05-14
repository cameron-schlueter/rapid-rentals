import React from "react";
import AppContainer from "./components/AppContainer";
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import './App.css';

const PUBLIC_KEY = "pk_test_51N6NvyGS4UIOSo35HXIptnZ7eOTCBYVma2j6RFpbQQpCradh6Oa0Kiuhf7jb1vvs2zOCXGVA9qBCt7mcuwh9uQnC00nKZ3R0Kg"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const App = () =>
<Elements stripe={stripeTestPromise}>
    <AppContainer />;
</Elements>


export default App;


