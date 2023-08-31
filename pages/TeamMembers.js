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
    bio: 'Massive tech enthusiast, Kinshuk Goel is a leader in the world of 2023. With his passion for technology, he is always looking for new ways to improve the user experience',
    instagramLink: 'https://www.instagram.com/',
    linkedinLink: 'https://www.linkedin.com/',
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* Profile Picture */}
        <img src={teamMember.profilePicture} alt={teamMember.name} />

        {/* Icon representing their role */}
        <div className={styles.roleIcon}>
          {/* Insert the role icon here */}
          Role Icon
        </div>
      </div>

      <div className={styles.right}>
        {/* Short Bio */}
        <p className={styles.bio}>{teamMember.bio}</p>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          {/* Instagram Icon */}
          <a href={teamMember.instagramLink} target="_blank" rel="noopener noreferrer">
            {/* Insert Instagram icon here */}
            Instagram Icon
          </a>

          {/* LinkedIn Icon */}
          <a href={teamMember.linkedinLink} target="_blank" rel="noopener noreferrer">
            {/* Insert LinkedIn icon here */}
            LinkedIn Icon
          </a>

          {/* Back to Home Page */}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;