import React from 'react';


function User({info}){
    
    const getUsers = () => {
        fetch('http://localhost:8080/users/get', {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(info),
        })
        .then( resp => resp.json())

    }
    
    return (
            <tbody>
                <tr>
                    <td>{info.Name}</td>
                    <td>{info.Location}</td>
                    <td>{info.Score}</td>
                    <td>{info.Transportation}</td>
                    <td>{info.Energy}</td>
                    <td>{info.Diet}</td>
                    <td>{info.Water}</td>
                </tr>
            </tbody>

        
        
    );
}
export default User;