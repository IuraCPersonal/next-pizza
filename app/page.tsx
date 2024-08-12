import { Container, Title, Topbar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <Topbar />

      <div style={{ height: "200vh" }}></div>
    </>
  );
}
