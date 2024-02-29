import { PermissionsAndroid } from 'react-native'
import { useDispatch } from 'react-redux';
import { locationPermission } from '../../../stores/redux/slices/locationSlice';


const requestLocationPermission = async () => {
    const dispatch = useDispatch();
    console.log("inside the requestLocationPermission");
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            // {
            //     title: 'Location Access Required',
            //     message: 'This App needs to Access your location',
            //     buttonPositive: 'OK',
            //     buttonNegative: 'Cancel',
            // },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            console.log("inside the if condition");
            dispatch(locationPermission(false));
        } else {
            console.log("inside the else");
            dispatch(locationPermission(true));
        }
    } catch (err) {
        dispatch(locationPermission(true));
        console.log("inside the catch requestLocationPermission");
        console.warn(err);
    }
};

export default requestLocationPermission