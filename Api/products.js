const products = [
 {
   id: 1,
   Name: "Comfort Haven Sofa",
   category : "Sofa" ,
   description: 
   " Sink into the plush cushions of the Comfort Haven Sofa and experience unparalleled comfort and relaxation in style. " ,
   price: 100,
   discount : false ,
   sale : 50 ,
  rate : 4.5 ,
   imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689550186/FurniProApp/Products/sofa/sofa_d2bhdd.png",
   count : 12 ,
   sold : 20 ,
   tags : "Chair , Sofa , Single Sofa" ,
   reviews : 15,
   comments: [
    {      
      Name: "Olivia",
    Email: "",
    date: "6/3/2023",
    Comment: " The epitome of relaxation and unwavering comfort.", } ,
    {      
      Name: "JamesAbigail",
    Email: "",
    date: "6/19/2023",
    Comment: " Experience pure bliss as you sink into its plush embrace.", },
    {      
      Name: "Joseph",
    Email: "",
    date: "7/1/2023",
    Comment: "A haven of comfort that welcomes you with open arms.", },
    {      
      Name: "Liam",
    Email: "",
    date: "7/13/2023",
    Comment: " Your perfect companion for cozy evenings and lazy weekends.", },

   ],

 }
,
 {
   id: 2,
   Name: "Chair" ,
   category : "Chairs",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 200,
   discount : true ,
    sale : 150 , 
  rate : 3 ,
   imageLink: "../../Imgs/Products/chair.png",
 count : 22 ,
 sold : 16 ,
 tags : "Chair , Sofa , ArmChair"  ,
 reviews : 13 ,
 comments: [
  {      
    Name: "Mia",
  Email: "",
  date: "7/13/2023",
  Comment: "dfdffddfdf", }


 ],

 },
 {
   id: 3,
   Name: "Commode",
   category : "Commodes",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 300,
   discount : false ,
    sale : 200 , 
  rate : 5 ,
   imageLink: "../../Imgs/Products/komod.png",
 count : 32  ,
 sold : 16 ,
 tags : "Commode , wooden Commode , single Comode"  ,
 reviews : 12 , 
 comments: [

  {      
    Name: "Sophia",
  Email: "dfdfddff",
  date: "7/13/2023",
  Comment: "dfdffddfdf", }

 ],
 

},
 {
   id: 4,
   Name: "Dresser" ,
   category : "Dressers",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 400,
   discount : true ,
    sale : 100 , 
  rate : 3.5 ,
  imageLink: "../../Imgs/Products/dresser.png",
  count : 12 ,
  sold : 25 ,
  tags : "Dresser , Wooden Dresser , Double Dresser " ,
  reviews : 22 ,
  comments: [
    {      
      Name: "Emily",
    Email: "dfdfddff",
    date: "7/13/2023",
    Comment: "dfdffddfdf", },
    {      
      Name: "Isabella",
    Email: "dfdfddff",
    date: "7/13/2023",
    Comment: "dfdffddfdf", }
  ],


},
 {
  id: 5,
  Name: "Table" ,
  category : "Tables",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 400,
  discount : true ,
   sale : 200 , 
  rate : 4 ,
  imageLink: "../../Imgs/Products/table.png",
  count : 16 ,
  sold : 14 ,
  tags : "Table , Wooden Table , Disk" ,
  reviews : 7,
  comments: [
    {      
      Name: "Liam",
    Email: "dfdfddff",
    date: "7/13/2023",
    Comment: "dfdffddfdf", }

  ],


},
{
  id: 6,
  Name: "DreamCloud Bed",
category : "Beds"  ,
description:
    "DreamCloud Bed: Experience the ultimate luxury and comfort with the DreamCloud Bed, designed to provide a restful and rejuvenating sleep experience like never before.",
  price: 450,
  discount : false ,
  sale : 300 , 
  rate : 4.5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689547092/FurniProApp/Products/Beds/4_nrjxsq.png" ,
  count : 20 ,
  sold : 13 ,
  tags : "Bed , wooden Bed , steel Bed" ,
  reviews : 11 ,
  comments: [
    {      
      Name: "Emily",
    Email: "",
    date: "7/1/2023",
    Comment: "The epitome of luxury and dream-like comfort.", 
    
  } , 
  {      
    Name: "Daniel",
  Email: "",
  date: "7/3/2023",
  Comment: "A sleep sanctuary that delivers heavenly rest and unrivaled comfort", 
  
}

  ],
},
{
  id: 7,
  Name: "Serene Lounge Sofa",
  category : "Sofa" ,
  description:
  "Embrace the tranquility of the Serene Lounge Sofa, offering a perfect blend of elegance and cozy comfort.",
  price: 200,
  discount : true ,
  sale : 150 ,
 rate : 4.5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689550236/FurniProApp/Products/sofa/sofa-ga8577cf49_1280-transformed_ke8hei.png",
  count : 32 ,
  sold : 8 ,
  tags : "Chair , Sofa , Single Sofa" ,
  reviews : 4,
  comments: [
   {      
     Name: "Mia",
   Email: "",
   date: "7/13/2023",
   Comment: "Lounge in tranquility and embrace the serenity of pure comfort.", }

  ],

}
,
{
  id: 8,
  Name: "Chair" ,
  category : "Chairs",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 200,
  discount : true ,
   sale : 150 , 
 rate : 3 ,
  imageLink: "../../Imgs/Products/chair.png",
count : 22 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 13 ,
comments: [
 {      
   Name: "Matthew",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }


],

},
{
  id: 9,
  Name: "Commode",
  category : "Commodes",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 300,
  discount : false ,
   sale : 200 , 
 rate : 5 ,
  imageLink: "../../Imgs/Products/komod.png",
count : 23  ,
sold : 16 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 12 , 
comments: [

 {      
   Name: "Henry",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }

],


},
{
  id: 10,
  Name: "Dresser" ,
  category : "Dressers",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 500,
  discount : true ,
   sale : 350 , 
 rate : 3.5 ,
 imageLink: "../../Imgs/Products/dresser.png",
 count : 32 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 22 ,
 comments: [
   {      
     Name: "Sophia",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 11,
 Name: "Table" ,
 category : "Tables",
 description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
 price: 400,
 discount : true ,
  sale : 300 , 
 rate : 4 ,
 imageLink: "../../Imgs/Products/table.png",
 count : 22 ,
 sold : 14 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 10,
 comments: [
   {      
     Name: "Mia",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 12,
 Name: "Serenity Sleep Bed",
category : "Beds"  ,
description:
   "Serenity Sleep Bed: Drift away into a peaceful slumber with the Serenity Sleep Bed, offering unrivaled tranquility and serenity for a blissful night's rest.",
 price: 500,
 discount : false ,
 sale : 300 , 
 rate : 3 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689547089/FurniProApp/Products/Beds/5_gdpbv6.png" ,
 count : 26 ,
 sold : 19 ,
 tags : "Bed , wooden Bed , steel Bed" ,
 reviews : 12 ,
 comments: [
   {      
     Name: "Alexander",
   Email: "",
   date: "7/13/2023",
   Comment: "A tranquil haven for blissful and rejuvenating slumber." }

 ],
},
{
  id: 13,
  Name: "Luxe Retreat Sofa",
  category : "Sofa" ,
  description: 
  "Indulge in luxury and unwind in the opulent embrace of the Luxe Retreat Sofa, designed for lavish lounging." ,
  price: 300,
  discount : false ,
  sale : 250 ,
 rate : 4.5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689550324/FurniProApp/Products/sofa/couch-g12ba59590_1280_fqqai7.png",
  count : 29 ,
  sold : 23 ,
  tags : "Chair , Sofa , Single Sofa" ,
  reviews : 15,
  comments: [
   {      
     Name: "William",
   Email: "",
   date: "7/13/2023",
   Comment: "Elevate your living space with lavish luxury and timeless elegance.", }

  ],

}
,
{
  id: 14,
  Name: "Chair" ,
  category : "Chairs",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 200,
  discount : true ,
   sale : 150 , 
 rate : 3 ,
  imageLink: "../../Imgs/Products/chair.png",
count : 40 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 11 ,
comments: [
 {      
   Name: "Liam",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }


],

},
{
  id: 15,
  Name: "Commode",
  category : "Commodes",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 300,
  discount : false ,
   sale : 270 , 
 rate : 5 ,
  imageLink: "../../Imgs/Products/komod.png",
count : 11  ,
sold : 9 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 7 , 
comments: [

 {      
   Name: "Henry",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }

],


},
{
  id: 16,
  Name: "Dresser" ,
  category : "Dressers",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 600,
  discount : false ,
   sale : 400 , 
 rate : 3.5 ,
 imageLink: "../../Imgs/Products/dresser.png",
 count : 30 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 22 ,
 comments: [
   {      
     Name: "Sophia",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 17,
 Name: "Table" ,
 category : "Tables",
 description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
 price: 300,
 discount : true ,
  sale : 250 , 
 rate : 4 ,
 imageLink: "../../Imgs/Products/table.png",
 count : 23 ,
 sold : 16 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 10,
 comments: [
   {      
     Name: "Emily",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 18,
 Name: "Heavenly Haven Bed",
category : "Beds"  ,
description:
"Heavenly Haven Bed: Discover a heavenly escape with the indulgent comfort and serene bliss of the Heavenly Haven Bed, a sanctuary for deep relaxation."
 ,price: 500,
 discount : true ,
 sale : 300 , 
 rate : 4.5 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689547093/FurniProApp/Products/Beds/3_jgrw4w.png" ,
 count : 27 ,
 sold : 11 ,
 tags : "Bed , wooden Bed , steel Bed" ,
 reviews : 9 ,
 comments: [
   {      
     Name: "Liam",
   Email: "",
   date: "7/2/2023",
   Comment: "Where dreams come true in a serene sleep haven.", } , 
   {      
    Name: "Isabella",
  Email: "",
  date: "7/4/2023",
  Comment: " Find tranquility and embrace the beauty of deep slumber", } , 
  {      
    Name: "Sophia",
  Email: "",
  date: "7/5/2023",
  Comment: " A peaceful retreat for uninterrupted, restful nights.", }

 ],
},
{
  id: 19,
  Name: "Cozy Haven Sofa",
  category : "Sofa" ,
  description:
  "Create a cozy haven in your living space with the inviting and snug embrace of the Cozy Haven Sofa." , 
  price: 200,
  discount : false ,
  sale : 150 ,
 rate : 4.5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689550267/FurniProApp/Products/sofa/couch-gf5402c179_1280-transformed_rpfoyj.png",
  count : 24 ,
  sold : 16 ,
  tags : "Chair , Sofa , Single Sofa" ,
  reviews : 13,
  comments: [
   {      
     Name: "Henry",
   Email: "",
   date: "7/13/2023",
   Comment: "Snuggle up and find solace in its warm embrace.", }

  ],

}
,
{
  id: 20,
  Name: "Chair" ,
  category : "Chairs",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 150,
  discount : true ,
   sale : 100 , 
 rate : 3 ,
  imageLink: "../../Imgs/Products/chair.png",
count : 22 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 13 ,
comments: [
 {      
   Name: "Henry",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }


],

},
{
  id: 21,
  Name: "Commode",
  category : "Commodes",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 300,
  discount : false ,
   sale : 200 , 
 rate : 5 ,
  imageLink: "../../Imgs/Products/komod.png",
count : 21  ,
sold : 18 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 12 , 
comments: [

 {      
   Name: "Alexander",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }

],


},
{
  id: 22,
  Name: "Dresser" ,
  category : "Dressers",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 400,
  discount : true ,
   sale : 300 , 
 rate : 3.5 ,
 imageLink: "../../Imgs/Products/dresser.png",
 count : 30 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 17 ,
 comments: [
   {      
     Name: "Isabella",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 23,
 Name: "Table" ,
 category : "Tables",
 description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
 price: 400,
 discount : true ,
  sale : 200 , 
 rate : 4 ,
 imageLink: "../../Imgs/Products/table.png",
 count : 32 ,
 sold : 19 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 12,
 comments: [
   {      
     Name: "Matthew",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 24,
 Name: "Blissful Rest Bed",
category : "Beds"  ,
description:
"Blissful Rest Bed: Sink into pure bliss and experience unparalleled relaxation with the sumptuous comfort and support of the Blissful Rest Bed."
, price: 400,
 discount : true ,
 sale : 200 , 
 rate : 4.5 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689547088/FurniProApp/Products/Beds/2_hgctb5.png" ,
 count : 21 ,
 sold : 13 ,
 tags : "Bed , wooden Bed , steel Bed" ,
 reviews : 7 ,
 comments: [
   {      
     Name: "Noah",
   Email: "",
   date: "7/13/2023",
   Comment: "Experience pure bliss and wake up refreshed every morning.", }

 ],
},
{
  id: 25,
  Name: "Tranquil Oasis Sofa",
  category : "Sofa" ,
  description: 
  "Transform your living room into a serene oasis with the Tranquil Oasis Sofa, where comfort and serenity converge.",
  price: 150,
  discount : false ,
  sale : 100 ,
 rate : 3.5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689550215/FurniProApp/Products/sofa/sofa-ge3408ae2b_1280_qrntj3.png",
  count : 12 ,
  sold : 9 ,
  tags : "Chair , Sofa , Single Sofa" ,
  reviews : 4,
  comments: [
   {      
     Name: "Matthew",
   Email: "",
   date: "7/13/2023",
   Comment: "Create a serene retreat and unwind in utmost tranquility.", }

  ],

}
,
{
  id: 26,
  Name: "Chair" ,
  category : "Chairs",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 200,
  discount : true ,
   sale : 150 , 
 rate : 3 ,
  imageLink: "../../Imgs/Products/chair.png",
count : 23 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 11 ,
comments: [
 {      
   Name: "Liam",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }


],

},
{
  id: 27,
  Name: "Commode",
  category : "Commodes",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 300,
  discount : false ,
   sale : 200 , 
 rate : 5 ,
  imageLink: "../../Imgs/Products/komod.png",
count : 11  ,
sold : 8 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 6 , 
comments: [

 {      
   Name: "Daniel",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "dfdffddfdf", }

],


},
{
  id: 28,
  Name: "Dresser" ,
  category : "Dressers",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 400,
  discount : true ,
   sale : 200 , 
 rate : 3.5 ,
 imageLink: "../../Imgs/Products/dresser.png",
 count : 32 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 22 ,
 comments: [
   {      
     Name: "Sophia",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 29,
 Name: "Table" ,
 category : "Tables",
 description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
 price: 400,
 discount : true ,
  sale : 300 , 
 rate : 4 ,
 imageLink: "../../Imgs/Products/table.png",
 count : 16 ,
 sold : 14 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 9,
 comments: [
   {      
     Name: "Matthew",
   Email: "dfdfddff",
   date: "7/13/2023",
   Comment: "dfdffddfdf", }

 ],


},
{
 id: 30,
 Name: "Tranquil Oasis Bed",
category : "Beds"  ,
description: 
"Tranquil Oasis Bed: Create your own serene oasis with the Tranquil Oasis Bed, where tranquility and comfort converge for a peaceful night's sleep."
 ,price: 400,
 discount : false ,
 sale : 200 , 
 rate : 4 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689547693/FurniProApp/Products/Beds/Bed_room_hclccl.png" ,
 count : 20 ,
 sold : 11 ,
 tags : "Bed , wooden Bed , steel Bed" ,
 reviews : 7 ,
 comments: [
   {      
     Name: "Michael",
   Email: "",
   date: "7/13/2023",
   Comment: "Transform your bedroom into a soothing oasis of calm.", }

 ],
},

];

module.exports = products;











































































// {
//   id: 7,
//   Name: "Sofa",
// category : "Sofa"  ,
// description:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
//   price: 200,
//   discount : false ,
//   sale : 200 , 
//   rate : 4.5 ,
//   imageLink: "../../Imgs/Products/Bed room.png" ,
//   count : 12 ,
//   sold : 33  ,
//   tags : "Chair , Sofa , Single  Sofa" ,
//   reviews : 32,
//   comments: [
//     {      
//       Name: "dfdfdf",
//     Email: "dfdfddff",
//     date: "7/13/2023",
//     Comment: "dfdffddfdf", }

//   ],

  
// },
// {
//   id: 8,
//   Name: "Bed",
// category : "Tables"  ,
// description:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
//   price: 300,
//   sale : 200 , 
//   discount : false ,
//   rate : 4.5 ,
//   imageLink: "../../Imgs/Products/Bed room.png" ,
//   count : 11 ,
//   sold : 10 ,
//   tags : "Bed , wooden Bed , steel  Bed" ,
//   reviews : 14 ,
//   comments: [
//     {      
//       Name: "dfdfdf",
//     Email: "dfdfddff",
//     date: "7/13/2023",
//     Comment: "dfdffddfdf", }

//   ],

// },