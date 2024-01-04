export const useFacebook = () => { 
    const fbId = import.meta.env.VITE_FACEBOOK_ID;

    function success (res) {
        console.log(res);
    } 

    function error (err) {
        console.log(err);
    }

    return { fbId, success, error };
}