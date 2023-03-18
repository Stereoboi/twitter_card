import styled from "styled-components";
import logo from "../../media/images/Logo1x.png";
import mainImage from "../../media/images/pic1x.png";

export const CardWrapper = styled.div`
  position: relative;
  background-image: url(${logo});
  background-size: cover;
  width: 380px;

  background: linear-gradient(
    45deg,
    rgba(71, 28, 169, 1) 0%,
    rgba(87, 54, 163, 1) 69.1%,
    rgba(75, 42, 153, 1) 100%
  );
  margin: 0 auto;
  margin-top: 150px;
  border-radius: ${(p) => p.theme.radii.normal};
`;
// 187.42px 159.48px

export const ImageContainer = styled.div`
  background-image: url(${logo}), url(${mainImage});
  background-position: 20px 20px, 36px 28px;
  background-repeat: no-repeat;
  height: 284px; ;
`;
export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 83px 36px 83px;
`;
export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  line-height: 24.38px;
  color: ${(p) => p.theme.colors.main};
  padding-bottom: ${(p) => p.theme.space[4]}px;
  text-align: center;
`;
export const TextFollowers = styled(Text)`
  padding-bottom: 0;
`;
export const Button = styled.button`
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.xxm};
  border-radius: ${(p) => p.theme.radii.min};
  background-color: ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.black};
  line-height: 21.94px;
  margin-top: 26px;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.active};
    color: ${(p) => p.theme.colors.black};
  }
`;

export const ImageBoy = styled.img`
  position: absolute;
  top: 187.42px;
  left: 159.48px;
  width: 62px;
  height: 62px;
  z-index: 50;
`;

export const Rectangle1 = styled.div`
  position: absolute;
  top: 214px;
  width: 151px;
  height: 8px;
  background-color: ${(p) => p.theme.colors.main};
  box-shadow: inset 0 0 5px rgba(251, 248, 255, 1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Rectangle2 = styled.div`
  position: absolute;
  top: 214px;
  left: 229px;
  width: 151px;
  height: 8px;
  background-color: ${(p) => p.theme.colors.main};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Ellipse = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  background-color: #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4.39px 3.29px 0px rgba(251, 248, 255, 1) inset,
    0px 4.39px 4.39px 0px rgba(0, 0, 0, 0.06),
    0px -2.2px 4.39px 0px #ae7be3 inset;
  &::before {
    content: "";
    display: block;
    width: 62px;
    height: 62px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #5736a3;
  }
`;
