import { useDispatch } from "react-redux";
import {
  BtnStyle,
  ListStyled,
  DivStyled,
  ProductDetail,
  MainContainer,
} from "../../assets/Styles/ListStyled";
import { addToCart } from "./cartSummarySlice";

export const ListProduct = ({ arr }) => {
  const dispatch = useDispatch();
  return (
    <>
      <MainContainer>
        {arr.map((item, i) => {
          return (
            <>
              <div key={i} style={{ width: "40%" }}>
                <ListStyled>
                  <ProductDetail>
                    {item.title}
                    <img src={item.image} width="100px" height="140px" />
                  </ProductDetail>
                  <DivStyled>
                    <BtnStyle
                      onClick={() =>
                        dispatch(
                          addToCart({ price: item.price, product: item.title })
                        )
                      }
                    >
                      Add to Cart
                    </BtnStyle>
                  </DivStyled>
                </ListStyled>
              </div>
            </>
          );
        })}
      </MainContainer>
    </>
  );
};
