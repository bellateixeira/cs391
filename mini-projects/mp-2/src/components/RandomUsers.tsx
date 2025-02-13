import styled from "styled-components";
import { User } from "../interfaces/User.ts";

const AllUsersDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #f4f4f4;
    padding: 20px;
    align-content: center;
`;

const SingleUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 25%;
    padding: 2%;
    margin: 1%;
    text-align: center;
    background: white;
    border-radius: 10px;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export default function RandomUsers(props: { data: User[] }) {
    return (
        <AllUsersDiv>
            {props.data.map((user: User) => (
                <SingleUserDiv key={user.login.uuid}>
                    <ProfileImage src={user.picture.large} alt={`Profile of ${user.name.first} ${user.name.last}`} />
                    <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
                    <p><strong>Age:</strong> {user.dob.age} years</p>
                </SingleUserDiv>
            ))}
        </AllUsersDiv>
    );
}
