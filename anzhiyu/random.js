var posts=["post/2779079921.html","post/1243066710.html","post/3178994972.html","post/3071996059.html","post/4155746413.html","post/3126067608.html","post/4197633897.html","post/622435872.html","post/3071166841.html","post/1555306516.html","post/3262864011.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};