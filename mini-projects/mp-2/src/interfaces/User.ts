export interface User {
    name: {
        title: string;
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    phone: string;
    location: {
        city: string;
        country: string;
    };
    dob: {
        age: number;
    };
    picture: {
        large: string;
    };
    login: {
        uuid: string;
    };
}
