import { Layout } from "@components/components";
import {
  Hero,
  About,
  Experience,
  Services,
  Process,
  Testimonials,
  Contacts,
} from "@components/containers";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Process />
      <Testimonials />
      <Contacts />
    </Layout>
  );
}
