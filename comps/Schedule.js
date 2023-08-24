// Schedule.js

import styles from './Schedule.module.scss';

// Note that you do not need to add any space between the commas. 
// Format of timestamp:
//      Time,Event,Location
//  ie. 9:00AM,Check In,Cafeteria


const csvData = `Time,Event,Location
9:00 AM,Check In Opens,
9:30 AM,,
10:00 AM,Introduction Ceremony,
10:30 AM,Hacking Starts,
10:30 AM,Team Building/Networking,
11:00 AM,Intro Python,
11:00 AM,Mini Competition,
12:00 PM,Lunch - Chess Tournament Sign ups,Cafeteria
12:30 PM,Chess Tournament,
1:00 PM,BR Prints (3D Printing Club),
1:00 PM,AI/ML,
1:30 PM,Neuroscience Workshop,
1:30 PM,BR Engineering,
2:00 PM,Intro to Java,
2:00 PM,Will AI Be Able To Model Human Emotion?,Classroom (NO CAFE)
2:30 PM,Club Workshop,
2:30 PM,Club Workshop,
3:00 PM,General CS Knowledge Competition,
3:00 PM,Cybersecurity Workshop,
3:30 PM,Game Dev Workshop,
3:30 PM,Club Workshop,
4:00 PM,Competitive Programming Competition,
4:00 PM,,
4:30 PM,,
4:30 PM,,
4:30 PM,,
5:00 PM,Dinner,
5:30 PM,Minute to Win It Challenge,
6:00 PM,,
6:30 PM,Hackathon Ends,
7:00 PM,Judging Begins,
7:00 PM,Participant Bonding,
7:30 PM,Cup Stacking,
8:00 PM,,
8:30 PM,Judging Finishes,
9:00 PM,Closing Ceremony,
9:30 PM,,
10:00 PM,,
`;

const parseCSVData = (csvData) => {
  const lines = csvData.split('\n');
  const headers = lines[0].split(',');
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(',');

    if (currentLine.length === headers.length) {
      const entry = {};
      for (let j = 0; j < headers.length; j++) {
        entry[headers[j].trim()] = currentLine[j].trim();
      }
      data.push(entry);
    }
  }

  return data;
};

const scheduleData = parseCSVData(csvData);

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
          {scheduleData.map((el) => {
            return (
              <tr key={el.Event}>
                <td className={styles.time}> {el.Time} </td>
                <td className={styles.box}> {el.Event === "Hacking Starts" ? "Hacking Begins" : el.Event} </td>
                <td className={styles.box}> {el.Location} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
