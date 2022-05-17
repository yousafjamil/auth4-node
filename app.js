const  express = require('express');
const app = express();
const mongoose = require('mongoose');
 mongoose.connect(DB_url).then( ()=>{
     console.log('DB successsfully connected..')
 }).catch( (err)=> console.log('error in dB Connenction....',err))

///////////////////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/user',require('./routes/user'))
const  port=process.env.port||5000
app.listen(port ,()=>{
    console.log('app listening on port ')
    });

    ////////////////////////////////////////////
// for (let i=0; i<=10;  i++){
// console.log(i,'shabir')
// }
///////////////////////////////////////
// for(let i=0; i<10; i+=2){
//     console.log(i)
// }
/////////////////////////////////
// for (let i=1; i<=10; i+=2){
//     console.log(i)
// }
/////////////////////////
// for(let i=0; i<=15; i++){
//     if(i%2==0){
//         console.log('even  numbrr',i)
//     }else{
//         console.log('odd',i)
//     }
// }
////

// const a=2;
// const  b=3;
// if(2==9){
// console.log('2 = to  2')
// }else {
//   console.log('2 is not != 2')
// }
////////////////////////
// const  name='ahma'
// if(name=='ahmad'){
//   console.log('ahmad is present')
// }else{
//   console.log('ahmad abset')
// }
///////////////////let 
// let a=2;
// let b=2;
// let c=4;

// if(a==3){
// console.log('a is calling')
// }else if(b==3){
// console.log('b is calling')
// }else{
//   console.log('c is calling')
// }

// app.use('/api/user',require('./routes/user'))

// const p1 =new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log('async 1 calling')
//     resolve(1)
//     reject(new Error('some  erroor occured'))
// },2000);
// });


// const p2 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log('async 1 calling')
//         resolve(2)
//     },2000)
//     })

//     Promise.all([p1,p2])
//     .then((r)=>console.log(r))
//     .catch((err)=>console.log(err.message))



// const u= Promise.resolve({id:1,name:"asad"});
// const  E1=Promise.reject(new Error('some err'))
// const  E2=Promise.reject('some direct  message of error')
// u.then(r=>console.log(r))


// E1.catch((e)=>console.log(e.message))
// E2.catch((e)=>console.log(e))


//  const  user=(id)=>{
//  return new Promise((resolve,rejected)=>{
//     setTimeout( ()=>{
//         resolve(id)
//         rejected(new Error('error occured...'))
//     },3000)
//  })  
// }


// const  u=user(12);
// u.then(r=>{console.log(r)}).catch(er=>console.log(er))


// const  p=new Promise((res,rej)=>{
  
//     setTimeout(()=>{
     
//   res('condole')
//   rej(new Error('new  rooror'))
//     },2000)
// });

// p.then(re=>{
//     console.log(re)
// }).catch(e=>{
//     console.log(e.message)
// })
// const  subjects=[
//     {
//         id:1,
//         name:"asad"
//     },
//     {
//         id:2,
//         name:"ahmad"
//     }
// ]
// app.get('/:id', (req,res) =>{
// const  name=subjects.find((nm)=>nm.id ==req.params.id);
//     if(!name){
//         res.status(404).send('not found')
//     }else{
//         res.status(200).send(name)
//     }
// });


// app.post('/add', (req, res) =>{
// const subject={
//     id:subjects.length+1,
//     name:req.body.name
// };
// subjects.push(subject);
// res.send(subject);
// })


