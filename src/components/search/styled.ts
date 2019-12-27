import css from "@emotion/css";
import { FontSize } from "../../constants/font-size";

export const field = css`
  font-size: ${FontSize.Text};
  box-sizing: border-box;
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 20px;

  input {
    display: block;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 4px;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    background-color: transparent;
    margin-top: 10px;
  }
`;