import React, { useState } from 'react';
import {
  AppShell,
  Text,
  Input,
  Grid,
  Card,
  Center,
  SimpleGrid,
  Button,
  List,
  Badge,
  Container,
  ThemeIcon,
} from '@mantine/core';
import { IconCircleCheck, IconSearch } from '@tabler/icons-react';
import LogoMp4 from '../Images/Logo.mp4';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

function AppShellDemo() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    const routeTo = '/datascience';
    navigate(routeTo);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Perform search action here
      navigate('/coursed');
    }
  };

  return (
    <AppShell
      header={<Navbar />}
      onSearch={(term) => {
        setSearchTerm(term);
        handleSearch();
      }}
    >
      <Grid>
        <Grid.Col span={6} mt="lg">
          <video src={LogoMp4} autoPlay loop height="90%" width="90%" />
        </Grid.Col>
        <Grid.Col span={6} mt="lg" style={{ justifyContent: 'left' }}>
          <div>
            <i>
              <Text style={{ fontSize: '4pc', textAlign: 'left', fontFamily: 'arvo', marginTop: '9pc' }}>
                find your next course.
              </Text>
            </i>
            <Input
              icon={<IconSearch />}
              placeholder="Search..."
              style={{ width: '40rem', marginTop: '2pc' }}
              radius="xl"
              size="xl"
              styles={() => ({
                input: {
                  '&:focus-within': {
                    borderColor: 'black',
                  },
                },
              })}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <Text style={{ fontSize: '2pc', textAlign: 'left', fontFamily: 'arvo', marginTop: '2pc', fontStyle: 'italic' }}>
              Recommended Courses
            </Text>
            <div style={{ marginTop: '1pc', textAlign: 'left' }}>
              <Button variant="unstyled" onClick={handleClick} color="blue" style={{ justifyContent: 'left' }} mt="md">
                <Badge color="dark" size="lg" variant="dot">
                  Data Science
                </Badge>
              </Button>
              <Button variant='unstyled' style={{justifyContent:'left'}} mt='md'><Badge color="dark" size="lg" variant="dot">Python</Badge></Button>
                          <Button variant='unstyled' style={{justifyContent:'left'}} mt='md'><Badge color="dark" size="lg" variant="dot">Excel</Badge></Button>
                          <Button variant='unstyled' style={{justifyContent:'left'}} mt='md'><Badge color="dark" size="lg" variant="dot">Computer Science</Badge></Button>
                          <Button variant='unstyled' style={{justifyContent:'left'}} mt='md'><Badge color="dark" size="lg" variant="dot">Personal Development</Badge></Button>
            </div>
          </div>
        </Grid.Col>
      </Grid>
      <div style={{backgroundColor:'#C1D6FF',margin: 0,padding: 0,width:'100%',height:'40%'}}>
          <Text style={{fontFamily:'Arvo',fontStyle:'italic',color:'#000463',fontSize:'2.5pc'}} pt='xl'>Wherever there are courses,</Text>
          <Text style={{fontFamily:'Arvo',fontStyle:'italic',color:'#000463',fontSize:'2.5pc'}}>locate the finest one</Text>
          <Container size='sm' style={{marginTop:'2pc'}}>
            <SimpleGrid cols={2} spacing='xs'>          
                <Card
                  shadow="sm"
                  style={{justifyContent:'block'}}
                  radius='lg'
                  padding='lg'
                >   
                    <Card.Section pt='xl'>
                      <Text style={{color:'#000463'}} size='lg'>Course Recommendation</Text>
                    </Card.Section><br/>
                    <Card.Section pb='xl' mx='lg'>
                      <Text>Course recommendation is suggesting relevant courses to individuals based on their interest, skills, background and job proflle.</Text>
                    </Card.Section>
                </Card>
                <Card
                  shadow="sm"
                  style={{justifyContent:'right',display:'block'}}
                  radius='lg'
                  padding='lg'
                >   
                    <Card.Section pt='xl'>
                      <Text style={{color:'#000463'}} size='lg'>Job Based Training</Text>
                    </Card.Section><br/>
                    <Card.Section pb='xl' mx='lg'>
                      <Text>Acquiring specific skills on the job preparing you for designated role fast and practical.</Text>
                    </Card.Section>
                </Card>
                <Card
                  shadow="sm"
                  style={{justifyContent:'right',display:'block', height:'13pc'}}
                  radius='lg'
                  padding='lg'
                >   
                    <Card.Section pt='xl'>
                      <Text style={{color:'#000463'}} size='lg'>Testing your Skills</Text>
                    </Card.Section><br/>
                    <Card.Section pb='xl' mx='lg'>
                      <Text>Evaluating your ability to learn, solve problems, and adapt in various situations.</Text>
                    </Card.Section>
                </Card>
                <Card
                  shadow="sm"
                  style={{justifyContent:'block'}}
                  radius='lg'
                  padding='lg'
                >   
                    <Card.Section pt='xl'>
                      <Text style={{color:'#000463'}} size='lg'>Progress Tracking</Text>
                    </Card.Section><br/>
                    <Card.Section pb='xl' mx='lg'>
                      <Text>Adjust your path for smoother sailing towards success</Text>
                    </Card.Section>
                </Card>
            </SimpleGrid>
          </Container>
        </div>
        <div>
          <Text style={{fontSize:'3pc', fontFamily:'arvo', fontStyle:'italic'}} pt='md'>Self Examination</Text>
          <List
            spacing="lg"
            size="md"
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCircleCheck size="1rem" />
              </ThemeIcon>
            }
            mt='lg'
          >
            <List.Item>Test Your Skills</List.Item>
            <List.Item>Evaluate Yourself</List.Item>
            <List.Item>Wide Variety of courses</List.Item>
          </List>
          <Center>
            <Input icon={<IconSearch />} placeholder="Search Subject" style={{width:'40rem',marginTop:'2pc'}} radius="xl"
                                size="xl" styles={() => ({
                                input: {
                                '&:focus-within': {
                                    borderColor: 'black',
                                },
                                },
                            })}/>
          </Center>
          <Button radius="xl" size="lg" my='xl'  style={{paddingLeft:'17pc',paddingRight:'17pc', backgroundColor:'#000463'}}>
              Start Test
          </Button>
        </div>
    </AppShell>
  );
}

export default AppShellDemo;
