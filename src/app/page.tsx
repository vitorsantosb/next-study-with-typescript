import FooterLink from '@/components/Footer/footer';
import {Login} from '@/components/Login/login';
import {Container} from "@mantine/core";

export default function Home() {
  const user = {};

  return (
    <>
      <Container p={'12rem'}>
        <Login></Login>
      </Container>
    </>
  );
}
