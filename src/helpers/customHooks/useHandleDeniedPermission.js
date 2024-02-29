import { PermissionsAndroid, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const useHandleDeniedPermission = (screen = 'Dashboard') => {

    const navigation = useNavigation();

    const handleDeniedPermission = async () => {
        // Check if permission was denied with "Never ask again"
        await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ).then((neverAskAgain) => {
            if (!neverAskAgain) {
                // Provide guidance to enable the permission manually
                Linking.openSettings();
            } else {
                navigation.navigate(screen);
            }
        });
    }

    return [handleDeniedPermission]

};

export default useHandleDeniedPermission;