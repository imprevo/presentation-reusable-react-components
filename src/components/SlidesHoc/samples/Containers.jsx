import { withCounter } from './withCounter';
import { MyComponent1 } from '../../MyComponent1';
import { MyComponent2 } from '../../MyComponent2';

const Container1 = withCounter(MyComponent1);
const Container2 = withCounter(MyComponent2);

export { Container1, Container2 };
