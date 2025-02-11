import Doggos from "./components/Doggos.tsx"
import styled from "styled-components";
import {Dog} from "./interfaces/Dog.ts"
import { useEffect, useState } from 'react'

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;    
    border: 5px solid;
`
export default function App() {

    // useState Hook to store data
    const [data, setData] = useState<Dog[]>([]);

    // useEffect Hook for error handling and re-rendering
    useEffect(() => {
        async function fetchData() {
            const rawData = (await fetch("https://dog.ceo/api/breeds/image/random"));
            const {results} : {results: Dog[]} = await rawData.json();
            setData(results);
        } fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was an error fetching data: ", e));
    }, [data.length]);

    return (
        <ParentDiv>
            <Doggos data={data}/>
        </ParentDiv>
    )
}