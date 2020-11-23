import React, { useEffect, useState } from 'react'
import { getTeams } from '../actions'

export const TeamTable = () => {

    const [teamList, setTeamList] = useState([])

    useEffect(() => {
        getTeams()
        .then((team) => {
            setTeamList(team)
        });
       
    }, [])

    let contador = 0;

        return (
        <div style={{marginTop: '5%'}}>
            <h1>Tabla de Equipos</h1>
            <hr />
            {!teamList && <h2>Cargando...</h2>}
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>-</th>
                        <th></th>
                        <th>Club</th>
                        <th>Goles a Favor</th>
                        <th>Goles en Contra</th>
                        <th>Diferencia de Goles</th>
                        <th>Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teamList.map((team) => (
                            <tr key={team.id}>
                                <td>{contador = contador + 1}</td>
                                <td><img src={team.img} style={{maxHeight: '30px'}} alt={team.title} /></td>
                                <td>{team.name}</td>
                                <td>{team.gf}</td>
                                <td>{team.gc}</td>
                                <td>{team.gf - team.gc}</td>
                                <td>{team.pts}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}