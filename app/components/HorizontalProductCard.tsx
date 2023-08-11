import { useNavigate } from "@remix-run/react";
import React from "react";
import { Card, CardBody } from "reactstrap";
import type { Product } from "~/Interfaces";

const HorizontalProductCard = (props: { product: Product }) => {
  const { product } = props;
  const navigate = useNavigate();

  return (
    <Card className="mx-auto mb-2" style={{ alignItems: "center", cursor: "pointer" }} onClick={()=>{navigate(`/productdetailpage/${product.code}`);}}>
      <CardBody className="w-100 p-5">
        <div className="d-flex">
          <div>
            <img src={product.imageUrl} alt="img" className="mx-auto" />
          </div>
          <div style={{ paddingLeft: "3.5rem" }}>
            <div style={{ fontSize: "28px", color: "#627285" }}>
              {product.name}
            </div>
            <div style={{ fontSize: "20px" }}>{product.price} TL</div>
            <div>
              {product.countOfPrices !== undefined
                ? `${product.countOfPrices} satıcı`
                : "satıcı bilgisi yok"}
            </div>
            <div>{product.followCount} takip</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default HorizontalProductCard;
