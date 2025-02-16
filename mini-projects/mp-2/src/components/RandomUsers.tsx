import styled from "styled-components";
import { User } from "../interfaces/User.ts";

const AllUsersDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #f4f4f4;
    padding: 20px;
`;

const SingleUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
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

const HeaderDiv = styled.div`
    align-items: center;
    flex-direction: column;
    align-self: center;
    font-size: 30px;
`;

export default function RandomUsers(props: { data: User[] }) {
    return (
        <AllUsersDiv>

            <HeaderDiv>
                <h2> Random Users from Around the Word</h2>
            </HeaderDiv>

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
