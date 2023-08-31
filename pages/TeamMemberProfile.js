import { useRouter } from 'next/router';
import styles from './TeamMemberTemplate.module.scss';

const TeamMemberProfile = () => {
  const router = useRouter();
  const { name } = router.query; // Fetch the query parameter 'name'

  // Replace this with your data fetching logic based on the 'name'
  const teamMember = {
    profilePicture: '/aa-pictures/Kinshuk.jpeg',
    name: 'Kinshuk Goel',
    role: 'Tech & Design Leader',
    bio: 'Massive tech enthusiast...',
    instagramLink: 'https://www.instagram.com/',
    linkedinLink: 'https://www.linkedin.com/',
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
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
