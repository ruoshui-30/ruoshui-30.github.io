var posts=["post/2779079921.html","post/1243066710.html","post/3374613233.html","post/3178994972.html","post/3071996059.html","post/2634649135.html","post/2190284905.html","post/4167399768.html","post/3750417846.html","post/4285059441.html","post/19373731.html","post/3410261246.html","post/3897361712.html","post/4068325112.html","post/1610835744.html","post/1076364274.html","post/2378364614.html","post/1761027481.html","post/105771946.html","post/1015866879.html","post/1143508581.html","post/2186894026.html","post/4266150882.html","post/1.html","post/3618576128.html","post/1075686486.html","post/963023030.html","post/1408774345.html","post/4155746413.html","post/3126067608.html","post/4197633897.html","post/1555306516.html","post/3071166841.html","post/3262864011.html","post/622435872.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};