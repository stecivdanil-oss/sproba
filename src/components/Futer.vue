<script setup>

</script>

<template>
    <footer>
      <div class="rang-clothing">
        <h3>CLOTHING</h3>
         <a href="">
            <p>Thoes</p>
         </a>
         <a href="">
            <p>Clothing</p> 
         </a>
         <a href="">
            <p>Accessories</p>
         </a>
         <a href="">
            <p>New Arrivals</p>
         </a>
         <a href="">
            <p>Best Sellers</p>
         </a>
         <a href="">
            <p>SALE</p>
         </a>
        </div>
        <div class="sport">
            <h3>SPORTS</h3>
           <div class="rang-sport">
            <a href="">
                <p>Saccer</p>
            </a>
            <a href="">
                <p>Running</p>
            </a>
            <a href="">
                <p>Basketball</p>
            </a>
            <a href="">
                <p>football</p>
            </a>
            <a href="">
                <p>Outdoor</p>
            </a>
            <a href="">
                <p>Golf</p>
            </a>
            <a href="">
                <p>Tennis</p>
            </a>
        </div>
      </div>
      <div class="support">
        <h3>SUPPORT</h3>
      
      <div class="rang-support">
        <a href="">
            <p>Help</p>
        </a>
        <a href="">
            <p>Shiping</p>
        </a>
        <a href="">
            <p>Order Tracker</p>
        </a>
        <a href="">
            <p>Store Locator</p>
        </a>
        <a href="">
            <p>Size Charts</p>
        </a><a href="">
            <p>Bra Fit Guide</p>
        </a><a href="">
            <p>Promotions</p>
        </a><a href="">
            <p>Sitemap</p>
        </a>
      </div>
      </div>
      <div class="followus">
        <h3>FOLLOW US</h3>
        <div class="folowslike">
        <a href=""><img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/128/25/25698.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/128/3116/3116491.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/128/3669/3669688.png" alt=""></a>
        </div>
    </div>
    </footer>
</template>

<style scoped>
a,img{
    border-radius: 12px;
    width: 40px;
}
.folowslike{
    display: flex;
    flex-direction: column;
    gap: 8px;
    }
.followus{
display: flex;
flex-direction: column;
align-items: start;
}
p,a{
color: black;
text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: var(--main-color);
    padding: 40px;
    margin-top: 40px;
}
</style>