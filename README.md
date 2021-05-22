# sails-issue-req-param-length

a [Sails](http://sailsjs.org) application to demonstrate [sails issue #3738](https://github.com/balderdashy/sails/issues/3738)

## To reproduce:

Lift the app with ```sails c```

Visit ```http://localhost:1337/example?length=something-non-zero``` in your favourite web browser.
```myLength``` in the response should echo the ```length``` parameter of the request, instead it is always zero

(The problem is also present if eg length is a parameter passed in a POSTed form)

