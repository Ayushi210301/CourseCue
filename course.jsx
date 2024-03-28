// Coursed.js

import React, { useEffect, useState } from 'react';
import { Container, Text } from '@mantine/core';
import recommendCourseWithFuzzy from './Recommendation';
//import { recommendCourseWithFuzzy } from './Recommendation'; // Import your recommendation function

function Coursed({ searchQuery }) {
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      // Execute recommendation code when search query changes
      const recommended = recommendCourseWithFuzzy(searchQuery); // Pass search query to recommendation function
      setRecommendedCourses(recommended);
    }
  }, [searchQuery]);

  return (
    <Container>
      <Text variant="h1">Recommended Courses</Text>
      <ul>
        {recommendedCourses.map((course) => (
          <li key={course.id}>
            <Text>{course.title}</Text>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Coursed;
