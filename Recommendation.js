
import { token_set_ratio } from "fuzzball";
// import { TokenSetRatio } from 'fuzzyset.js';

export default function recommendCourseWithFuzzy(df, courseDescriptions, title, numOfRec, datasetName) {
    // Initialize an empty array to store recommendations
    let recommendations = [];

    // Iterate through each course
    for (let i = 0; i < df.length; i++) {
        const courseTitle = df[i].course_title;
        const similarityScore = token_set_ratio(title.toLowerCase(), courseTitle.toLowerCase()) / 100.0;

        // Append course details to recommendations array
        recommendations.push({
            course_title: courseTitle,
            similarity_score: similarityScore,
            rating: df[i].rating,
            dataset_name: datasetName,
            course_url: df[i].course_url
        });
    }

    // Sort recommendations based on similarity score in descending order
    recommendations.sort((a, b) => b.similarity_score - a.similarity_score);

    // Filter recommendations based on the specified similarity score threshold (0.8)
    recommendations = recommendations.filter(course => course.similarity_score >= 0.8);

    // Select top N recommendations
    recommendations = recommendations.slice(0, numOfRec);

    // Drop the 'similarity_score' property from each recommendation
    recommendations = recommendations.map(course => {
        const { similarity_score, ...rest } = course;
        return rest;
    });

    return recommendations;
}

 function loadAndPreprocessData(csvFilePath) {
    // You need to fetch the CSV file and parse it
    // Here's a simplified version assuming df is an array of objects
    // representing courses with properties 'course_title', 'rating', and 'course_url'
    return fetch(csvFilePath)
        .then(response => response.text())
        .then(csvData => {
            // Parse CSV data into an array of objects
            const rows = csvData.split('\n');
            const headers = rows[0].split(',');
            const courses = [];
            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const course = {};
                for (let j = 0; j < headers.length; j++) {
                    course[headers[j].trim()] = values[j].trim();
                }
                courses.push(course);
            }
            return courses;
        });
}

// Load and preprocess data for each dataset
const datasets = [
    { csvFilePath: 'C:/Users/HP/Desktop/my-mantine-app/Udemy_courses.csv', datasetName: 'Udemy' },
    { csvFilePath: 'C:/Users/HP/Desktop/my-mantine-app/coursera_courses.csv', datasetName: 'Coursera' },
    { csvFilePath: 'C:/Users/HP/Desktop/my-mantine-app/Udacity.csv', datasetName: 'Udacity' }
];

const title = 'python'; // Title of the course you want recommendations for (case-insensitive)
const numOfRec = 10; // Number of recommendations

// Promise.all to load and preprocess data for all datasets asynchronously
Promise.all(datasets.map(dataset => loadAndPreprocessData(dataset.csvFilePath)))
    .then(data => {
        const allRecommendations = [];
        for (let i = 0; i < data.length; i++) {
            const recommendations = recommendCourseWithFuzzy(data[i], data[i].map(course => course.course_title), title, numOfRec, datasets[i].datasetName);
            allRecommendations.push(...recommendations);
        }
        // Sort recommendations based on rating in descending order
        allRecommendations.sort((a, b) => b.rating - a.rating);
        console.log('Top 10 Recommendations with similarity score >= 0.8 (without similarity_score column):');
        console.log(allRecommendations);
    })
    .catch(error => console.error(error));
