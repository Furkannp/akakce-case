import { useNavigate } from "@remix-run/react";
import React from "react";
import { Card, CardBody } from "reactstrap";
import type { Product } from "~/Interfaces";


const ProductCard = (props:{product:Product}) => {
    const { product } = props;
    const navigate = useNavigate();
  return (
    <Card className="mx-auto mb-2" style={{ alignItems: "center", cursor: "pointer" }} onClick={()=>{navigate(`/productdetailpage/${product.code}`);}}>
      <CardBody className="w-100">
        <div className="pb-4">
          <img src={product.imageUrl} alt="img" className="mx-auto" />
        </div>
        <div className="h-productname">{product.name}</div>
        <div style={{ fontSize: "20px" }}>{product.price} TL</div>
        <div style={{ fontSize: "14px" }}>
          {product.countOfPrices !== undefined
            ? `${product.countOfPrices} satıcı`
            : "satıcı bilgisi yok"}
        </div>
        <div style={{ fontSize: "14px" }}>{product.followCount !== undefined ? `${product.followCount} takip` : "takip bilgisi yok"}</div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
