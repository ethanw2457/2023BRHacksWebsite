// Schedule.js

import styles from './Schedule.module.scss';

// Note that you do not need to add any space between the commas. 
// Format of timestamp:
//      Time,Event,Location
//  ie. 9:00AM,Check In,Cafeteria


const csvData = `Time,Event,Location
Time,Event,Location
9:00 AM,Check In Opens,
9:30 AM,,
10:00 AM,Introduction Ceremony,Auditorium
10:30 AM,Hacking Starts,
10:30 AM,Team Building/Networking,Large Cafeteria/Auditorium
11:00 AM,Intro Python,171
11:00 AM,Mini Competition,103
12:00 PM,Lunch - Chess Tournament Sign ups,Large Cafeteria
12:30 PM,Chess Tournament,172
1:00 PM,BR Prints (3D Printing Club),Small Cafeteria
1:00 PM,AI/ML,173
1:30 PM,Neuroscience Workshop,Small Cafeteria
1:30 PM,BR Engineering,171
2:00 PM,Intro to Java,172
2:00 PM,Will AI Be Able To Model Human Emotion?,Classroom (NO CAFE)
2:30 PM,Women In STEM,Small Cafeteria
2:30 PM,Club Workshop,173
3:00 PM,General CS Knowledge Competition,103
3:00 PM,Cybersecurity Workshop,171
3:30 PM,Game Dev Workshop,172
3:30 PM,Club Workshop,173
4:00 PM,Competitive Programming Competition,Small Cafeteria
4:00 PM,Web Development and Github,171
4:30 PM,Data Visualization,172
4:30 PM,Intro to C++,173
4:30 PM,Intro to Data Structures and Algorithms,171
5:00 PM,Dinner,Large Cafeteria
5:30 PM,Minute to Win It Challenge,Small Cafeteria
6:00 PM,,
6:30 PM,Hackathon Ends,
7:00 PM,Judging Begins,
7:00 PM,Participant Bonding,
7:30 PM,Cup Stacking,
8:00 PM,,
8:30 PM,Judging Finishes,
9:00 PM,Closing Ceremony,Auditorium
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
