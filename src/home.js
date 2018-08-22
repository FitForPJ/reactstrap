import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Info from './components/Info';
import rootReducer from './reducers';

const store = createStore(rootReducer)



class HomeDetial extends React.Component{
    render(){
        return(
            <div className="border border-primary">
                <Provider store={store}>
                    <Info/>
                </Provider>

            </div>
        )
    }
}

export default HomeDetial;
