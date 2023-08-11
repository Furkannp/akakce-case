import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Button, Spinner } from "reactstrap";
import { ProductDetail } from "~/Interfaces";

const ProductDetailPage = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setData] = useState<ProductDetail>();

  const params = useParams();

  useEffect(() => {
    getData(params.code);
  }, [params.code]);

  const getData = (code?: string) => {
    setloading(true);
    fetch(
      `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${code}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res.result);
      })
      .finally(() => {
        setloading(false);
      });
  };

  // console.log(data)
  return (
    <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <div>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div style={{ color: "#3a6acb" }}>{data?.mkName}</div>
                  <div className="stars">
                    <StarRatings
                      rating={data?.rating}
                      starRatedColor="#FAD92F"
                      numberOfStars={5}
                    />
                  </div>
                </div>

                <div style={{ fontSize: "1.15em" }}>{data?.productName}</div>
                <span className="productbadge p-1 px-2">
                  {data?.badge}
                </span>
                <div style={{ padding: "1rem 5rem" }}>
                  <img src={data?.imageUrl} alt="img" />
                </div>
                <div className="text-center">
                  <div style={{ background: "#F2F4F6" }}>
                    <hr />
                    <div>Kapasite Seçenekleri:</div>
                    <div className="d-flex py-3" style={{ justifyContent: "space-evenly" }}>
                      {data?.storageOptions.map((storage) => (
                        <Button outline key={storage}>{storage}</Button>
                      ))}
                    </div>
                  </div>
                  <div
                  className="countOfPrices py-3">
                    {data?.countOfPrices} satıcı içinde kargo dahil en ucuz
                    fiyat seçeneği
                  </div>
                  <div className="price">{data?.price} TL</div>
                  <div className="freeShipping">{data?.freeShipping ? "Ücretsiz Kargo" : ""}</div>
                  <div className="lastUpdate pt-2">Son Güncelleme {data?.lastUpdate}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
