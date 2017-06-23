import test from 'ava';
import m from '.';

console.log(m('Lorem ipsum dolor sit amet'));

const fixture = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.';
const fixtureBuf = Buffer.from(fixture);

test(t => {
	t.is(m(fixture), 'bb9d8fe615');
	t.is(m(fixtureBuf), 'bb9d8fe615');
});
