import {Center, Anchor, Container, Flex, Group, rem} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';

const links = [
  {link: '#', label: 'Sobre'},
  {link: '#', label: 'Contato'},
  {link: '#', label: 'FAQ'},
];

export function FooterLink() {
  //const isMobile = useMediaQuery(`(max-width: ${rem(768)})`);

  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Container
      fluid
      w={'100%'}
      p={0}
      styles={{
        root: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: '0',
          left: 0,
        },
      }}
    >
      <Center>
        <Flex justify={'space-between'}>
          <Group p={'1.5rem'}>
            {items}
          </Group>
        </Flex>
      </Center>
    </Container>
  );
}

export default FooterLink;