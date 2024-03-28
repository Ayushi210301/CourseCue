import { AppShell, Card, Center, Checkbox, Container, Grid, Rating, SimpleGrid, Stack, Text } from "@mantine/core";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Coursed() {
    return(
        <AppShell
      header={
        <Navbar />
      }
    >
        <Container size='xl'>
            <Text style={{fontSize:'4pc',fontFamily:'arvo',fontStyle:'italic'}} mb={100}>Data Science</Text>
            <Grid px='xl'>
                <Grid.Col span={2}>
                    <Text weight='bold' pb='md' style={{fontSize: '1.3pc'}}>Filter By</Text>
                    <Card withBorder> 
                        <Card.Section pb='lg' withBorder>
                            <Text my='lg' weight='bold'>Course Type</Text>
                            <Center>
                            <Stack>
                                <Checkbox label="Paid Courses" color="dark"/>
                                <Checkbox label="Free Courses" color="dark"/>
                            </Stack>
                            </Center>
                        </Card.Section>
                        <Card.Section pb='lg' withBorder>
                            <Text my='lg' weight='bold'>Level</Text>
                            <Center>
                            <Stack>
                                <Checkbox label="Beginner" color="dark"/>
                                <Checkbox label="Intermediate" color="dark"/>
                                <Checkbox label="Advanced" color="dark"/>
                            </Stack>
                            </Center>
                        </Card.Section>
                        <Card.Section pb='lg' withBorder>
                            <Text my='lg' weight='bold'>Duration</Text>
                            <Center>
                            <Stack>
                                <Checkbox label="< 30 mins" color="dark"/>
                                <Checkbox label="30 - 60 mins" color="dark"/>
                                <Checkbox label="1 - 2 Hrs" color="dark"/>
                                <Checkbox label="2 - 5 Hrs" color="dark"/>
                                <Checkbox label="5 - 10 Hrs" color="dark"/>
                                <Checkbox label="10+ Hrs" color="dark"/>
                            </Stack>
                            </Center>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span='auto'>
                    <Text weight='bold' pb='md' style={{fontSize: '1.3pc'}}>Available Courses</Text>
                    <SimpleGrid cols={3}>
                        <Card component={Link} to='/' withBorder px='xl'>
                            <Text weight='bold' align="left">Udemy</Text>
                            <Text align="left" py='md'>CS50's Introduction to Computer Science</Text>
                            <Rating value={3.5} fractions={2} color="teal" readOnly pb='md'/>
                            <Text align="left"> Price: $100 </Text>
                        </Card>
                        <Card withBorder px='xl'>
                            <Text weight='bold' align="left">Udemy</Text>
                            <Text align="left" py='md'>Python Developer</Text>
                            <Rating value={3.5} fractions={2} color="teal" readOnly pb='md'/>
                            <Text align="left"> Price: $100 </Text>
                        </Card>
                        <Card withBorder px='xl'>
                            <Text weight='bold' align="left">Udemy</Text>
                            <Text align="left" py='md'>Python Developer</Text>
                            <Rating value={3.5} fractions={2} color="teal" readOnly pb='md'/>
                            <Text align="left"> Price: $100 </Text>
                        </Card>
                        <Card withBorder px='xl'>
                            <Text weight='bold' align="left">Udemy</Text>
                            <Text align="left" py='md'>Python Developer</Text>
                            <Rating value={3.5} fractions={2} color="teal" readOnly pb='md'/>
                            <Text align="left"> Price: $100 </Text>
                        </Card>
                        <Card withBorder px='xl'>
                            <Text weight='bold' align="left">Udemy</Text>
                            <Text align="left" py='md'>Python Developer</Text>
                            <Rating value={3.5} fractions={2} color="teal" readOnly pb='md'/>
                            <Text align="left"> Price: $100 </Text>
                        </Card>
                        <Card withBorder px='xl'>
                            <Text weight='bold' align="left">Udemy</Text>
                            <Text align="left" py='md'>Python Developer</Text>
                            <Rating value={3.5} fractions={2} color="teal" readOnly pb='md'/>
                            <Text align="left"> Price: $100 </Text>
                        </Card>
                        <Card withBorder px='xl'>
                            <Text weight='bold' align="left">Udemy</Text>
                            <Text align="left" py='md'>Python Developer</Text>
                            <Rating value={3.5} fractions={2} color="teal" readOnly pb='md'/>
                            <Text align="left"> Price: $100 </Text>
                        </Card>
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
        </Container>
    </AppShell>
    )
}