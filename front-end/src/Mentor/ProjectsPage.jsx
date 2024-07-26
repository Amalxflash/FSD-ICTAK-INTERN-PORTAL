import React, { useState, useEffect } from 'react';
import MentorNavbar from '../components/MentorNavbar';
import axiosInstance from '../axiosInterceptor';
import { useParams } from 'react-router-dom';

const ProjectsPage = () => {
    const [mentor, setMentor] = useState(null);
    const { mentorId } = useParams();

    useEffect(() => {
        const fetchMentorData = async () => {
            try {
                const response = await axiosInstance.get(`/api/mentors/${mentorId}`);
                setMentor(response.data);
            } catch (error) {
                console.error('Error fetching mentor data:', error);
            }
        };

        fetchMentorData();
    }, [mentorId]);

    return (
        <div>
            <MentorNavbar/>
            <div>
                <h1>Projects</h1>
                {mentor && (
                    <div>
                        <h2>{mentor.Name}</h2>
                        <p>Email: {mentor.Email}</p>
                        <p>Phone Number: {mentor.PhoneNumber}</p>
                        <h3>Allocated Projects:</h3>
                        <ul>
                            {mentor.ProjectTopics.map((project, index) => (
                                <li key={index}>{project}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;