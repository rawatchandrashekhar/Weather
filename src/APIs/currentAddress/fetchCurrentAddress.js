const fetchCurrentAddress = async (lat, lng) => {
    try {
        var f_address = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=658bbfa4e0ebe948060006gse687a27`)
        var f = await f_address.json();
        if (Object.keys(f?.address).length == 0) {
            return 'not found';
        } else {
            return `${f?.display_name}` || `not found`;
        }
    }
    catch (e) {
        console.error('Erro in catch fetch current address', e);
        alert(e.message);
        return `Sorry: Request Denied`;
    }
};

export default fetchCurrentAddress;