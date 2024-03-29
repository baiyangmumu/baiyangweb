const Mock=require('mockjs')
const Random = require('mockjs').Random;
const data=Mock.mock({
    //定义数据生产规则
    'empList|6':[
        {
            'id|+1': 1,
            'name': '@cname',
            'price': '@floot',
            'status': '@boolean',
            'birthday': '@date("yyyy-MM-dd")',
            'createDate': '@datetime("yyyy-MM-dd HH:mm:ss")',
            "image": Random.image('200x100','#FF660'),
            'ctitle': '@ctitle(5,10)', //标题
            'content': '@csentence(100,200)', //文本
            'ip': '@ip',
            'email' : '@email',
            'phone|11': '@integer(0,9)'

            
        }
    ]
})
console.log(JSON.stringify(data,null,2))