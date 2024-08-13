import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  Topbar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <Topbar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Breakfast"
                items={[
                  {
                    id: 10,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF112C05B1B9C193648449783C1A82.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                  {
                    id: 11,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF112C05B1B9C193648449783C1A82.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                  {
                    id: 12,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF112C05B1B9C193648449783C1A82.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                  {
                    id: 13,
                    name: "Margarita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF112C05B1B9C193648449783C1A82.avif",
                    items: [
                      {
                        price: 124,
                      },
                    ],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
