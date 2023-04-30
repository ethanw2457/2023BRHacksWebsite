import styles from './comps.module.scss'

const schedule = [
    {
        time: "9:30 a.m.",
        event: "Check in",
        location: "Cafeteria"
    },
    {
        time: "10:30 a.m.",
        event: "Opening ceremony",
        location: "Cafeteria"
    },
    {
        time: "11:00 a.m.",
        event: "Start Hacking",
        location: "Cafeteria"
    }
]

const Schedule = () => {
    return (
        <div className={styles.title} id="schedule">
            <table className={styles.table} rules="rows">
                <tbody>
                    <tr>
                        <th className={styles.infoBox}> Time </th>
                        <th className={styles.infoBox}> Event </th>
                        <th className={styles.infoBox}> Location </th>
                    </tr>
                    {schedule.map((el) => {
                        return(
                            <tr>
                                <td className={styles.time}> {el.time} </td>
                                <td className={styles.box}> {el.event} </td>
                                <td className={styles.box}> {el.location} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Schedule;