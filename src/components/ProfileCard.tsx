/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';

function ProfileCard() {

    const [profile, setProfile] = useState({

        name: "John Doe",
        role: "Web Developer",
        skills: ["React", "JavaScript", "CSS"],
        projects: 0
    });

    const [isEditing, setIsEditing] = useState(false);

    // Using JavaScript to create derived values
    const experienceLevel = profile.projects > 10 ? 'Senior' :
        profile.projects > 5 ? 'Mid-Level' : 'Junior';

    // JavaScript function to add new skills
    const addSkill = (newSkill) => {

        console.log(newSkill)
        if (newSkill && !profile.skills.includes(newSkill)) {
            setProfile({
                ...profile,
                skills: [...profile.skills, newSkill],
            });
        }
    };

    // Using JavaScript for side effects
    useEffect(() => {

        // Simulating data fetch
        const fetchProjects = () => {

            console.log("fetching...");

            setTimeout(() => {

                setProfile((prev) =>
                (
                    {
                        ...prev,
                        projects: 10
                    }
                )
                );
            }, 1000);
        };

        fetchProjects();
    }, []);

    return (

        <div className="profile-card">
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>

            {/* Using JavaScript map to render lists */}
            <div className="skills-section">
                <h3>Skills:</h3>
                <ul>
                    {profile.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            {/* Using JavaScript to show conditional content */}
            <div className="experience-section">
                <p>Projects Completed: {profile.projects}</p>
                <p>Experience Level: {experienceLevel}</p>
            </div>

            {/* Complex conditional rendering */}
            {profile.projects > 5 && (
                <div className="achievement-badge">
                    Experienced Developer
                </div>
            )}
        </div>
    );
}

export default ProfileCard;