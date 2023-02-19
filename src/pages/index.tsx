import Head from 'next/head';
import { Typography } from 'antd';

export default function Home() {
  const { Paragraph, Title } = Typography;

  return (
    <>
      <Head>
        <title>Entrar | TODO PROJECTS</title>
      </Head>

      <main>
        <Title level={1}>Hello World</Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Neque eligendi dolore laudantium, atque, corrupti rerum
          repudiandae reiciendis modi sapiente porro sit architecto
          quos incidunt dolorum officia inventore? Tenetur, sequi ut.
        </Paragraph>
      </main>
    </>
  );
}
