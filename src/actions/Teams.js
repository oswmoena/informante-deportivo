export const getTeams = async () => {
    const url = `${process.env.REACT_APP_API}teams`;
    const resp = await fetch(url);
    const { teams } = await resp.json();
    const data = teams.map(team => {
        return {
            id: team._id,
            name: team.name,
            img: team.img,
            gf: team.goalsFor,
            gc: team.goalsAgainst,
            pts: team.points
        }
    })

    return data;
};

export const addTeam = async (req) => {
    const url = `${process.env.REACT_APP_API}team`;
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const { ok } = await resp.json();
    return ok;
}