// TeamMembers.js

import { useRouter } from 'next/router';
import styles from './TeamMembers.module.scss'; // Import your SCSS styles here

const TeamMembers = () => {
  const router = useRouter();
  const { name } = router.query; // Fetch the query parameter 'name'

  // Replace this with your data fetching logic based on the 'name'

  const teamMember = {
    profilePicture: '/aa-pictures/Kinshuk.jpeg',
    name: 'Kinshuk Goel',
    role: 'Tech & Design Leader',

    bio: 'Rising Junior at BRHS',
    bio2: 'Favorite Song: Wow - Post Malone',
    bio3: 'Favorite Food: Pizza',
    bio4: 'Hobby: Basketball, Programming, Playing the Violin, Hiking',


    instagramLink: 'https://www.instagram.com/shuknuk/',
    linkedinLink: 'https://www.linkedin.com/in/kinshuk-goel-7137a1281/',
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* Profile Picture */}
        <img src={teamMember.profilePicture} alt={teamMember.name} className={styles.profilePicture} />

        {/* Icon representing their role */}
        <div className={styles.roleIcon}>
          {/* Insert the role icon here */}
          Role Icon
        </div>
      </div>

      <div className={styles.right}>
        {/* Short Bio */}
        <p className={styles.bio}>{teamMember.bio}</p>
        <p className={styles.bio2}>{teamMember.bio2}</p>
        <p className={styles.bio3}>{teamMember.bio3}</p>
        <p className={styles.bio4}>{teamMember.bio4}</p>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          {/* Instagram Icon */}
          <a href={teamMember.instagramLink} target="_blank" rel="noopener noreferrer">
            {/* Insert Instagram icon here */}
            Instagram
          </a>

          {/* LinkedIn Icon */}
          <a href={teamMember.linkedinLink} target="_blank" rel="noopener noreferrer">
            {/* Insert LinkedIn icon here */}
            LinkedIn
          </a>

          {/* Back to Home Page */}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
