import { useEffect, useState } from "react";
import { Row, Col, Button, Spinner } from "reactstrap";
import type { Data, Product } from "~/Interfaces";
import ProductCard from "./ProductCard";
import AwesomeSlider from "react-awesome-slider";
import "~/styles.css";
import "react-awesome-slider/dist/styles.css";
import HorizontalProductCard from "./HorizontalProductCard";
const Products = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    getData("https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05");
  }, []);

  const getData = (url: string, code?: string) => {
    setloading(true);
    fetch(`${url}${code ? `?code=` + code : ""}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res.result);
        console.log(res.result);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row>
            {data?.horizontalProducts && (
              <Col xs={12}>
                <AwesomeSlider
                  style={{ background: "transparent", marginBottom: "4rem" }}
                >
                  {data?.horizontalProducts?.map((hp) => (
                    <div key={hp.code}>
                      <HorizontalProductCard
                        product={hp}
                      ></HorizontalProductCard>
                    </div>
                  ))}
                </AwesomeSlider>
              </Col>
            )}

            {data?.products.map((product: Product) => (
              <Col xs={6} key={product.code}>
                <ProductCard product={product}></ProductCard>
              </Col>
            ))}
          </Row>
          <Row className="m-0 p-0">
            <Button
              color="success"
              className="mx-auto mt-3"
              size="xl"
              disabled={!data?.nextUrl}
              onClick={() => getData(data?.nextUrl || "")}
            >
              Sonraki Sayfa
            </Button>
          </Row>
        </>
      )}
    </div>
  );
};

export default Products;
