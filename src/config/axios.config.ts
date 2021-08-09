import Axios from 'axios';

export default Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}`,
});
