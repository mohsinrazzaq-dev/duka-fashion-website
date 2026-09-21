const products=[
 {name:'Elegantni komplet',cat:'Žene',price:'4.500 RSD',img:'images/Elegantni.avif'},
 {name:'Kaput sa pojasom',cat:'Žene',price:'5.990 RSD',img:'images/Kaput.avif'},
 {name:'Haljina',cat:'Žene',price:'3.490 RSD',img:'images/Haljina.avif'},
 {name:'Pleteni komplet',cat:'Žene',price:'4.200 RSD',img:'images/Pleteni.avif'},
 {name:'Kožna torba',cat:'Dodaci',price:'2.990 RSD',img:'images/Kozna.avif'},
 {name:'Srce ogrlica',cat:'Nakit',price:'1.290 RSD',img:'images/Srce.avif'},
 {name:'Classic košulja',cat:'Muškarci',price:'3.290 RSD',img:'images/Classic.avif'},
 {name:'Crni sako',cat:'Muškarci',price:'6.490 RSD',img:'images/Crni.avif'}
];
const grid=document.getElementById('productGrid');
function render(list=products){grid.innerHTML=list.map((p,i)=>`<article class="product"><div class="product-img" style="background-image:url('${p.img}')"><button class="heart" onclick="favorite(this)">♡</button></div><div class="product-info"><h3>${p.name}</h3><p>${p.cat}</p><p class="price">${p.price}</p><button class="add" onclick="addCart('${p.name}')">DODAJ U KORPU</button></div></article>`).join('')}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const cat=btn.dataset.cat;render(cat==='Sve'?products:products.filter(p=>p.cat===cat))}));
let cart=0;function addCart(name){cart++;document.getElementById('cartCount').textContent=cart;showToast(`${name} je dodat u korpu.`)}
function favorite(btn){btn.textContent=btn.textContent==='♡'?'♥':'♡'}
function showToast(t){const x=document.getElementById('toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
document.querySelector('.search-toggle').onclick=()=>document.getElementById('searchbar').classList.toggle('open');
function searchProducts(){const q=document.getElementById('searchInput').value.toLowerCase();render(products.filter(p=>(p.name+' '+p.cat).toLowerCase().includes(q)));document.getElementById('shop').scrollIntoView()}
document.getElementById('menuBtn').onclick=()=>document.getElementById('nav').classList.toggle('open');
function subscribe(e){e.preventDefault();showToast('Hvala! Uspešno ste se prijavili.');e.target.reset()}
