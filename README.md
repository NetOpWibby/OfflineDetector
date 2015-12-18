# OfflineDetector
Are you online?



## About

A lot of the projects I work on require Internet connectivity, so I thought it would be useful to let the end user know when they lose access. And then, I figured this code should live on GitHub.

There are two flavors — raw JavaScript and, jQuery. The JavaScript version doesn't automatically dismiss the offline notication once the end user regains connectivity, or center *exactly* on the page, but those are the only things it has over the jQuery version.

Here's what it looks like!

![](https://cloud.githubusercontent.com/assets/1288356/11890468/ca13f30c-a522-11e5-98d5-90882bba42aa.jpg)



## Run

If you're using jQuery, you know you need to also include the jQuery library in the `<head>` of your website. Then, put this line of code right before the closing `</body>` tag:

`<script src="scripts/offline.jquery.min.js"></script>`

If you are using the JavaScript version, do the same things as above, but without the jQuery library.