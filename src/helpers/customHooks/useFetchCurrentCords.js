import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';

const useFetchCurrentCords = () => {

    const [getCurrentLongitude, setCurrentLongitude] = useState("");
    const [getCurrentLatitude, setCurrentLatitude] = useState("");
    const [getLoading, setLoading] = useState(true);

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {

                //getting the Longitude from the location json
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);

                //getting the Latitude from the location json
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);

                //Setting Longitude state
                setCurrentLongitude(currentLongitude);

                //Setting Longitude state
                setCurrentLatitude(currentLatitude);
                setLoading(false);
            },
            (error) => {
                console.log({ error });
            },
            {
                enableHighAccuracy: true,
                timeout: 30000,
                maximumAge: 15000
            },
        );
    };

    useEffect(() => {
        getOneTimeLocation();
    }, [])

    return [getCurrentLatitude, getCurrentLongitude, getLoading, setLoading];
}

export default useFetchCurrentCords