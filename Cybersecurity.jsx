import { AppShell, Button, Container, Grid, List, SimpleGrid, Stepper, Text, ThemeIcon, rem } from "@mantine/core";
import Navbar from "./Navbar";
import { IconCircleCheck } from "@tabler/icons-react";

export default function Cybersecurity(){
    // const [active, setActive] = useState(1);
    // const data = [
    //     {
    //         title: 'Software developer',
    //         skills: ['Programming languages', 'Java', 'Python', 'problem-solving', 'critical thinking', 'teamwork', 'communication'],
    //         tools: ['IDEs .'	, 'Visual Studio Code',	 'IntelliJ IDEA', 'Version control systems', 'Git', 'Testing frameworks','JUnit', 'pytest']
    //     }
    // ]
    const skills = ['Programming languages', 'Java', 'Python', 'problem-solving', 'critical thinking', 'teamwork', 'communication']
    const tools = ['IDEs .'	, 'Visual Studio Code',	 'IntelliJ IDEA', 'Version control systems', 'Git', 'Testing frameworks','JUnit', 'pytest']
    return(
        <AppShell
      header={
        <Navbar />
      }
    >
        <Container size='xl'>
            <Text style={{fontSize:'4pc',fontFamily:'arvo'}} mb='xl'>Job Based Recommendations</Text>
            <Text style={{fontSize:'3.5pc',fontFamily:'arvo',fontStyle:'italic',color:'#238be6'}} align="left" mt='xl' mb='xl'>Software Developer</Text>
            <Grid>
                <Grid.Col span='auto'>
                    <Text style={{fontSize:'2.6pc'}} align="left" pb='lg'>Skills</Text>
                    <List spacing="xl" size="md" icon={<IconCircleCheck size={40} radius="xl" color="teal" />} style={{textAlign:'left', fontSize:'1.5pc'}}>
                        {skills.map((skill) => (
                            <List.Item key={skill}>{skill}</List.Item>
                        ))}
                    </List>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Text style={{fontSize:'2.6pc'}} align="left" pb='lg'>Tools</Text>
                    <List spacing="sm" size="md" icon={<IconCircleCheck size={24} radius="xl" color="teal" />} style={{textAlign:'left'}}>
                        {tools.map((tool) => (
                            <List.Item key={tool}>{tool}</List.Item>
                        ))}
                    </List>
                </Grid.Col>
            </Grid>
        </Container>
    </AppShell>
    )
}