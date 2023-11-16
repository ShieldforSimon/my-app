// 数组所有元素+1
// 过滤出数组中的偶数
// 将数组元素转为字符串
// 数组元素求和
// 统计数组中某个元素的出现次数
// 将二维数组展开为一维数组
// 删除数组某个元素
// 对数组去重
// 获取数组中的最大值
// 对数组按某属性值排序
// 将多个数组拼接成一个数组
// 对象数组按某属性分组
// 数组元素出现次数排序
// 两数组间值的笛卡尔积
// 数组按照条件分割成大小组
// 数组中找出元素间隔超过阈值的元素
// 数组扁平化处理成指定深度
// 数组按字段分组后求和
// 多维数组展开成一维并过滤
// 矩阵数组转置
// const numarray=[1,2,34,5,6]
// const result=numarray.map(item=>item+1)
// console.log(result);


// const numarray=[1,2,34,5,6]
// const result=numarray.filter(item=>item%2===0)
// console.log(result);

// toString()的用法
// const numarray=[1,2,34,5,6]
// const result=numarray.map(item=>item.toString())
// console.log(result);





//数组每三个拆分
//  arr = [2,3,4,5,7,8,9,44,55,12,25];
// function group(array,count){
//     let newArr=[];
//     for(i=0;i<array.length;i+=count)
//     {
//         newArr.push(array.slice(i,count+i))
//     }
//        return newArr;
// }


// 数组长度超过10...表示
// arr=["asdsdasfdsgfdg","fdgfgfhgh","sfdsgdfhghfhgfhhf"]
// function groupreplace(array){
// return array.map(item=>item.length>10?(item.slice(1,11)+"..."):item);
// }


// 过滤出数组中的偶数

// const arr=[1,2,3,4,5,6,7,8,9]

// console.log(arr.filter(item=>item%2==0))

// 将数组元素转为大写
// const arr=['a','b','c']
// console.log(arr.map(item=>item.toUpperCase()));

// 计算数组元素之和
// const arr=[1,3,4,5,7,9]
// console.log(arr.reduce((a,b)=>{a+b},0));

//4 将二维数组扁平化为一维数组
// const arr=[[1,2,3],4,5,6]
// console.log(arr.flat(1));

// 5从数组中删除指定元素
// const arr=[1,2,3,4,"a","b"]
// console.log(arr.filter(item=>item!=="b"));

// 7按照指定规则将数组元素组合
// const arr=[{name:"lll",age:14},{name:"zzz",age:15},{name:"ccc",age:16},{name:"qqq",age:16}]
// function group(users){
//     const team={};
//     users.forEach(user=>{
//         if(!team[user.age])
//         {team[user.age]=[]};
//         team[user.age].push(user);
//     });
//     return team;
// }
// console.log(group(arr));


// 10数组中分割出符合条件的元素组成新数组
const arr=[1,2,3,4,5,6,7,8,9,10,11,12]
console.log(arr.filter(a=>a%3!==0));






// 实现一个简单的链式调用语法
// 数组元素进行分组且分组后按人数排序
// 多维数组合并为一维数组并按序号排序
// 删除数组中最后一个元素
// 数组元素进行多级分组
// 实现一个管道函数串联操作数组
// 实现数组的uniq操作
// 实现一个瀑布流布局的简易算法



// 8对数组元素根据条件进行分组
// 9数组元素出现次数从高到低排序
// arr=[1,1,2,3,5,8,1,3,2,1,3,6,4,9,7,0]

// function order(ar){
//     const mid={};
//     ar.forEach(element => {
//         if(!mid[element])
//         {mid[element]=1};
//         mid[element]+=1;
//     });
//    const key=Object.keys(mid);
//    key.sort((a,b)=>{return mid[b]-mid[a];});
//    return key.map(Number);
// }
// console.log(order(arr));





























































































// 数组元素求和
// const numarray=[1,2,34,5,6]
// const result=numarray.reduce((a,b)=>a+b,0)
// console.log(result);


// indexof?
// const arr=[1,1,2,3,5,8]
// const result=arr.reduce((a,b)=>{
//     if (b===1){
//         return a+1;
//     }
//     return a;
// },0)

// const arr=[1,1,2,3,5,8];
// let count=0;
// const result=arr.forEach((item,count)=>{
//     if(item===1){
//         count++;
//     }
// });
