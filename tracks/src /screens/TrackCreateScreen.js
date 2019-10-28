import _mockLocation from '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import Spacer from '../components/Spacer';
import { SafeAreaView,withNavigationFocus } from 'react-navigation';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const {state: {recording},
     addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer>   
            <Text h4>
                Create Track
            </Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
            </Spacer>
            <TrackForm/>
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Create Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />

}



export default withNavigationFocus(TrackCreateScreen);