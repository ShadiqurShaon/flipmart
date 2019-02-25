<template>
    <div>
        <div class="header-nav animate-dropdown">
    <div class="container">
      <div class="yamm navbar navbar-default" role="navigation">
        <div class="navbar-header">
       <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" class="navbar-toggle collapsed" type="button"> 
       <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
        <div class="nav-bg-class">
          <div class="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
            <div class="nav-outer">
              <ul class="nav navbar-nav">
                <li class="active dropdown yamm-fw"> <a href="home.html">Home</a> </li>
                <li class="dropdown mega-menu" v-for="item in manuelist" :key="item.manu1">
                    <a href="home.html" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown" style="text-transform: capitalize;">{{item.manu1}}</a>
                    
                    <ul class="dropdown-menu container" v-if="item.manu2!=null">
                        <li >

                            <div class="yamm-content">
                              <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-2 col-menu" v-for="(item2,index) in item.manu2" :key="index">
                                  <h2 class="title" style="text-transform: capitalize;">{{item2.manu2}}</h2>
                                  <ul class="links" v-if="item2.manu3!=null">
                                    <li v-for="(item3,index) in item2.manu3" :key='index'>
                                      <a href="#" style="text-transform: capitalize;">{{item3.manu3}}</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                        </li>
                      </ul>  
                </li>
                <!-- <li class="active dropdown yamm-fw"> <a href="home.html">Home</a> </li>
                <li class="dropdown mega-menu"> <a href="home.html" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Clothing</a></li>
                <li class="dropdown mega-menu"> 
                <a href="category.html"  data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Electronics</a>
                </li>
                <li class="dropdown mega-menu"> <a href="category.html">Health & Beauty</a> </li>
                <li class="dropdown mega-menu"> <a href="category.html">Watches</a> </li>
                <li class="dropdown mega-menu"> <a href="contact.html">Jewellery</a> </li>
                <li class="dropdown mega-menu"> <a href="contact.html">Shoes</a> </li>
                <li class="dropdown mega-menu"> <a href="contact.html">Kids & Girls</a> </li>
                <li class="dropdown"> <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</a>
                </li>
                <li class="dropdown  navbar-right special-menu"> <a href="#">Todays offer</a> </li> -->
              </ul>
              <!-- /.navbar-nav -->
              <div class="clearfix"></div>
            </div>
            <!-- /.nav-outer --> 
          </div>
          <!-- /.navbar-collapse --> 
          
        </div>
        <!-- /.nav-bg-class --> 
      </div>
      <!-- /.navbar-default --> 
    </div>
    <!-- /.container-class --> 
    
  </div>
    </div>

</template>

<script>
export default {
  data(){
    return {
      manuelist:[
      {manu1:'Clothing1',
      manu2:[
        {manu2:'man',
          manu3:[
            {manu3:'last1'},
            {manu3:'last2'},
            {manu3:'last3'}
          ]
        },
        {manu2:'man2',
          manu3:[
            {manu3:'last12'},
            {manu3:'last22'},
            {manu3:'last32'}
          ]
        }
      ]},
      {manu1:'Clothing2',
        manu2:[
          {manu2:'woman1'},
          {manu2:'woman1'},
          {manu2:'woman1'}
        ]
      },
      {manu1:'Clothing3'},
      {manu1:'Clothing4'}
    ]}
  },
  methods:{}
}
</script>
