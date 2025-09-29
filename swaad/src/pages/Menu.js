import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuListItem from '../components/MenuListItem';

const menuData = {
  sindhi: {
    image: 'https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg',
    customize: {
      Snacks: [
        { id: 1, name: 'Aalo Tuk', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/lLz94CZXnjC91XKE2SEvOwF0JfkZqfywV3HvuxTspP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVyemluZGFn/aS5pbmZvL2ltYWdl/LzIwMjQvSmFuL1Np/bmRoaS1BbG9vLVR1/ay5qcGc' },
        { id: 2, name: 'Fried Kachalo', price: 749, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/TNAC2k035vLw41yghcl0fcW3Rkf1xv4fUgZSJTQT_Rs/rs:fit:860:0:0:0/g:ce/aHR0cDovL3NpbmRo/aXJhc29pLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAwOC8w/Ni9rYWNoYWx1Lmpw/Zw' },
        { id: 3, name: 'Sana Bhajiya', price: 299, description: '1 Tray = 10 Serves.', image: 'https://www.secondrecipe.com/wp-content/uploads/2020/01/sanna-pakoda-720x823.jpg' },
        { id: 4, name: 'Mirchi Bhajiya', price: 279, description: '1 Tray = 20 Bhajiyas.', image: 'https://imgs.search.brave.com/JOGFfcTCe2T7YpvAK0MvcvQUIwHTMadtOkEmIkIBLzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jcmlzcHktZ3Jl/ZW4tY2hpbGxpLXBh/a29yYS1taXJjaGkt/YmFqamktc2VydmVk/LXdpdGgtdG9tYXRv/LWtldGNodXAtbW9v/ZHktYmFja2dyb3Vu/ZC1pdHMtcG9wdWxh/ci10ZWEtdGltZS1z/bmFjay1mcm9tLWlu/ZGlhLWVzcGVjaWFs/bHktbW9uc29vbi1z/ZWxlY3RpdmUtZm9j/dXNfNDY2Njg5LTY2/NjMxLmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw' },
        { id: 5, name: 'Dal Pakwan', price: 499, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/vskObAP-B9_u5lUHHGDniuAIgGnOQcXUPkP_odExPHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvZGFs/LXBha3dhbi10aGUt/c3Rvcnktb2YtdGhp/cy1jcmlzcC1icmVh/a2Zhc3QtZGlzaC1m/cm9tLXNpbmRoLXYw/LUJ1b1lybTZVdUt6/OV9UQ0NPSVJDOEU4/aTdnUGlRWDMzT2dD/NUl0LTBmUWMuanBn/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPTcw/OTc1NzkyNjNiODI0/ODMyOWRjYzRmMDc2/NzRmNmU1NDk4Mjcy/MjU' },
      ],
      Rice: [
        { id: 6, name: 'Jeera Rice', price: 949, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/31/552f103e-a3c2-48ce-a5ab-e20dc1c62acd_af8dd15f-abaf-4d8a-87a2-83a36ce99084.JPG' },
        { id: 7, name: 'Plain Rice', price: 899, description: '1 Tray = 10 Serves.', image: 'https://media.istockphoto.com/id/491090528/photo/cooked-rice.jpg?s=612x612&w=0&k=20&c=WNeDEUEioyyk6FQZQrVMrtFMDVdtbwtK951eZ8q5FNY=' },
        { id: 8, name: 'Biryani', price: 1899, description: '1 Tray = 10 Serves.', image: 'https://t3.ftcdn.net/jpg/10/16/17/94/360_F_1016179460_CI6Aq4b7QMgdVNdsUJYRlmlrEh8FQUJ9.jpg'},
        { id: 8, name: 'Spl. Sindhi Bhuga Chawal(Brown Rice)', price: 1099, description: '1 Tray = 10 Serves.', image: 'https://thumbs.dreamstime.com/b/appetizing-brown-rice-wooden-bowl-rustic-table-high-quality-image-cooked-raw-grains-herbs-around-318091020.jpg' },
        { id: 10, name: 'Peas Pulao', price: 599, description: '1 Tray = 10 Serves.', image: 'https://thumbs.dreamstime.com/b/fragrant-veg-pulao-bliss-colorful-rice-fresh-veggies-bowl-aromatic-vegetable-pulao-india-colorful-veggies-372269437.jpg' },
        { id: 11, name: 'Tawa Pulao', price: 459, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/sjeqwj3vawuxktjf96cu' },
        { id: 12, name: 'Spl. Sindhi Tairi(Sweet Rice)', price: 999, description: '1 Tray = 10 Serves', image: 'https://img-global.cpcdn.com/recipes/4ec5976589f9ddf1/600x852cq80/sindhi-tairi-recipe-main-photo.webp' },
      ],
      Sabji: [
        { id: 13, name: 'Dal Tadka', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/sFYt20nHLC-8PH1LBiYCd3FWJxjk5xJbduacQoQkM0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kYWwt/dGFka2EtYm93bC1p/bmRpYW4tbGVudGls/LW1haW4tY291cnNl/LWx1bmNoLWRpbm5l/ci03MDUyNjYyNi5q/cGc' },
        { id: 14, name: 'Dal Makhni', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://c.ndtvimg.com/2023-05/cafghpk8_dal-soup_625x300_03_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' },
        { id: 15, name: 'Sai Bhaji', price: 1769, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/2Crkk9f5wgeq89hQkUqs6BiQUSaHRuqAXgocUUK3NlQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVk/MTBiMjk5NWQ3NjQw/MDAwMTgxZGI1ZC8x/NjA3MjYxMTMwNjMy/LTQ5UU41ODFBSVla/R1FVNzZDM1NWL0M1/NDdCQ0JGLTRERDIt/NERBQS04RTIxLTQ5/MDlDOEEzQzg3Qy5q/cGVn' },
        { id: 16, name: 'Spl. Sindhi Kadhi(Besan)', price: 1999, description: '1 Tray = 10 Serves.', image: 'https://thumbs.dreamstime.com/b/sindhi-kadi-kadhi-curry-made-up-gram-flour-vegetables-tempering-chilles-cumin-seeds-asafoetida-70552397.jpg' },
        { id: 17, name: 'Spl. Sindhi Kadhi(Dahi)', price: 1999, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/8/77e9cd0b-f61f-4f15-9075-cc40b79309ac_0521bf65-c971-49af-8638-2fcd02aecef4.jpg' },
        { id: 18, name: 'Spl. Sindhi Aloo Wadi', price: 1399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/wOHVZLHfO_-dHmoQgTk1RQ5VPMGFfCy1G_633Bf-RZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vjb25kcmVjaXBl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8wNy9TaW5k/aGktV2FkaS03MjB4/NTkxLmpwZw' },
        { id: 19, name: 'Palak Paneer ', price: 3199, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/20/44bcc5ec-1e18-4f7b-87b4-c24f1fb3f1b0_0ee61041-4330-4e38-8683-00dfad2a2610.jpg' },
        { id: 20, name: 'Paneer Butter Masala', price: 3199, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/20/11fe7ead-94e4-4c0a-a1ca-18eedf686c4a_8a580515-44b0-441d-979d-4e23f75f8081.jpg' },
        { id: 21, name: 'Chana Masala', price: 2699, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/27/e9b4fbe0-6edb-4834-801f-c66ca83b0721_d6500a0f-d028-45f9-a044-a56efe8955a1.jpg' },
      ],
      Roti: [
        { id: 22, name: 'Plain Roti', price: 199, description: '1 Tray = 20 Rotis.', image: 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg' },
        { id: 23, name: 'Butter Roti', price: 299, description: '1 Tray = 20 Rotis.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/29/b12e6a42-26e9-4d10-8079-66b01b0e685c_53e9b9c2-6065-4f38-9dc3-7bcfc3b7e602.JPG' },
        { id: 24, name: 'Plain Naan', price: 299, description: '1 Tray = 20 Naans.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/19/937c1138-08c7-4ae4-b111-44d8698171cc_1f46ecf1-0102-48e8-b6a5-c493f01a306d.jpg' },
        { id: 25, name: 'Butter Garlic Naan', price: 399, description: '1 Tray = 20 Naans.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/29/9ac6b882-d3fa-4497-8321-5913d9768a0c_84e1785e-0742-4b8b-8894-289b2d28aa1e.JPG' },
        { id: 26, name: 'Roomali Roti', price: 299, description: '1 Tray = 20 Rotis.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/16/1ae240e7-7e21-41a0-b00b-5e0ba9044bba_e61562bc-9c41-4115-b91e-aa625294d36e.jpg' },
        { id: 27, name: 'Onion Koki', price: 599, description: '1 Tray = 20 Kokis.', image: 'https://www.whiskaffair.com/wp-content/uploads/2019/08/Sindhi-Koki-1-3.jpg' },
        { id: 28, name: 'Besan Koki', price: 599, description: '1 Tray = 20 Kokis.', image: 'https://imgs.search.brave.com/vIKHh2InKPxe55ViWwD4AiuMZc3JZiupaaPVVTnpoG4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaWJi/b25zdG9wYXN0YXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzExL0Jlc2Fu/aS1Lb2tpNC5qcGc' },
        { id: 29, name: 'Spl. Sindhi Doda(Jawar Roti)', price: 999, description: '1 Tray = 20 Dodas.', image: 'https://www.foodie-trail.com/wp-content/uploads/2020/12/PHOTO-2020-12-02-12-57-56.jpg' },
      ],
      DrySabji : [
        { id: 30, name: 'Aalo Bhindi', price: 499, description: '1 Tray = 10 Serves.', image: 'https://i.ytimg.com/vi/Wjo6kfDdZGE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBs7U5pVi0Rw2rjj9B9QxOzXIguPw' },
        { id: 31, name: 'Aalo Baigan', price: 699, description: '1 Tray = 10 Serves.', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/aloo-baingan-recipe.webp' },
        { id: 32, name: 'Masala Beeh', price: 899, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/CiTRLp5NSKNLhq5GnkUz4pmbsDvuKtjuQWqMay60MFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW5k/aGlyYXNvaS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTIvYmVlaF9zYXdh/X2Jhc2FyLWUxNzQw/NDgyNjQ4ODI1Lmpw/Zw' },
        { id: 33, name: 'Aalo Gobi', price: 749, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/eqOxs3yZrZpRnY02jZys_Mg0nE6sD0BX_HaeA6sflkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhL2Q5ODc2/NjRlODY3NTI0MDZm/MDZjYjczNGQyMDk0/OTlhOTk1ZGViZmYv/MF8xNzZfMzY0OF8y/MTg5L21hc3Rlci8z/NjQ4LmpwZz93aWR0/aD00NjUmZHByPTEm/cz1ub25lJmNyb3A9/bm9uZQ' },
        { id: 34, name: 'Paneer Burji', price: 1699, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/6/33425603-5546-4f1c-9514-8bd5f0ae6a44_ec207c1c-baaa-43b3-b9b5-8dd218f29ad5.jpg' },
      ],
      Deserts: [
        { id: 35, name: 'Semiya Kheer', price: 499, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/IyTbAWCkoG_2ai66iSEwCr6jWqRcmgeU-_JkU1cOWcs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNTMz/MzcxMzE4L3N0b2Nr/LXBob3RvLXNlbWl5/YS1wYXlhc2FtLXNo/ZXdhaS1zZXdhaS1r/aGlyLXNldml5YW4t/a2hlZXItaW5kaWFu/LXN3ZWV0LW1hZGU' },
        { id: 36, name: 'Spl. Sindhi Lola', price: 299, description: '1 Tray = 20 Lolas.', image: 'https://thumbs.dreamstime.com/b/sindhi-flat-bread-eaten-hindu-festival-thadri-celebrated-rainy-season-lola-chautha-made-whole-meal-flour-78583605.jpg' },
        { id: 37, name: 'Pis Malai', price: 299, description: '1 Tray = 10 Serves.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTRIbDFL7bi38UpsNivoI2OFit5nSazGvVunNl_fv7aabVrrJiNbLpfJwTS52kgmfa60&usqp=CAU' },
        { id: 38, name: 'Moong dal Halwa', price: 399, description: '1 Tray = 10 Serves.', image: 'https://images.getrecipekit.com/20221019114738-moong-20dal-20halwa.jpg?aspect_ratio=4:3&quality=90&' },
        { id: 39, name: 'Singhar Mithai', price: 799, description: '1 Tray = 20 Units.', image: 'https://imgs.search.brave.com/JCXsHk4hkIDAZooI90SvlM6UAqHZvjpDa_N8-mP6En8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmRp/YWZvb2RuZXR3b3Jr/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA4L3Npbmdo/YXJfbWl0aGFpLXJl/c2l6ZWQtZTE0NDA4/NDQzMTM3NTctMS5q/cGc' },
        { id: 40, name: 'Khoya', price: 1299, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/Ejj0qKejVcPf48LcKvWs9KTYihS7J1AMzLxjYpB8718/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BpY2V1cHRoZWN1/cnJ5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMy8xMC9L/aG95YS1SZWNpcGUt/aG9tZW1hZGUtbWF3/YTEuanBn' },
        { id: 41, name: 'Spl.Sindhi Malpua', price: 199, description: '1 Tray = 20 Malpuas.', image: 'https://t3.ftcdn.net/jpg/01/94/32/10/360_F_194321003_tS6q6LrQIQWnhshOsw65faeX6Ipax3Og.jpg' },
      ],
      Extras: [
        { id: 111, name: 'Boondi Raita', price: 299, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/VrDe1dcuiTvsFpYQ-0CeygF6sP4ZWiHLDYXEiaSW1Ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib29uZGktcmFp/dGEtaXMtbm9ydGgt/aW5kaWFuLXNpZGUt/ZGlzaC12YXJpZXR5/LW1hZGUtd2l0aC1z/cGljZWQteW9ndXJ0/LWJvb25kaS1jcmlz/cC1mcmllZC1ncmFt/LWZsb3VyLWJhbGxz/XzQ2NjY4OS02OTc4/MS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw' },
        { id: 112, name: 'Masala Papad', price: 399, description: '1 Tray = 10 Papads.', image: 'https://imgs.search.brave.com/sMRB6vScrrlDlYVqSzSq39zOaj88h8M7agnCPSDct_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYXNh/bGEtcGFwYWQtZGVs/aWNpb3VzLWluZGlh/bi1zbmFjay1tYWRl/LXVzaW5nLXJvYXN0/ZWQtZnJpZWQtdG9w/cGVkLXRhbmd5LXNw/aWN5LW9uaW9uLXRv/bWF0by1taXgtc2Vy/dmVkLW92ZXItMjI0/MDAyNDc2LmpwZw' },
        { id: 113, name: 'Paani Puri', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/prTJq6LIoS4QUX44vQEltxDXkFiTuHXGOg54AqmOIWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzgxLzkzLzM5/LzM2MF9GXzEzODE5/MzM5NDlfZHQyMWlH/Z2FSWlRVcE5udXFJ/a1FjQWREZ2FyaVZS/TnUuanBn' },
        { id: 114, name: 'Sev Puri', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/hd4gM4ndMKA_iptmoEiRktDxKnlFMTNG1eA1VFVWd2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQ4LzU2LzMy/LzM2MF9GXzg0ODU2/MzI5N18yMUVydmhp/bDk0azN4TFJBYk5x/VXJlTXRsVlRpWWlH/Ny5qcGc' },
        { id: 115, name: 'Dahi Chaat', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/ajI67neHz7YmAEq1hkAlzgmnL9WD7IpyVEznJ8ertao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXBp/bmdwb3RjdXJyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDIvRGFoaS1T/ZXYtUGFwZGktQ2hh/YXQtUGlwaW5nLVBv/dC1DdXJyeS0xMDI0/eDY4My5qcGc' },
      ],
      
    },
    packages: [
      { id: 42, name: 'Sindhi Thali 1', price: 1314, description: 'Dal Pakwan(x1) , Sana Bhajiya(x1) , Onion Koki(x2) , Tea/Coffee(x1) | 1 Tray = 10 Serves', image: 'https://via.placeholder.com/150' },
      { id: 43, name: 'Sindhi Thali 2', price: 1297, description: 'Dal Pakwan(x1) , Mirchi Bhajiya(x2) , Besan Koki(x2) , Tea/Coffee(x1) | 1 Tray = 10 Serves',  image: 'https://via.placeholder.com/150' },
      { id: 44, name: 'Sindhi Thali 3', price: 6434, description: 'Jeera Rice , Spl. Sindhi Kadhi(Besan) , Butter Roti(x2) , Palak Paneer, Aalo Bhindi , Singhar Mithai(x2) , Boondi Raita(x1) | 1 Tray = 10 Serves',  image: 'https://via.placeholder.com/150' },
      { id: 45, name: 'Sindhi Thali 4', price: 6370, description: 'Spl. Sindhi Tairi , Sai Bhaji , Butter Garlic Naan(x2), Paneer Butter  Masala , Masala Beeh , Spl. Sindhi Lola(x2) , Masala Papad| 1 Tray = 10 Serves',  image: 'https://via.placeholder.com/150' },
      { id: 46, name: 'Sindhi Thali 5', price: 6314, description: 'Spl. Sindhi Bhuga Chawal , Chana Masala , Spl. Sindhi Doda(x2) , Paneer Bhurji , Aalo Baigan , Moong dal Halwa(x1) , Boondi Raita(x1) | 1 Tray = 10 Serves' ,image: 'https://via.placeholder.com/150' },

    ],
  },





  gujarati: {
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg',
    customize: {
      Snacks: [
        { id: 51, name: 'Dhokla', price: 399, description: '1 Tray = 40 Dhoklas.', image: 'https://t3.ftcdn.net/jpg/09/05/87/86/360_F_905878632_Tw52sNsJDJDimTQikKz2QVYEgbcHMJBb.jpg' },
        { id: 52, name: 'Patra', price: 399, description: '1 Tray = 40 Patras.', image: 'https://thumbs.dreamstime.com/b/patra-bhajiya-indian-traditional-street-food-54893516.jpg' },
        { id: 53, name: 'Khandvi', price: 499, description: '1 Tray = 40 Khandvis.', image: 'https://vanitascorner.com/wp-content/uploads/2018/09/Khandvi.jpg' },
        { id: 54, name: 'Fafda ', price: 299, description: '1 Tray = 10 Serves.', image: 'https://t3.ftcdn.net/jpg/03/11/38/16/360_F_311381603_X6GV3nuBiLzGOn7BdIiKKJ7wu5woMIUk.jpg' },
        { id: 55, name: 'Khaman', price: 299, description: '1 Tray = 80 Khamans.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/z3iqdo6tacwjuq8dj3lq' },
      ],
      rice: [
        { id: 6, name: 'Jeera Rice', price: 949, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/31/552f103e-a3c2-48ce-a5ab-e20dc1c62acd_af8dd15f-abaf-4d8a-87a2-83a36ce99084.JPG' },
        { id: 7, name: 'Plain Rice', price: 899, description: '1 Tray = 10 Serves.', image: 'https://media.istockphoto.com/id/491090528/photo/cooked-rice.jpg?s=612x612&w=0&k=20&c=WNeDEUEioyyk6FQZQrVMrtFMDVdtbwtK951eZ8q5FNY=' },
        { id: 8, name: 'Biryani', price: 1899, description: '1 Tray = 10 Serves.', image: 'https://t3.ftcdn.net/jpg/10/16/17/94/360_F_1016179460_CI6Aq4b7QMgdVNdsUJYRlmlrEh8FQUJ9.jpg'},
        { id: 10, name: 'Peas Pulao', price: 599, description: '1 Tray = 10 Serves.', image: 'https://thumbs.dreamstime.com/b/fragrant-veg-pulao-bliss-colorful-rice-fresh-veggies-bowl-aromatic-vegetable-pulao-india-colorful-veggies-372269437.jpg' },
        { id: 11, name: 'Tawa Pulao', price: 459, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/sjeqwj3vawuxktjf96cu' },
        { id: 56, name: 'Spl. Gujarati Masala Khichdi', price: 1399, description: '1 Tray = 10 Serves.', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2022/06/Masala-Khichid-Blog.jpg' },
      ],
      Sabji: [
        { id: 13, name: 'Dal Tadka', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/sFYt20nHLC-8PH1LBiYCd3FWJxjk5xJbduacQoQkM0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kYWwt/dGFka2EtYm93bC1p/bmRpYW4tbGVudGls/LW1haW4tY291cnNl/LWx1bmNoLWRpbm5l/ci03MDUyNjYyNi5q/cGc' },
        { id: 14, name: 'Dal Makhni', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://c.ndtvimg.com/2023-05/cafghpk8_dal-soup_625x300_03_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' },
        { id: 19, name: 'Palak Paneer ', price: 3199, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/20/44bcc5ec-1e18-4f7b-87b4-c24f1fb3f1b0_0ee61041-4330-4e38-8683-00dfad2a2610.jpg' },
        { id: 20, name: 'Paneer Butter Masala', price: 3199, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/20/11fe7ead-94e4-4c0a-a1ca-18eedf686c4a_8a580515-44b0-441d-979d-4e23f75f8081.jpg' },
        { id: 21, name: 'Chana Masala', price: 2699, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/27/e9b4fbe0-6edb-4834-801f-c66ca83b0721_d6500a0f-d028-45f9-a044-a56efe8955a1.jpg' },
        { id: 57, name: 'Gujarati Kadhi', price: 1899, description: '1 Tray = 10 Serves.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21ailUKhkZHJyDMvKgyOCJkjL61vyGJJXkA&s' },
        { id: 58, name: 'Gujarati Sev Tameta', price: 1799, description: '1 Tray = 10 Serves.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShj-DTOHIiIHoyLET-4umJO3lul8_up7IjfA&s' },
        { id: 59, name: 'Gujarati Ringan No Olo', price: 1799, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/5D4sS19aV-BdMkmVlFgQAJMSwNLxiikel3muQxELRdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBlaW5ndWph/cmF0aS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMTIv/cmluZ2FuLW5vLW9s/by1yZWNpcGUtaW4t/Z3VqYXJhdGktLTY5/NngzOTIuanBn' },
        { id: 60, name: 'Gujarati Vaal Nu Shaak', price: 1699, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/l3TLxGpcz5K3vEuP8ni8BjF_tug7XHvFoW9VivAJCw0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2VyZWNpcGVzLmNv/bS9hcHAvdXBsb2Fk/cy8yMDE0LzA1L3Zh/YWwtbnUtc2hhYWst/cmVjaXBlLWd1amFy/YXRpLXZhYWwtY3Vy/cnktcmVjaXBlLmpw/Zw' },
      ],
      roti: [
        { id:  22, name: 'Plain Roti', price: 199, description: '1 Tray = 20 Rotis.', image: 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg' },
        { id: 23, name: 'Butter Roti', price: 299, description: '1 Tray = 20 Rotis.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/29/b12e6a42-26e9-4d10-8079-66b01b0e685c_53e9b9c2-6065-4f38-9dc3-7bcfc3b7e602.JPG' },
        { id: 24, name: 'Plain Naan', price: 299, description: '1 Tray = 20 Naans.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/19/937c1138-08c7-4ae4-b111-44d8698171cc_1f46ecf1-0102-48e8-b6a5-c493f01a306d.jpg' },
        { id: 26, name: 'Roomali Roti', price: 399, description: '1 Tray = 20 Rotis.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/16/1ae240e7-7e21-41a0-b00b-5e0ba9044bba_e61562bc-9c41-4115-b91e-aa625294d36e.jpg' },
        { id: 25, name: 'Butter Garlic Naan', price: 499, description: '1 Tray = 20 Naans.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/29/9ac6b882-d3fa-4497-8321-5913d9768a0c_84e1785e-0742-4b8b-8894-289b2d28aa1e.JPG' },
        { id: 61, name: 'Thepla', price: 359, description: '1 Tray = 20 Theplas.', image: 'https://www.indubenkhakhrawala.com/wp-content/uploads/2025/04/Gujarati-Methi-Thepla-Made-By-Induben-Khakhrawala.jpg' },
      ],
      DrySabji : [
        { id: 62, name: 'Undhiyu', price: 799, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/2DrLA7QoidM46aaHpMXqx-WoWcn5tXv8BEPfehlptOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzkyLzI5LzU0/LzM2MF9GXzI5MjI5/NTQ2MF9KRjZveEhK/ODFQbWE4dUdHWkJV/ZTlYcFZWR2o0azZv/dC5qcGc' },
        { id: 63, name: 'Barela Baigan', price: 799, description: '1 Tray = 10 Serves.', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/bharwa-baingan-recipe.jpg' },
        { id: 64, name: 'Barela Bhindi', price: 699, description: '1 Tray = 10 Serves.', image: 'https://www.shutterstock.com/image-photo/bharwa-masala-bhindi-stuffed-indian-600nw-1790859845.jpg' },
        { id: 65, name: 'Mix Veg', price: 999, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/q2logd0mpg6r714pfoxm' },
      ],
      Deserts: [
        { id: 66, name: 'Shrikhand', price: 499, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/Z3MNNfG5v86qv_FCkuu8G50iUo03loGlM1-lUfwBsWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zaHJpa2hhbmQt/aXMtaW5kaWFuLXN3/ZWV0LWRpc2gtbWFk/ZS1zdHJhaW5lZC15/b2d1cnQtZ2Fybmlz/aGVkLXdpdGgtZHJ5/LWZydWl0cy1zYWZm/cm9uLXNlcnZlZC1j/ZXJhbWljLWJvd2wt/aXNvbGF0ZWQtY29s/b3VyZnVsLXdvb2Rl/bi1iYWNrZ3JvdW5k/LXNlbGVjdGl2ZS1m/b2N1c180NjY2ODkt/NjkwMjEuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA' },
        { id: 67, name: 'Kesar Basundi', price: 499, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/5/6268bdea-e6d8-49c4-83d5-b3db6f719f9c_ffc8a964-0d81-4f49-9f69-180e40a6d56b.jpg' },
        { id: 68, name: 'Jalebi', price: 299, description: '1 Tray = 10 Serves.', image: 'https://media.istockphoto.com/id/666999640/photo/indian-sweet-jalebi.jpg?s=612x612&w=0&k=20&c=HThX0goLh4odAYAErT_jHp6WwqkvEVSn6efONUUCqxA=' },
        { id: 69, name: 'Laapsi', price: 999, description: '1 Tray = 10 Serves.', image: 'https://www.jcookingodyssey.com/wp-content/uploads/2022/11/fada-lapsi-6.jpg' },
        { id: 70, name: 'Rabdi', price: 799, description: '1 Tray = 10 Serves.', image: 'https://www.shutterstock.com/image-photo/sweet-rabdi-lachha-rabri-basundi-600nw-1230247282.jpg' },
      ],
      Extras: [
        { id: 111, name: 'Boondi Raita', price: 299, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/VrDe1dcuiTvsFpYQ-0CeygF6sP4ZWiHLDYXEiaSW1Ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib29uZGktcmFp/dGEtaXMtbm9ydGgt/aW5kaWFuLXNpZGUt/ZGlzaC12YXJpZXR5/LW1hZGUtd2l0aC1z/cGljZWQteW9ndXJ0/LWJvb25kaS1jcmlz/cC1mcmllZC1ncmFt/LWZsb3VyLWJhbGxz/XzQ2NjY4OS02OTc4/MS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw' },
        { id: 112, name: 'Masala Papad', price: 399, description: '1 Tray = 10 Papads.', image: 'https://imgs.search.brave.com/sMRB6vScrrlDlYVqSzSq39zOaj88h8M7agnCPSDct_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYXNh/bGEtcGFwYWQtZGVs/aWNpb3VzLWluZGlh/bi1zbmFjay1tYWRl/LXVzaW5nLXJvYXN0/ZWQtZnJpZWQtdG9w/cGVkLXRhbmd5LXNw/aWN5LW9uaW9uLXRv/bWF0by1taXgtc2Vy/dmVkLW92ZXItMjI0/MDAyNDc2LmpwZw' },
        { id: 113, name: 'Paani Puri', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/prTJq6LIoS4QUX44vQEltxDXkFiTuHXGOg54AqmOIWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzgxLzkzLzM5/LzM2MF9GXzEzODE5/MzM5NDlfZHQyMWlH/Z2FSWlRVcE5udXFJ/a1FjQWREZ2FyaVZS/TnUuanBn' },
        { id: 114, name: 'Sev Puri', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/hd4gM4ndMKA_iptmoEiRktDxKnlFMTNG1eA1VFVWd2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQ4LzU2LzMy/LzM2MF9GXzg0ODU2/MzI5N18yMUVydmhp/bDk0azN4TFJBYk5x/VXJlTXRsVlRpWWlH/Ny5qcGc' },
        { id: 115, name: 'Dahi Chaat', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/ajI67neHz7YmAEq1hkAlzgmnL9WD7IpyVEznJ8ertao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXBp/bmdwb3RjdXJyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDIvRGFoaS1T/ZXYtUGFwZGktQ2hh/YXQtUGlwaW5nLVBv/dC1DdXJyeS0xMDI0/eDY4My5qcGc' },
      ],
    },
    packages: [
        { id: 71, name: 'Gujarati Combo 1', price: 1101, description: 'Khaman , Patra , Fafda , Jalebi , Tea/Coffee | 1 Tray = 10 Serves ', image: 'https://via.placeholder.com/150' },
        { id: 72, name: 'Gujarati Combo 2', price: 1101, description: 'Dhokla , Khandvi , Fafda Jalebi , Tea/Coffee | 1 Tray = 10 Serves ', image: 'https://via.placeholder.com/150' },
        { id: 73, name: 'Gujarati Combo 3', price: 4075, description: 'Spl. Gujarati Masala Khichdi , Ringan Nu Olo , Roomali Roti(x2) , Undhiyu , Kesar Basundi(x1), Masala Chaas(x1) | 1 Tray = 10 Serves ', image: 'https://via.placeholder.com/150' },
        { id: 74, name: 'Gujarati Combo 4', price: 5482, description: 'Peas Pulao , Dal Takda , Vaal Nu Saak , Thepla(x2) , Barela Bhindi , Laapsi , Boondi Raita(x1) | 1 Tray = 10 Serves ', image: 'https://via.placeholder.com/150' },
        { id: 75, name: 'Gujarati Combo 5', price: 4955, description: 'Biryani , Sev Tameta , Butter Garlic Naan(x2) , Mix Veg , Rabdi , Masala Chaas(x1) | 1 Tray = 10 Serves ', image: 'https://via.placeholder.com/150' },

    ],

  },





  marathi: {
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=870&q=80',
    customize: {
      Snacks: [
        { id: 81, name: 'Misal Pav', price: 499, description: '1 Tray = 10 Servings.', image: 'https://imgs.search.brave.com/DqRvKl94F2M-BPctaNQ322vhwA61zd0ih0D-ZVWUs7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYXJh/dGhpLXNuYWNrcy1t/aXNhbC1wYXYtbWlz/YWwtcGF2LWJ1bnMt/c21lYXJlZC1idXR0/ZXItc2VydmVkLXNw/aWN5LXNwcm91dHMt/Y3VycnktdHJhaWwt/bWl4dHVyZS1jaG9w/cGVkLW9uaW9ucy0y/MTk0NzQ1ODkuanBn' },
        { id: 82, name: 'Kandha Poha', price: 299, description: '1 Tray = 10 Servings.', image: 'https://imgs.search.brave.com/MUkRYOcgfbyoPYfflvap75EPuGQJtps-GBo1MrQxhb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbG9vLWthbmRh/LXBvaGEtdGFycmkt/cG9oZS13aXRoLXNw/aWN5LWNoYW5hLW1h/c2FsYS1jdXJyeV80/NjY2ODktNDc3NjIu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw' },
        { id: 83, name: 'Sabudana', price: 299, description: '1 Tray = 10 Servings.', image: 'https://imgs.search.brave.com/1vMe1oTybd4JFSQMWMa5b-R0rLKG8R2QX1G0hxRczfg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zYWJ1/ZGFuYS1raGljaGRp/LXRyYWRpdGlvbmFs/LWZhc3RpbmctcmVj/aXBlLWNvbnN1bWVk/LW5hdnJhdHJpLWVr/YWRhc2hpLWdhbmVz/aC1jaGF0dXJ0aGkt/Y2FwdHVyZWQtbW91/dGgtd2F0ZXJpbmct/MzExNTIyMjQ5Lmpw/Zw' },
        { id: 84, name: 'Vada Pav', price: 399, description: '1 Tray = 20 Vada Pav.', image: 'https://t4.ftcdn.net/jpg/15/80/41/71/240_F_1580417179_S6QuYK5IE2a9G3mnko0HPjVLQ8Z2e7t5.jpg' },
      ],
      rice: [
        { id: 6, name: 'Jeera Rice', price: 949, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/31/552f103e-a3c2-48ce-a5ab-e20dc1c62acd_af8dd15f-abaf-4d8a-87a2-83a36ce99084.JPG' },
        { id: 7, name: 'Plain Rice', price: 899, description: '1 Tray = 10 Serves.', image: 'https://media.istockphoto.com/id/491090528/photo/cooked-rice.jpg?s=612x612&w=0&k=20&c=WNeDEUEioyyk6FQZQrVMrtFMDVdtbwtK951eZ8q5FNY=' },
        { id: 8, name: 'Biryani', price: 1899, description: '1 Tray = 10 Serves.', image: 'https://t3.ftcdn.net/jpg/10/16/17/94/360_F_1016179460_CI6Aq4b7QMgdVNdsUJYRlmlrEh8FQUJ9.jpg'},
        { id: 10, name: 'Peas Pulao', price: 599, description: '1 Tray = 10 Serves.', image: 'https://thumbs.dreamstime.com/b/fragrant-veg-pulao-bliss-colorful-rice-fresh-veggies-bowl-aromatic-vegetable-pulao-india-colorful-veggies-372269437.jpg' },
        { id: 11, name: 'Tawa Pulao', price: 459, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/sjeqwj3vawuxktjf96cu' },
      ],
      Sabji: [
        { id: 85, name: 'Pitla', price: 2099, description: '1 Tray = 10 Serves.', image: 'https://snehdeepskitchensite.wordpress.com/wp-content/uploads/2020/12/img_e9020.jpg?w=1024' },
        { id: 86, name: 'Sev Bhaji', price: 1799, description: '1 Tray = 10 Serves.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTk_4QD8hDKrodCyjLDtgahAECFlx_q2eAg&s' },
        { id: 87, name: 'Bharli Vangi', price: 1499, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/ZaOldarVIlu94X2dSnqjevv33J3xBGKDnDq7XdgPd2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29va3NoaWRlb3V0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNS9CaGFy/bGktVmFuZ2kyUy5q/cGc' },
        { id: 13, name: 'Dal Tadka', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/sFYt20nHLC-8PH1LBiYCd3FWJxjk5xJbduacQoQkM0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kYWwt/dGFka2EtYm93bC1p/bmRpYW4tbGVudGls/LW1haW4tY291cnNl/LWx1bmNoLWRpbm5l/ci03MDUyNjYyNi5q/cGc' },
        { id: 14, name: 'Dal Makhni', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://c.ndtvimg.com/2023-05/cafghpk8_dal-soup_625x300_03_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' },
        { id: 19, name: 'Palak Paneer ', price: 3199, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/20/44bcc5ec-1e18-4f7b-87b4-c24f1fb3f1b0_0ee61041-4330-4e38-8683-00dfad2a2610.jpg' },
        { id: 20, name: 'Paneer Butter Masala', price: 3199, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/20/11fe7ead-94e4-4c0a-a1ca-18eedf686c4a_8a580515-44b0-441d-979d-4e23f75f8081.jpg' },
        { id: 21, name: 'Chana Masala', price: 2699, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/27/e9b4fbe0-6edb-4834-801f-c66ca83b0721_d6500a0f-d028-45f9-a044-a56efe8955a1.jpg' },
      ],
      roti: [
        { id: 22, name: 'Plain Roti', price: 199, description: '1 Tray = 20 Rotis.', image: 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg' },
        { id: 23, name: 'Butter Roti', price: 399, description: '1 Tray = 20 Rotis.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/29/b12e6a42-26e9-4d10-8079-66b01b0e685c_53e9b9c2-6065-4f38-9dc3-7bcfc3b7e602.JPG' },
        { id: 24, name: 'Plain Naan', price: 299, description: '1 Tray = 20 Naans.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/19/937c1138-08c7-4ae4-b111-44d8698171cc_1f46ecf1-0102-48e8-b6a5-c493f01a306d.jpg' },
        { id: 26, name: 'Roomali Roti', price: 299, description: '1 Tray = 20 Rotis.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/16/1ae240e7-7e21-41a0-b00b-5e0ba9044bba_e61562bc-9c41-4115-b91e-aa625294d36e.jpg' },
        { id: 25, name: 'Butter Garlic Naan', price: 499, description: '1 Tray = 20 Naans.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/29/9ac6b882-d3fa-4497-8321-5913d9768a0c_84e1785e-0742-4b8b-8894-289b2d28aa1e.JPG' },
        { id: 88, name: 'Thaalipeeth', price: 399, description: '1 Tray = 20 Thaalipeeths.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvA497AvFTds-IEA7ZdzbPc2UQvn6N-t61A&s' },
        { id: 89, name: 'Bhakri(Jawari)', price: 399, description: '1 Tray = 10 Serves.', image: 'https://thumbs.dreamstime.com/b/jowar-roti-bhakri-healthy-gluten-free-flatbreads-made-sorghum-millet-flour-rotis-also-called-as-jolada-rotti-228641426.jpg' },
        { id: 90, name: 'Bhakri(Rice)', price: 299, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/HrOOBoQVd9lQpShu80T1DSLukLoRzj10mA7CY4yzcrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzkzLzU2LzA2/LzM2MF9GXzM5MzU2/MDY2M19zQkNjT0s4/bnB2ZnNVRDUweVJ5/MUFWTTkyVG5QSHJ4/MC5qcGc' },
      ],
      DrySabji : [
        { id: 91, name: 'Methi Chi patal', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5h_1rTzFpuJfRhCRfL2LRR7cKOXjbIOuodQ&s' },
        { id: 92, name: 'Aalo Chi Bhaji', price: 2399, description: '1 Tray = 10 Serves.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJEQcq3megllUs1gf3neQBW2L_de07lIQyg&s' },
        { id: 34, name: 'Paneer Burji', price: 1699, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/6/33425603-5546-4f1c-9514-8bd5f0ae6a44_ec207c1c-baaa-43b3-b9b5-8dd218f29ad5.jpg' },
        { id: 65, name: 'Mix Veg', price: 999, description: '1 Tray = 10 Serves.', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/q2logd0mpg6r714pfoxm' },
      ],
      Deserts: [
        { id: 93, name: 'Modak', price: 499, description: '1 Tray = 50 Modaks.', image: 'https://imgs.search.brave.com/jeaDZMWw5Dy4LH4_y1d-6Npwj1VjaybmsuK6zhyGxJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzczLzA2Lzk1/LzM2MF9GXzM3MzA2/OTUxN19XUUlxU0M1/SUIzSFp1Y0FLUnNn/Y2xhUzhZR2hwejlU/TC5qcGc' },
        { id: 94, name: 'Puran Poli', price: 599, description: '1 Tray = 20 Puranpolis.', image: 'https://imgs.search.brave.com/B2gYggVDZ2ZYjN2mICJp2IqPbj-ji8kx9Q6_Ox-zC60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wdXJh/bi1wb2xpLXB1cmFu/cG9saS1ob2xpZ2Ut/b2JiYXR0dS1pbmRp/YW4tc3dlZXQtZmxh/dGJyZWFkLXNlbGVj/dGl2ZS1mb2N1cy0x/MDY2MDA0MTguanBn' },
        { id: 95, name: 'Karanji', price: 399, description: '1 Tray = 20 Karanjis.', image: 'https://imgs.search.brave.com/rOivXRudfZWvDuSvudoLz5iQcoccoiM8gPhxm79ZteQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ndWppeWEtZ3Vq/aWEta2FyYW5qaS1z/d2VldC1kdW1wbGlu/Z3MtbWFkZS1mZXN0/aXZhbC1ob2xpLWRp/d2FsaS1zZXJ2ZWQt/cGxhdGVfNDY2Njg5/LTE1NDkuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA' },
        { id: 96, name: 'Gajar Halwa', price: 599, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/mqp8h5SiZBtcwaeLMeFyVQSxzsWYUYji--0OGGXimFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9nYWph/ci1oYWx3YS0yMjgw/NTU0Mi5qcGc' },
        { id: 66, name: 'Shrikhand', price: 499, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/Z3MNNfG5v86qv_FCkuu8G50iUo03loGlM1-lUfwBsWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zaHJpa2hhbmQt/aXMtaW5kaWFuLXN3/ZWV0LWRpc2gtbWFk/ZS1zdHJhaW5lZC15/b2d1cnQtZ2Fybmlz/aGVkLXdpdGgtZHJ5/LWZydWl0cy1zYWZm/cm9uLXNlcnZlZC1j/ZXJhbWljLWJvd2wt/aXNvbGF0ZWQtY29s/b3VyZnVsLXdvb2Rl/bi1iYWNrZ3JvdW5k/LXNlbGVjdGl2ZS1m/b2N1c180NjY2ODkt/NjkwMjEuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA' },
      ],
      Extras: [
        { id: 111, name: 'Boondi Raita', price: 299, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/VrDe1dcuiTvsFpYQ-0CeygF6sP4ZWiHLDYXEiaSW1Ls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib29uZGktcmFp/dGEtaXMtbm9ydGgt/aW5kaWFuLXNpZGUt/ZGlzaC12YXJpZXR5/LW1hZGUtd2l0aC1z/cGljZWQteW9ndXJ0/LWJvb25kaS1jcmlz/cC1mcmllZC1ncmFt/LWZsb3VyLWJhbGxz/XzQ2NjY4OS02OTc4/MS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw' },
        { id: 112, name: 'Masala Papad', price: 399, description: '1 Tray = 10 Papads.', image: 'https://imgs.search.brave.com/sMRB6vScrrlDlYVqSzSq39zOaj88h8M7agnCPSDct_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYXNh/bGEtcGFwYWQtZGVs/aWNpb3VzLWluZGlh/bi1zbmFjay1tYWRl/LXVzaW5nLXJvYXN0/ZWQtZnJpZWQtdG9w/cGVkLXRhbmd5LXNw/aWN5LW9uaW9uLXRv/bWF0by1taXgtc2Vy/dmVkLW92ZXItMjI0/MDAyNDc2LmpwZw' },
        { id: 113, name: 'Paani Puri', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/prTJq6LIoS4QUX44vQEltxDXkFiTuHXGOg54AqmOIWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzgxLzkzLzM5/LzM2MF9GXzEzODE5/MzM5NDlfZHQyMWlH/Z2FSWlRVcE5udXFJ/a1FjQWREZ2FyaVZS/TnUuanBn' },
        { id: 114, name: 'Sev Puri', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/hd4gM4ndMKA_iptmoEiRktDxKnlFMTNG1eA1VFVWd2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQ4LzU2LzMy/LzM2MF9GXzg0ODU2/MzI5N18yMUVydmhp/bDk0azN4TFJBYk5x/VXJlTXRsVlRpWWlH/Ny5qcGc' },
        { id: 115, name: 'Dahi Chaat', price: 399, description: '1 Tray = 10 Serves.', image: 'https://imgs.search.brave.com/ajI67neHz7YmAEq1hkAlzgmnL9WD7IpyVEznJ8ertao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXBp/bmdwb3RjdXJyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDIvRGFoaS1T/ZXYtUGFwZGktQ2hh/YXQtUGlwaW5nLVBv/dC1DdXJyeS0xMDI0/eDY4My5qcGc' },
      ],
    },
    packages: [
        { id: 97, name: 'Marathi Tiffin 1 ', price: 1314, description: 'Misal Pav, Puran Poli, Batata Vada , Tea/Coffee | 1 Tray = 10 Serves', image: 'https://via.placeholder.com/150' },
        { id: 98, name: 'Marathi Tiffin 2', price: 1059, description: 'Misal Pav, Kandha Poha, Sabudana , Tea/Coffee| 1 Tray = Serves', image: 'https://via.placeholder.com/150' },
        { id: 99, name: 'Marathi Tiffin 3', price: 4915, description: 'Jeera Rice , Bharli Vangi , Bhakri(Jawari)(x2) , Methi Chi Patal , Modak(x5) , Masala Papad(x1) | 1 Tray = Serves ', image: 'https://via.placeholder.com/150' },
        { id: 100, name: 'Marathi Tiffin 4', price: 4475, description: 'Plain Rice , Dal Takda , Sev Bhaji , Bhakri(Rice)(x2) , Paneer Burji , Gajar Halwa(x1) , Boondi Raita(x1) | 1 Tray = Serves', image: 'https://via.placeholder.com/150' },
        { id: 101, name: 'Marathi Tiffin 5', price: 7394, description: 'Jeera Rice , Pitla , Thaalipeeth(x2) , Aalo chi Bhaji , Chana Masala , Shrikhand(x1) , Masala Chaas(x1) | 1 Tray = Serves', image: 'https://via.placeholder.com/150' },
      ],
  },
};

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [openCuisine, setOpenCuisine] = useState(null);

  useEffect(() => {
    const cuisineFromURL = searchParams.get('cuisine');
    if (cuisineFromURL && menuData[cuisineFromURL]) {
      setOpenCuisine(cuisineFromURL);
    }
  }, [searchParams]);

  const toggleCuisine = (cuisine) => {
    setOpenCuisine(openCuisine === cuisine ? null : cuisine);
  };
  
  return (
    <div className="menu-page">
      <h1 className="section-title" style={{marginTop: '40px', marginBottom: '40px'}}>Explore Our Menu</h1>
      <div className="main-accordion">
        {Object.keys(menuData).map(cuisineKey => (
          <div key={cuisineKey}>
            <button 
              className="accordion-header creative-header" 
              style={{backgroundImage: `url(${menuData[cuisineKey].image})`}}
              onClick={() => toggleCuisine(cuisineKey)}
            >
              <span>{cuisineKey.charAt(0).toUpperCase() + cuisineKey.slice(1)} Cuisine</span>
            </button>
            {openCuisine === cuisineKey && (
              <div className="accordion-content">
                <div className="menu-columns">
                  <div className="column customize-column">
                    <h3>Customize Your Own</h3>
                    {Object.keys(menuData[cuisineKey].customize).map(categoryKey => (
                      <div className="category-section" key={categoryKey}>
                        <h4 className="category-title">{categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</h4>
                        <div className="menu-products-list">
                          {menuData[cuisineKey].customize[categoryKey].map(item => (
                            <MenuListItem key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Column B: Our Packages */}
                  <div className="column packages-column">
                    <h3>Our Packages</h3>
                    <div className="menu-products-list">
                      {menuData[cuisineKey].packages.map(item => (
                        <MenuListItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;