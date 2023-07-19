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
      Name: "Grace",
    Email: "",
    date: "7/13/2023",
    Comment: " Your perfect companion for cozy evenings and lazy weekends.", },
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
   Name: "Retreat Chair" ,
   category : "Chairs",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 200,
   discount : true ,
    sale : 150 , 
  rate : 3 ,
   imageLink:    "https://res.cloudinary.com/drkevmgk2/image/upload/v1689589703/FurniProApp/Products/Chairs/chair_hjsggc.png",
 count : 22 ,
 sold : 16 ,
 tags : "Chair , Sofa , ArmChair"  ,
 reviews : 13 ,
 comments: [
  {      
    Name: "Scarlett",
  Email: "",
  date: "7/13/2023",
  Comment: "Embrace elegance and comfort in this timeless seating masterpiece.", }


 ],

 },
 {
   id: 3,
   Name: "Comfort Commode",
   category : "Commodes",
   description:
     "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
   price: 300,
   discount : false ,
    sale : 200 , 
  rate : 5 ,
   imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689642242/FurniProApp/Products/Commodes/dresser-g35b8b9956_1280_kdshwz.png",
 count : 11  ,
 sold : 8 ,
 tags : "Commode , wooden Commode , single Comode"  ,
 reviews : 12 , 
 comments: [

  {      
    Name: "Elizabeth",
  Email: "",
  date: "4/3/2023",
  Comment: " Experience comfort and efficiency with this reliable bathroom fixture.", }

 ],
 

},
 {
   id: 4,
   Name: "Cozy Dresser" ,
   category : "Dressers",
   description:
   "Transform your bedroom into a serene retreat with this stylish and spacious dresser, providing ample storage and tranquility.",
   price: 400,
   discount : true ,
    sale : 100 , 
  rate : 3.5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644197/FurniProApp/Products/Dressers/cupboard-g3ab8729a5_1280_pdb8on.png",
  count : 12 ,
  sold : 25 ,
  tags : "Dresser , Wooden Dresser , Double Dresser " ,
  reviews : 22 ,
  comments: [
    {      
      Name: "Matthew",
    Email: "",
    date: "7/7/2023",
    Comment: "Find tranquility and storage solutions in this stylish dresser.", }

  ],


},
 {
  id: 5,
  Name: "Cozy Table" ,
  category : "Tables",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 400,
  discount : true ,
   sale : 200 , 
  rate : 4 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644180/FurniProApp/Products/Tables/wooden-g25b2e182f_1280_k3jzhk.png",
  count : 16 ,
  sold : 14 ,
  tags : "Table , Wooden Table , Disk" ,
  reviews : 7,
  comments: [
    {      
      Name: "James",
    Email: "",
    date: "7/13/2023",
    Comment: "A harmonious centerpiece for delightful meals and memorable gatherings.", }

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
  Name: "Accent Chair" ,
  category : "Chairs",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 200,
  discount : true ,
   sale : 100 , 
 rate : 3 ,
  imageLink:   "https://res.cloudinary.com/drkevmgk2/image/upload/v1689589616/FurniProApp/Products/Chairs/chair-ga087e88d2_1280_ckw5k0.png",
count : 22 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 13 ,
comments: [
 {      
   Name: "Noah",
 Email: "",
 date: "7/13/2023",
 Comment: " Find inner peace and tranquility in the serene embrace of this chair.", }


],

},
{
  id: 9,
  Name: "Elegance Commode",
  category : "Commodes",
  description:
  "Elevate the elegance of your bathroom with the Essence Commode, showcasing a perfect balance of style and functionality." ,
  price: 300,
  discount : false ,
   sale : 200 , 
 rate : 5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689642244/FurniProApp/Products/Commodes/antique-furniture-g20d624b0e_1280_oultn4.png",
count : 11  ,
sold : 8 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 12 , 
comments: [

 {      
   Name: "Joseph",
 Email: "",
 date: "15/1/2023",
 Comment: "Enhance your bathroom with the essence of elegance and sophistication.", }

],


},
{
  id: 10,
  Name: "Tranquil Dresser" ,
  category : "Dressers",
  description:
  "Experience perfect harmony in your bedroom with the Harmony Haven Dresser, offering a blend of functionality and soothing aesthetics.",
  price: 400,
  discount : true ,
   sale : 350 , 
 rate : 3.5 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644197/FurniProApp/Products/Dressers/cupboard-g713b6d5fa_1280_u8oqgx.png",
 count : 12 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 22 ,
 comments: [
   {      
     Name: "Abigail",
   Email: "",
   date: "7/6/2023",
   Comment: "Find tranquility and storage solutions in this stylish dresser.", }

 ],


},
{
 id: 11,
 Name: "Zen Table" ,
 category : "Tables",
 description:
 "Enhance your living space with the Serenity Coffee Table, offering a serene focal point and practical surface for relaxation and socializing.",
 price: 400,
 discount : true ,
  sale : 300 , 
 rate : 4 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644144/FurniProApp/Products/Tables/table_vjazk7.png",
 count : 16 ,
 sold : 14 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 10,
 comments: [
   {      
     Name: "William",
   Email: "",
   date: "7/13/2023",
   Comment: "Elevate your living space with serene style and functionality.", }

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
  Name: "Cozy Cocoon Chair" ,
  category : "Chairs",
  description: "Nestle into the cozy embrace of the Cocoon Chair, designed to provide a sense of security and comfort like no other.",
  price: 200,
  discount : true ,
   sale : 150 , 
 rate : 3 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689589583/FurniProApp/Products/Chairs/chair-g0a303b067_1280-transformed_jxqopi.png",
count : 22 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 11 ,
comments: [
 {      
   Name: "Liam",
 Email: "",
 date: "7/13/2023",
 Comment: "Add a touch of sophistication and style to any space with this elegant chair.", }


],

},
{
  id: 15,
  Name: "Tranquil Commode",
  category : "Commodes",
  description:
  "Create a tranquil retreat in your bathroom with this thoughtfully designed commode, combining aesthetics with practicality for a serene experience." ,
  price: 300,
  discount : true ,
   sale : 270 , 
 rate : 5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689642246/FurniProApp/Products/Commodes/work-table-g85232ff95_1280_cryfsd.png",
count : 11  ,
sold : 9 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 7 , 
comments: [

 {      
   Name: "Emily",
 Email: "",
 date: "5/14/2023",
 Comment: " A stylish and serene addition to any bathroom retreat.", }

],


},
{
  id: 16,
  Name: "Elegance Dresser" ,
  category : "Dressers",
  description:
  "Elevate the elegance of your bedroom with the Essence Dresser, featuring a timeless design and impeccable craftsmanship.",
  price: 400,
  discount : true ,
   sale : 100 , 
 rate : 3.5 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644195/FurniProApp/Products/Dressers/armoire-g8d30bd634_1280_qzgf9s.png",
 count : 12 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 22 ,
 comments: [
   {      
     Name: "Samuel",
   Email: "",
   date: "1/13/2023",
   Comment: "Add a touch of timeless elegance to your bedroom decor.", }

 ],


},
{
 id: 17,
 Name: "Elegance Table" ,
 category : "Tables",
 description:
 "Make a statement with the Elegance Console Table, featuring a sleek design that adds a touch of sophistication to any entryway or hallway.",
 price: 400,
 discount : true ,
  sale : 250 , 
 rate : 4 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644179/FurniProApp/Products/Tables/gothic-desk-g183c1c2c8_1280_ahvsma.png",
 count : 16 ,
 sold : 14 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 10,
 comments: [
   {      
     Name: "Benjamin",
   Email: "",
   date: "7/13/2023",
   Comment: "Exude elegance and sophistication with this stunning console table.", }

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
  Name: "Serenity Recliner Chair" ,
  category : "Chairs",
  description: "Indulge in ultimate relaxation with the Serenity Recliner Chair, featuring adjustable positions and plush cushioning for pure comfort." ,
  price: 200,
  discount : true ,
   sale : 100 , 
 rate : 3 ,
  imageLink:   "https://res.cloudinary.com/drkevmgk2/image/upload/v1689589567/FurniProApp/Products/Chairs/throne-g175d60255_1280_huu1ea.png",
count : 22 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 13 ,
comments: [
 {      
   Name: "Ethan",
 Email: "",
 date: "7/13/2023",
 Comment: "Snuggle up in this cozy chair and escape into your own personal sanctuary.", }


],

},
{
  id: 21,
  Name: "Harmony Commode",
  category : "Commodes",
  description:
  "Experience harmony and convenience in your bathroom with the Harmony Haven Commode, designed for utmost comfort and functionality.",
  price: 300,
  discount : false ,
   sale : 200 , 
 rate : 5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689642277/FurniProApp/Products/Commodes/komod_ojk0ly.png",
count : 11  ,
sold : 8 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 12 , 
comments: [

 {      
   Name: "David",
 Email: "",
 date: "6/13/2023",
 Comment: " Transform your bathroom into a tranquil and peaceful sanctuary.", }

],


},
{
  id: 22,
  Name: "Harmony Dresser" ,
  category : "Dressers",
  description:
  "Create a tranquil oasis in your bedroom with this dresser, offering a calming atmosphere and organized storage solutions.",
  price: 400,
  discount : true ,
   sale : 300 , 
 rate : 3.5 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644202/FurniProApp/Products/Dressers/armoire-g83f5d1b42_1280_urwqrz.png",
 count : 12 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 17 ,
 comments: [
   {      
     Name: "Sophia",
   Email: "",
   date: "7/2/2023",
   Comment: "Experience harmony and beauty with this functional bedroom dresser.", }

 ],


},
{
 id: 23,
 Name: "Serenity Table" ,
 category : "Tables",
 description:
 "Find your study sanctuary with the Zen Retreat Study Table, providing a serene and organized space for focused work and creativity.",
 price: 400,
 discount : true ,
  sale : 200 , 
 rate : 4 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644184/FurniProApp/Products/Tables/card-table-ga1af227f4_1280_rjsrb7.png",
 count : 16 ,
 sold : 14 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 12,
 comments: [
   {      
     Name: "Isabella",
   Email: "",
   date: "7/13/2023",
   Comment: " Find your zen and boost productivity with this peaceful study table.", }

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
  sale : 50 ,
 rate : 4.5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689646658/FurniProApp/Products/sofa/couch-g2d9fca6d0_1280_ly5euk.png",
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
  Name: "Serenity Chair" ,
  category : "Chairs",
  description: "Indulge in ultimate relaxation with the Serenity Recliner Chair, featuring adjustable positions and plush cushioning for pure comfort.",
  price: 200,
  discount : true ,
   sale : 150 , 
 rate : 3 ,
  imageLink:   "https://res.cloudinary.com/drkevmgk2/image/upload/v1689589561/FurniProApp/Products/Chairs/oversized-gd144344e0_1280_d7ojtw.png" ,
count : 22 ,
sold : 16 ,
tags : "Chair , Sofa , ArmChair"  ,
reviews : 11 ,
comments: [
 {      
   Name: "Olivia",
 Email: "dfdfddff",
 date: "7/13/2023",
 Comment: "Experience ultimate relaxation with this luxurious and ergonomically designed chair.", }


],

},
{
  id: 27,
  Name: "Serene Commode",
  category : "Commodes",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
  price: 300,
  discount : false ,
   sale : 200 , 
 rate : 5 ,
  imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689642239/FurniProApp/Products/Commodes/night-table-g6a644663b_1280_j50ebm.png",
count : 11  ,
sold : 8 ,
tags : "Commode , wooden Commode , single Comode"  ,
reviews : 6 , 
comments: [

 {      
   Name: "Grace",
 Email: "",
 date: "2/15/2023",
 Comment: " Find harmony and convenience in this functional commode design.", }

],


},
{
  id: 28,
  Name: "Serene Dresser" ,
  category : "Dressers",
  description:
  "Create a tranquil oasis in your bedroom with this dresser, offering a calming atmosphere and organized storage solutions.",
  price: 400,
  discount : true ,
   sale : 200 , 
 rate : 3.5 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644206/FurniProApp/Products/Dressers/dresser_rgzwjy.png",
 count : 12 ,
 sold : 25 ,
 tags : "Dresser , Wooden Dresser , Double Dresser " ,
 reviews : 22 ,
 comments: [
   {      
     Name: "Charlotte",
   Email: "",
   date: "6/2/2023",
   Comment: "Create a serene and organized haven with this spacious dresser.", }

 ],


},
{
 id: 29,
 Name: "Harmony Table" ,
 category : "Tables",
 description:
 "Add a cozy touch to your living area with the Cozy Haven Side Table, a functional and stylish addition for displaying decor and essentials.",
 price: 400,
 discount : true ,
  sale : 300 , 
 rate : 4 ,
 imageLink: "https://res.cloudinary.com/drkevmgk2/image/upload/v1689644183/FurniProApp/Products/Tables/small-table-g3b3821407_1280_r9liyw.png",
 count : 16 ,
 sold : 14 ,
 tags : "Table , Wooden Table , Disk" ,
 reviews : 9,
 comments: [
   {      
     Name: "Charlotte",
   Email: "",
   date: "7/13/2023",
   Comment: " Find your zen and boost productivity with this peaceful study table.", }

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