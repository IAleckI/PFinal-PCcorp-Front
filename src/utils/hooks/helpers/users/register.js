import { useLocation } from 'react-router-dom' 

export const useQuery = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const registered = params.get('registered')

    return { registered }
}