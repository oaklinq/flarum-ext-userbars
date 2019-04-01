import app from 'flarum/app';
import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

const userbars = ['https://i.imgur.com/W4QLNuf.png', 'https://i.imgur.com/YD9VWmV.png', 'https://i.imgur.com/oWEqb4T.png', 'https://i.imgur.com/GicrmFe.png', 'https://i.imgur.com/q1SxZpC.png', 'https://i.imgur.com/Bfd1Yli.png', 'https://i.imgur.com/DZvj0dw.gif', 'https://i.imgur.com/fnj6lLa.png', 'https://i.imgur.com/jd7Otnp.png', 'https://i.imgur.com/s7rsTlX.png', 'https://i.imgur.com/tWuLm9m.png', 'https://i.imgur.com/CjiM4zS.jpg', 'https://i.imgur.com/PTe7WZE.jpg', 'https://i.imgur.com/jayivPi.gif', 'https://i.imgur.com/W182msj.png', 'https://i.imgur.com/Bnvpo74.jpg', 'https://i.imgur.com/j51RFoe.png', 'https://i.imgur.com/W4QLNuf.png'];

app.initializers.add('kvothe-userbars', () => {
  extend(CommentPost.prototype, 'footerItems', function(items) {
  	const fiveRandomUserbars = getRandom(userbars, 5);
  	items.add('signature', 
  		m('userbars', [
  			fiveRandomUserbars.map(
  				(i) => {
  					return m('img.userbar', {src: i})
  				}
  			)
  		])
  	);
  });
});


function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}