import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 48686b9c8397451359127efd14f3b9733be6c606fb5afaf8c54aaaad9b97a01c'

    }
});