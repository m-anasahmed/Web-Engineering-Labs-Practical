import React, { useState } from 'react';
import './StudentApp.css';

/**
 * TASK 1: Student Information App
 * 
 * Requirements:
 * 1. Create a React app that displays a list of student names and ages using a functional component
 * 2. Use useState to add a "Show More" button that displays additional information (e.g., skills)
 * 3. Render the list dynamically using the map() function
 */

// Student data - JSON array with student information
const studentsData = [
    {
        id: 1,
        name: "Muhammad Anas",
        age: 22,
        email: "anaswork640@gmail.com",
        gpa: 3.8,
        skills: ["JavaScript", "React", "HTML", "CSS", "Node.js"],
        major: "Computer Science",
        year: "Senior"
    },
    {
        id: 2,
        name: "Ayesha Khan",
        age: 21,
        email: "ayesha@university.edu",
        gpa: 3.9,
        skills: ["Python", "Data Science", "Machine Learning", "SQL"],
        major: "Data Science",
        year: "Junior"
    },
    {
        id: 3,
        name: "Hassan Ali",
        age: 19,
        email: "hassan@university.edu",
        gpa: 3.7,
        skills: ["Java", "Android Development", "Firebase", "XML"],
        major: "Computer Science",
        year: "Sophomore"
    },
    {
        id: 4,
        name: "Zainab Mirza",
        age: 22,
        email: "zainab@university.edu",
        gpa: 3.85,
        skills: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping"],
        major: "Interactive Design",
        year: "Junior"
    },
    {
        id: 5,
        name: "Ahmed Hassan",
        age: 20,
        email: "ahmed@university.edu",
        gpa: 3.6,
        skills: ["Full Stack", "MongoDB", "Express", "React", "Node"],
        major: "Computer Science",
        year: "Junior"
    },
    {
        id: 6,
        name: "Fatima Ahmad",
        age: 21,
        email: "fatima@university.edu",
        gpa: 3.75,
        skills: ["Cloud Computing", "AWS", "Docker", "Kubernetes"],
        major: "Cloud Computing",
        year: "Senior"
    }
];

/**
 * StudentCard Component - Individual student card with Show More functionality
 * REQUIREMENT 2: Use useState to add "Show More" button
 */
function StudentCard({ student }) {
    // State to track if more details should be shown
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="student-card">
            <div className="student-header">
                <h3 className="student-name">{student.name}</h3>
                <span className="student-age">{student.age} years</span>
            </div>

            {/* Basic Information - Always Shown */}
            <div className="student-basic-info">
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>GPA:</strong> {student.gpa}</p>
                <p><strong>Major:</strong> {student.major}</p>
                <p><strong>Year:</strong> {student.year}</p>
            </div>

            {/* Additional Information - Shown on "Show More" */}
            {showMore && (
                <div className="student-additional-info slide-in">
                    <div className="skills-section">
                        <h4>Skills & Technologies</h4>
                        <div className="skills-container">
                            {/* REQUIREMENT 3: Use map() to render skills dynamically */}
                            {student.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Show More/Less Button */}
            <button 
                className="show-more-btn"
                onClick={() => setShowMore(!showMore)}
            >
                <i className={`fas fa-chevron-${showMore ? 'up' : 'down'}`}></i>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}

/**
 * StudentList Component - Main component that renders the list
 * REQUIREMENT 1: Functional component displaying student list
 * REQUIREMENT 3: Use map() to render students dynamically
 */
function StudentList() {
    const [students] = useState(studentsData);
    const [filterYear, setFilterYear] = useState('All');

    // Filter students based on selected year
    const filteredStudents = filterYear === 'All' 
        ? students 
        : students.filter(student => student.year === filterYear);

    // Get unique years for filter
    const years = ['All', ...new Set(students.map(s => s.year))];

    return (
        <div className="student-list-container">
            {/* Header */}
            <div className="list-header">
                <h2>Student Information System</h2>
                <p>Click "Show More" to view additional skills and information</p>
            </div>

            {/* Filter Section */}
            <div className="filter-section">
                <label htmlFor="year-filter">Filter by Year:</label>
                <select 
                    id="year-filter"
                    value={filterYear} 
                    onChange={(e) => setFilterYear(e.target.value)}
                    className="filter-select"
                >
                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <span className="student-count">
                    Showing {filteredStudents.length} of {students.length} students
                </span>
            </div>

            {/* Students Grid */}
            <div className="students-grid">
                {/* REQUIREMENT 3: Dynamically render students using map() */}
                {filteredStudents.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="stat-card">
                    <h4>Total Students</h4>
                    <p className="stat-value">{students.length}</p>
                </div>
                <div className="stat-card">
                    <h4>Average GPA</h4>
                    <p className="stat-value">
                        {(students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2)}
                    </p>
                </div>
                <div className="stat-card">
                    <h4>Showing</h4>
                    <p className="stat-value">{filteredStudents.length}</p>
                </div>
            </div>
        </div>
    );
}

/**
 * Main App Component
 */
function StudentApp() {
    return (
        <div className="app">
            <StudentList />
        </div>
    );
}

export default StudentApp;