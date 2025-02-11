import styled from "styled-components";
import {Dog} from "../interfaces/Dog.ts";

const AllDogsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #929673;
`;

const SingleDogDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    text-align: center;
`;

export default function Doggos(props: { data: Dog[] }) {
    return (
        <AllDogsDiv>
            {props.data.map((d: Dog) => (
                <SingleDogDiv key={d.id}>
                    <h1>{d.name}</h1>
                    <p>{d.breed}</p>
                    <p>{d.description}</p>
                    <img src={d.image} alt={`image of ${d.name}`} />
                </SingleDogDiv>
            ))}
        </AllDogsDiv>
    );
}