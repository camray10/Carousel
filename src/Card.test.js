import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it('should renders without crashing',()=>{
  render(<Card caption='testing' src='test.com' currNum={1} totalNum={3}/>);
})

it('should match snapshot',()=>{
const {asFragment} = render(<Card caption='testing' src='test.com' currNum={1} totalNum={3}/>);
expect(asFragment()).toMatchSnapshot();
})