const http = require("http");
const fs = require("fs");

http
    .createServer()
    .on("request", (req, res)=>{
        const fileStream = fs.createReadStream("utf8")
        

        if (req.url === '/'){ res.end(`<h1> The Magic Tome of Visual Puntrophe </h1>
            <p>how to play</p>
            <br />
            <p>-to answer you text in the url</p>
            <p>-all answers are in lowercase</p>
            <p>-if any spaces are needed they well be with _ </p>
            <p>-if you guess wrong just go back a to the question you were on</p>
            <p>-the Hint will be found at the very bottom of the pages</p>
            <p>there are 6 Visual Pun per</p>
            <p>there is no order in difficulty</p>
            <br>
            <p>-To Start type '/start' in to the url</p>
            `)}
            else if (req.url === '/start') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-1-583c3f7c92766__700.jpg">
                <img alt="Visual_pun_1" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-1-583c3f7c92766__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: what is says + what it is</p>`
                )
            }
            else if (req.url === '/peter_pan') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-106-583eab8bec6c7__700.jpg">
                <img alt="Visual_pun_2" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-106-583eab8bec6c7__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: synonym of screen capture</p>`)
            }
            else if (req.url === '/screenshot') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-3-583d42a266cd5__700.jpg">
                <img alt="Visual_pun_3" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-3-583d42a266cd5__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: going shoping?</p>`)
            }
            else if (req.url === '/bucket_list') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-98-583e9b781ce77__700.jpg">
                <img alt="Visual_pun_4" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-98-583e9b781ce77__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint:Native United States Honey Bee</p>`)
            }
            else if (req.url === '/usb') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-108-583eabda2cf3d__700.jpg">
                <img alt="Visual_pun_5" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-108-583eabda2cf3d__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: glass is not good for war</p>`)
            }
            else if (req.url === '/fish_tank') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-44-583d9d1b95ca0__700.jpg">
                <img alt="Visual_pun_6" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-44-583d9d1b95ca0__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: how is that going to cut a tree</p>`)
            }
            else if (req.url === '/chain_saw') {
                res.end(`<h1>Old Man Jenkins: You Win now try level 2 by puting "start_lv2" in the url</h1>`)
            }
            else if (req.url === '/cheat_sheat') {
                res.end(`<h1>Old Man Jenkins: are you really trying to cheat go back an play proper like you hear</h1>`)
            }
            else if (req.url === '/start_lv2') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-102-583edd5d4052f__700.jpg">
                <img alt="Visual_pun_LV2_1" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-102-583edd5d4052f__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: synonym of missing + the key that is missing</p>`)
            }
            else if (req.url === '/lost_control') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-92-583eca652cd2a__700.jpg">
                <img alt="Visual_pun_LV2_2" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-92-583eca652cd2a__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: what it is + what is on it </p>`) 
            }
            else if (req.url === '/bicicle') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-102-583e9d8806475__700.jpg">
                <img alt="Visual_pun_LV2_3" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-102-583e9d8806475__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: think back to math class </p>`) 
            }
            else if (req.url === '/square_root') {
                res.end(`<a href="https://i.redd.it/pf51nbzq06u51.png">
                <img alt="Visual_pun_LV2_4" src="https://i.redd.it/pf51nbzq06u51.png" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: when _ is sus </p>`) 
            }
            else if (req.url === '/impasta') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-78-583e8d045e188__700.jpg">
                <img alt="Visual_pun_LV2_5" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-78-583e8d045e188__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: it smells and tastes like the season of fall</p>`) 
            }
            else if (req.url === '/pumpkin_pie') {
                res.end(`<a href="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-95-583edc3e1f417__700.jpg">
                <img alt="Visual_pun_LV2_6" src="https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-95-583edc3e1f417__700.jpg" 
                width="700" height="700"/>
                </a>
                <br>
                <p>hint: "a person who spends little or no time exercising and a great deal of time watching television." </p>`) 
            }
            else if (req.url === '/couch_potato') {
                res.end(`<h1>Old Man Jenkins: You Win now try level 3 by puting "go_lv3" in the url</h1>`)
            }
            else if (req.url === '/go_lv3') {
                res.end(`Level 3 does no exist at this curent time`)
            }

            else if (req.url === '/peck') {
                res.end(`<h1>"Real" Cheat Sheat</h1>
                <p>1 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-1-583c3f7c92766__700.jpg</p>
                <p>    peter_pan</p>
                <p>    hint: what is says + what it is</p>
                    <br />
                <p>2 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-106-583eab8bec6c7__700.jpg</p>
                <p>    screenshot</p>
                <p>    hint: synonym of screen capture</p>
                    <br />
                <p>3 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-3-583d42a266cd5__700.jpg</p>
                <p>    bucket_list</p>
                <p>    hint: going shoping?</p>
                    <br />
                <p>4 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-98-583e9b781ce77__700.jpg</p>
                <p>    usb</p>
                <p>    hint: Native United States Honey Bee</p>
                    <br />
                <p>5 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-108-583eabda2cf3d__700.jpg</p>
                <p>    fish_tank</p>
                <p>    hint: glass is not good for war</p>
                    <br />
                <p>6 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-44-583d9d1b95ca0__700.jpg</p>
                <p>    chain_saw</p>
                <p>    hint: how is that going to cut a tree</p>
                
                <h1>LV2</h1>
                <br />
                <p>1 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-102-583edd5d4052f__700.jpg</p>
                <p>lost_control</p>
                <p>hint: synonym of missing + that key</p>
                
                <br />
                <p>2 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-92-583eca652cd2a__700.jpg
                </p>
                <p> bicicle</p>
                <p>hint: what it is + what is on it</p>
                
                <br />
                <p>3 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-102-583e9d8806475__700.jpg</p>
                <p>square_root</p>
                <p>hint: think back to math class</p>
                
                <br />
                <p>4 https://i.redd.it/pf51nbzq06u51.png</p>
                <p>impasta</p>
                <p>hint: when _ is sus</p>
                
                <br />
                <p>5 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-78-583e8d045e188__700.jpg</p>
                <p>pumpkin_pie</p>
                <p>hint: it smells and tastes like the season of fall</p>
                
                <br />
                <p>6 https://www.boredpanda.com/blog/wp-content/uploads/2016/11/clever-puns-95-583edc3e1f417__700.jpg</p>
                <p>couch_potato</p>
                <p>hint:"a person who spends little or no time exercising and a great deal of time watching television."</p>
                
                <br />
                <p></p>
                <p></p>
                <p></p>`)
            }
        else res.end('Old Man Jenkins: Go back and try Again')
    })
    // .on('test')
    // .on('load', () =>{
    //     console.log("server is listening");
    // })
    .listen(3000, () =>{
        console.log("server is listening");
    })