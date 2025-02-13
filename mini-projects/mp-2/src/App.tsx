import RandomUsers from "./components/RandomUsers.tsx";
import styled from "styled-components";
import { User } from "./interfaces/User.ts";
import { useEffect, useState } from "react";

const ParentDiv = styled.div`
    margin: auto;
    border: 5px solid #646cff;
    padding: 20px;
`;

export default function App() {

    // useState Hook to store user data
    const [data, setData] = useState<User[]>([]);

    // useEffect Hook for fetching API data and updating state
    useEffect(() => {
        async function fetchData(): Promise<void> {

            const rawData = await fetch("https://randomuser.me/api/?results=3");  // fetch user

            // string deconstruction (extracting from an object)
            const {results} = await rawData.json();

            // transform api response into the user type
            const users: User[] = results.map((user: any) => ({
                login: user.login,
                name: user.name,
                gender: user.gender,
                email: user.email,
                phone: user.phone,
                location: user.location,
                dob: user.dob,
                picture: user.picture,
            }));


            setData(users);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]); // runs for the amount of data

    return (
        <ParentDiv>
            <RandomUsers data={data} />
        </ParentDiv>
    );
}
