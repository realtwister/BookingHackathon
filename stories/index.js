import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import MyMap from './MyMap';
import Welcome from './Welcome';
import Test from './test_isInPolygon';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('MyMap', module)
	.add('example', () => (
		<MyMap></MyMap>));

storiesOf('isInPolygon', module)
	.add('isInPolygon', (Points,Polygon) => (
		<MyMap></MyMap>))
	.add('Test_isInPolgon', () => (
    <Test></Test>
  ));
	
