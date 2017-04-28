import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ImageList from './components/ImageList';

import {
    View,
    Text
} from 'react-native';

const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <Text>Hello from the other side</Text>
                <ImageList />
            </View>
        </Provider>
    );
};

export default App;