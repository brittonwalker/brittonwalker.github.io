var items = [ 'peach','yellow','green','purple' ];
var item = items[Math.floor(Math.random()*items.length)];

$( 'body' ).addClass( item );