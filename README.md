# sails-issue-req-param-length

a [Sails](http://sailsjs.org) application

## To reproduce:

Lift the app with ```sails c```

Visit ```http://localhost:1337/example?length=something-non-zero``` in your favourite web browser.
```myLength``` in the response should echo the ```length``` parameter of the request, instead it is always zero

(The problem is also present if eg length is a parameter passed in a POSTed form)

