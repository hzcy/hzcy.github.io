var fs = require('fs');
var join = require('path').join;

function getJsonFiles(jsonPath){
 
   

    //**************分组名称 */
    var groupName = "IT新闻";
    //**************分组名称 */
    let str="[";
    function findJsonFile(path){
        let files = fs.readdirSync(path);
       

        

        files.forEach(function (item, index) {
            //console.log(item);
            
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);

            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            
        
            if (stat.isFile() === true) { 
                let type = getParenthesesStr(item);
                let strdate = getBracketStr(item);
                //console.log(strdate);
                let itemname = item.replace("("+type+")","");
                itemname = itemname.replace(".txt","");
                itemname = itemname.replace("["+strdate+"]","");
                itemname = itemname.replace(".json","");
                let a = '{"name":"'+itemname+'","type":"'+type+'","link":"/'+groupName+'/'+item+'","date":"'+strdate+'"}';
                //let a = '{"name":"'+itemname+'","type":"'+type+'","link":"'+item+'"}';
                
                //console.log(m);
                if(type != ""){
                if(index == files.length-1){
                    //json.push(mapToJson(m)+"]");
                   
                    str = str+a+"]";
                    //console.log(mapToJson(m));
                     //console.log("]");
                }else{
                    str = str+a+",";
                    //console.log(mapToJson(m)+",");
                }
            }
            }
        });
    }
    findJsonFile(jsonPath);
   console.log(TransferString(str));
   fs.writeFile('./list.json',str,function(err){
    if (err) {res.status(500).send('Server is error...')}
   })
}

getJsonFiles("./");

function mapToJson(map) {
    return JSON.stringify(strMapToObj(map));
    }

    function strMapToObj(strMap){
    let obj= Object.create(null);
    for (let[k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
  

  //替换所有的回车换行  
function TransferString(content)  
{  
    var string = content;  
    try{  
        string=string.replace(/\r\n/g,"<BR>")  
        string=string.replace(/\n/g,"<BR>");  
    }catch(e) {  
        alert(e.message);  
    }  
    return string;  
}  
 

/**
 * 取出小括号内的内容
 * @param text
 * @returns {string}
 */
 function getParenthesesStr(text) {
    let result = ''
   
    var a = text.match(/\(([^)]*)\)/);
    // 此时result＝["(dsfasjfj3124123)", "dsfasjfj3124123"];
    if (a) {
        result = a[1]; // "dsfasjfj3124123"
    }
    
    return result
}

function getBracketStr(text) {
    let result = ''
   
    var a = text.match(/\[(.+?)\]/);
    // 此时result＝["(dsfasjfj3124123)", "dsfasjfj3124123"];
    if (a) {
        result = a[1]; // "dsfasjfj3124123"
    }
    
    return result
}
//获取当前时间，格式YYYY-MM-DD
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHours =  date.getHours(); // 小时
    var strMinutes =date.getMinutes(); // 分
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate + " " + strHours + ":"+strHours;
    return currentdate;
}