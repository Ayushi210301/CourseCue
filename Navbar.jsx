import { ActionIcon, Burger, Button, Center, Grid, Group, Header, Image, Input, MediaQuery, Modal, NativeSelect, PasswordInput, Radio, Text, useMantineTheme } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Logo from '../Images/Logo.png'
import { IconMenu2 } from "@tabler/icons-react";

export default function Navbar(){
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [opened1, { open: open1, close: close1 }] = useDisclosure(false);
    const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
    return (
        <Header height={{ base: 100, md: 115 }} p="xl">
          {/* <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}> */}
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div style={{justifyContent:'space-between', display:'flex'}}>
                <div style={{display:'flex',alignItems:'flex-start'}}>
                    <ActionIcon variant="subtle" color='dark' mx='sm' mt='sm' size='xl'><IconMenu2 size="20rem" /></ActionIcon>
                    <Image src={Logo} alt='Logo' style={{height:'10rem',width:'15rem'}} />
                </div>
                <div style={{display:'flex'}}>
                    <Button onClick={open1} variant="subtle" color="dark" size="xl">
                        Sign Up
                    </Button>
                    <Modal opened={opened1} onClose={close1} title="Sign In" centered>
                      <Grid>
                        <Grid.Col span={6}>
                          <Input.Wrapper
                            id="input-demo"
                            label="First Name"
                          >
                            <Input id="input-demo" />
                          </Input.Wrapper>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Input.Wrapper
                            id="input-demo"
                            label="Last Name"
                          >
                            <Input id="input-demo" />
                          </Input.Wrapper>
                        </Grid.Col>
                      </Grid>
                      <Grid mt='md'>
                        <Grid.Col span={6}>
                        <Radio.Group
                          name="favoriteFramework"
                          label="Gender"
                        >
                          <Group mt="xs">
                            <Radio value="Male" label="Male" />
                            <Radio value="Female" label="Female" />
                            <Radio value="Other" label="Other" />
                          </Group>
                        </Radio.Group>
                        </Grid.Col>
                        <Grid.Col span={6}>
                        <DateInput
                          valueFormat="DD/MM/YYYY"
                          label="Date input"
                          placeholder="Date input"
                          maw={400}
                          mx="auto"
                        />
                        </Grid.Col>
                      </Grid>
                      <NativeSelect
                        data={['Select','Under Graduate', 'Post Graduate', 'Employee']}
                        label="Education"
                        mt='md'
                      />
                      <Input.Wrapper
                            id="input-demo"
                            label="Email"
                            mt='md'
                          >
                            <Input id="input-demo" />
                      </Input.Wrapper>
                      <PasswordInput
                        placeholder="Password"
                        label="Password"
                        mt='md'
                      />
                      <Center>
                        <Button size="md" mt='md'>
                          Sign Up
                        </Button>
                      </Center>
                    </Modal>
                    <Text mx='md' mt='lg'>OR</Text>
                    <Button onClick={open2} variant="subtle" color="dark" size="xl">
                        Sign In
                    </Button>
                    <Modal opened={opened2} onClose={close2} title="Sign Up" centered>
                      <Input.Wrapper
                            id="input-demo"
                            label="Email"
                          >
                            <Input id="input-demo" />
                      </Input.Wrapper>
                      <PasswordInput
                        placeholder="Password"
                        label="Password"
                        mt='md'
                      />
                      <Center>
                        <Button size="md" mt='md'>
                          Sign In
                        </Button>
                      </Center>
                    </Modal>
                </div>
            </div>
          {/* </div> */}
        </Header>
    )
}