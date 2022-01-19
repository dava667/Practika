<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand mar" href="https://пасьянс.com/">«EuroSkills Concerts».</a>
    
      
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
           <router-link class="nav-link mar" to="/">Already booked?</router-link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

<router-view/>
</template>

<style>
.mar{
  margin-left:200px ;
}
</style>
 
 <script>
export default {
 
}
 </script>
 