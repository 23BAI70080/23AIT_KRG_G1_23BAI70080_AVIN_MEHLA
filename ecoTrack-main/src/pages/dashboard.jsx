import logs from "../data/logs";

const dashboard = () => {
    const totalcarbon = logs.reduce((acc, curr) => {
        return acc + curr.carbon;
    }, 0);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Total Carbon Footprint: {totalcarbon} kg CO2</h2>
            <ul>
                {logs.map((log) => (
                    <li key={log.id}>
                        {log.activity}: {log.carbon} kg CO2
                    </li>
                ))}
            </ul>
        </div>
    )


}


export default dashboard;