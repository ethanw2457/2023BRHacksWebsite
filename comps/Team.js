import styles from './TeamDesc.module.scss'
import TeamDesc from './TeamDesc';
import LRButton from './LRButton';
import { useEffect, useState } from 'react';

const tech = [
  {
    name: "Ethan",
    role: "President",
    src: ""
  },
  {
    name: "Kinshuk",
    role: "Tech",
    src: ""
  },
  {
    name: "Alan",
    role: "Tech",
    src: ""
  }
];

const outreach = [
  {
    name: "Other",
    role: "President",
    src: ""
  },
  {
    name: "Other",
    role: "Tech",
    src: ""
  },
  {
    name: "Other",
    role: "Tech",
    src: ""
  }
];

const team = [
  tech,
  outreach
]

const Team = () => {

    const [cycle, setCycle] = useState(0);
    const toggleUp = () => {
      let newCycle = cycle - 1;
      newCycle = newCycle < 0 ? newCycle + team.length : newCycle;
      setCycle((newCycle - 1) % team.length);
    }

    const toggleDown = () => {
      setCycle((cycle + 1) % team.length);
    }

    return (
        <div className={styles.teamTitle} id="team">
          <h1 className={styles.titleText}>
            Team
          </h1>
          <div className={styles.container}>
            <LRButton onClick={toggleDown} left/>
            {/* <div className={styles.card}> */}
            {team[cycle].map((el) => {
              return (
                <>
                <TeamDesc name={el.name} desc={el.role} src={el.src} key={el.name}/>
                </>
              )
            })}
            {/* </div> */}
            <LRButton onClick={toggleDown} right/>
          </div>
      </div>
    );
}

export default Team;