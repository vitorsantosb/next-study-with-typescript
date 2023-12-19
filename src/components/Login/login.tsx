import {Button, Container, Flex, TextInput} from "@mantine/core";

export function Login() {

  return (
    <Container
      w={'100%'}
      maw={'950px'}
      p={0}
      h={'35vh'}
      styles={{
        root: {
          backgroundColor: 'white',
          borderStyle: 'solid',
          borderRadius: '1rem',
        }
      }}
    >
      <Flex
        pt={'3rem'}
        align={'center'}
        justify={'center'}
        direction={'column'}
        wrap={'wrap'}
      >
        <TextInput
          label='Login'
          size={'lg'}
          placeholder='Insert email'
          inputWrapperOrder={['label', 'error', 'input', 'description']}
        />

        <TextInput
          label="Password"
          placeholder="password"
          type={'password'}
          size={'lg'}
          inputWrapperOrder={['label', 'input', 'description', 'error']}
        />

        <Button
          mt={'1rem'}
          variant={'gradient'}
          gradient={{from: 'indigo', to: 'cyan'}}
          size={'lg'}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
}