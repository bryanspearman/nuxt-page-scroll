<template>
  <div>
    <!-- ~~~~~~ ~~~~~~ ~~~~~~ Navigation ~~~~~ ~~~~~~ ~~~~~~ -->
    <v-app-bar app clipped-right height="70" color="white" elevation="1" class="px-2">      
      <v-app-bar-title>Logo Here</v-app-bar-title>     
      <v-spacer />
      <v-app-bar-nav-icon color="primary" class="hidden-lg-and-up" @click.stop="drawer = !drawer" /> 
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer"
      :permanent="$vuetify.breakpoint.lgAndUp" 
      clipped 
      right
      app 
      width="300"
      color="white"
      :expand-on-hover="$vuetify.breakpoint.lgAndUp ? true : false"
      >
      <v-list>
        <v-list-item v-for="(link, i) in navLinks" :key="i" @click="$vuetify.goTo($refs[link.go], options), drawer = !drawer">
           <v-list-item-action>
            <v-icon color="primary">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>    

    <!-- ~~~~~~ ~~~~~~ ~~~~~~ Content ~~~~~ ~~~~~~ ~~~~~~ -->
    <v-card 
      tile
      flat
      ref="home"
      color="light-blue lighten-5"
      class="px-8 px-sm-16 pb-16 pt-5 text-body-1"   
      :style="$vuetify.breakpoint.mdAndUp ? 'height: 100vh' : null"
      >     
      <h1 class="text-h2 text-sm-h1">Home</h1>
      <p>
        Dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
        faucibus nisl tincidunt eget nullam non. Arcu cursus euismod quis
        viverra nibh cras pulvinar. Nunc faucibus a pellentesque sit. Commodo
        odio aenean sed adipiscing diam donec. Eget lorem dolor sed viverra.
        Nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et
        tortor consequat id porta nibh. Quam pellentesque nec nam aliquam sem et
        tortor consequat. Morbi leo urna molestie at elementum. Ac turpis
        egestas sed tempus urna et pharetra. Iaculis eu non diam phasellus.
      </p>

      <p>
        A condimentum vitae sapien pellentesque habitant morbi tristique
        senectus et. Egestas fringilla phasellus faucibus scelerisque. Ac
        placerat vestibulum lectus mauris ultrices eros. At varius vel pharetra
        vel turpis nunc. Vitae ultricies leo integer malesuada nunc vel. Amet
        consectetur adipiscing elit duis tristique sollicitudin. Lorem dolor sed
        viverra ipsum nunc. Amet nisl suscipit adipiscing bibendum. Morbi
        tristique senectus et netus et malesuada fames. Tellus at urna
        condimentum mattis pellentesque. In hendrerit gravida rutrum quisque
        non. Lectus arcu bibendum at varius vel. Ac ut consequat semper viverra
        nam libero justo laoreet. Enim neque volutpat ac tincidunt vitae.
      </p>

      <p>
        Nulla facilisi nullam vehicula ipsum. Integer feugiat scelerisque varius
        morbi enim nunc. Donec enim diam vulputate ut. Quis blandit turpis
        cursus in hac habitasse platea. Vel facilisis volutpat est velit egestas
        dui id ornare arcu. Integer enim neque volutpat ac tincidunt vitae
        semper quis. Proin libero nunc consequat interdum varius sit amet. Leo
        in vitae turpis massa sed elementum tempus egestas. Diam ut venenatis
        tellus in metus vulputate eu. In arcu cursus euismod quis viverra. Leo
        in vitae turpis massa sed. Risus nec feugiat in fermentum. Varius vel
        pharetra vel turpis. Duis ultricies lacus sed turpis tincidunt id
        aliquet risus. Quam nulla porttitor massa id neque aliquam vestibulum
        morbi blandit. Leo in vitae turpis massa sed elementum tempus egestas.
      </p>

      <p>
        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Urna duis
        convallis convallis tellus. Pulvinar neque laoreet suspendisse interdum
        consectetur libero. Etiam sit amet nisl purus in mollis. Odio eu feugiat
        pretium nibh ipsum consequat nisl vel pretium. Turpis tincidunt id
        aliquet risus. Nisl tincidunt eget nullam non nisi. Viverra maecenas
        accumsan lacus vel facilisis. Ullamcorper eget nulla facilisi etiam
        dignissim. Arcu cursus vitae congue mauris. Senectus et netus et
        malesuada fames ac turpis egestas integer. Elementum nibh tellus
        molestie nunc non blandit massa enim nec. Ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at augue. Eget velit aliquet sagittis
        id consectetur purus ut. Massa massa ultricies mi quis hendrerit dolor
        magna eget est. Nunc eget lorem dolor sed viverra.
      </p>
      <v-btn x-large icon @click="$vuetify.goTo($refs.about, options)"><v-icon>mdi-arrow-down</v-icon></v-btn>
    </v-card>

    <v-card 
      tile 
      flat
      ref="about"  
      color="light-blue lighten-4" 
      class="px-8 px-sm-16 pb-16 pt-5 text-body-1"      
      :style="$vuetify.breakpoint.lgAndUp ? 'height: 100vh;' : null">     
      <h2 class="text-h3 text-sm-h2">About</h2>
      <p>
        Dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
        faucibus nisl tincidunt eget nullam non. Arcu cursus euismod quis
        viverra nibh cras pulvinar. Nunc faucibus a pellentesque sit. Commodo
        odio aenean sed adipiscing diam donec. Eget lorem dolor sed viverra.
        Nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et
        tortor consequat id porta nibh. Quam pellentesque nec nam aliquam sem et
        tortor consequat. Morbi leo urna molestie at elementum. Ac turpis
        egestas sed tempus urna et pharetra. Iaculis eu non diam phasellus.
      </p>

      <p>
        A condimentum vitae sapien pellentesque habitant morbi tristique
        senectus et. Egestas fringilla phasellus faucibus scelerisque. Ac
        placerat vestibulum lectus mauris ultrices eros. At varius vel pharetra
        vel turpis nunc. Vitae ultricies leo integer malesuada nunc vel. Amet
        consectetur adipiscing elit duis tristique sollicitudin. Lorem dolor sed
        viverra ipsum nunc. Amet nisl suscipit adipiscing bibendum. Morbi
        tristique senectus et netus et malesuada fames. Tellus at urna
        condimentum mattis pellentesque. In hendrerit gravida rutrum quisque
        non. Lectus arcu bibendum at varius vel. Ac ut consequat semper viverra
        nam libero justo laoreet. Enim neque volutpat ac tincidunt vitae.
      </p>

      <p>
        Nulla facilisi nullam vehicula ipsum. Integer feugiat scelerisque varius
        morbi enim nunc. Donec enim diam vulputate ut. Quis blandit turpis
        cursus in hac habitasse platea. Vel facilisis volutpat est velit egestas
        dui id ornare arcu. Integer enim neque volutpat ac tincidunt vitae
        semper quis. Proin libero nunc consequat interdum varius sit amet. Leo
        in vitae turpis massa sed elementum tempus egestas. Diam ut venenatis
        tellus in metus vulputate eu. In arcu cursus euismod quis viverra. Leo
        in vitae turpis massa sed. Risus nec feugiat in fermentum. Varius vel
        pharetra vel turpis. Duis ultricies lacus sed turpis tincidunt id
        aliquet risus. Quam nulla porttitor massa id neque aliquam vestibulum
        morbi blandit. Leo in vitae turpis massa sed elementum tempus egestas.
      </p>

      <p>
        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Urna duis
        convallis convallis tellus. Pulvinar neque laoreet suspendisse interdum
        consectetur libero. Etiam sit amet nisl purus in mollis. Odio eu feugiat
        pretium nibh ipsum consequat nisl vel pretium. Turpis tincidunt id
        aliquet risus. Nisl tincidunt eget nullam non nisi. Viverra maecenas
        accumsan lacus vel facilisis. Ullamcorper eget nulla facilisi etiam
        dignissim. Arcu cursus vitae congue mauris. Senectus et netus et
        malesuada fames ac turpis egestas integer. Elementum nibh tellus
        molestie nunc non blandit massa enim nec. Ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at augue. Eget velit aliquet sagittis
        id consectetur purus ut. Massa massa ultricies mi quis hendrerit dolor
        magna eget est. Nunc eget lorem dolor sed viverra.
      </p>
      <v-btn x-large icon @click="$vuetify.goTo($refs.services, options)"><v-icon>mdi-arrow-down</v-icon></v-btn>
    </v-card>

    <v-card 
      tile
      flat
      ref="services"
      color="light-blue lighten-3"
      class="px-8 px-sm-16 pb-16 pt-5 text-body-1"
      :style="$vuetify.breakpoint.lgAndUp ? 'height: 100vh;' : null"
      >      
      <h2 class="text-h3 text-sm-h2">Services</h2>
      <p>
        Dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
        faucibus nisl tincidunt eget nullam non. Arcu cursus euismod quis
        viverra nibh cras pulvinar. Nunc faucibus a pellentesque sit. Commodo
        odio aenean sed adipiscing diam donec. Eget lorem dolor sed viverra.
        Nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et
        tortor consequat id porta nibh. Quam pellentesque nec nam aliquam sem et
        tortor consequat. Morbi leo urna molestie at elementum. Ac turpis
        egestas sed tempus urna et pharetra. Iaculis eu non diam phasellus.
      </p>

      <p>
        A condimentum vitae sapien pellentesque habitant morbi tristique
        senectus et. Egestas fringilla phasellus faucibus scelerisque. Ac
        placerat vestibulum lectus mauris ultrices eros. At varius vel pharetra
        vel turpis nunc. Vitae ultricies leo integer malesuada nunc vel. Amet
        consectetur adipiscing elit duis tristique sollicitudin. Lorem dolor sed
        viverra ipsum nunc. Amet nisl suscipit adipiscing bibendum. Morbi
        tristique senectus et netus et malesuada fames. Tellus at urna
        condimentum mattis pellentesque. In hendrerit gravida rutrum quisque
        non. Lectus arcu bibendum at varius vel. Ac ut consequat semper viverra
        nam libero justo laoreet. Enim neque volutpat ac tincidunt vitae.
      </p>

      <p>
        Nulla facilisi nullam vehicula ipsum. Integer feugiat scelerisque varius
        morbi enim nunc. Donec enim diam vulputate ut. Quis blandit turpis
        cursus in hac habitasse platea. Vel facilisis volutpat est velit egestas
        dui id ornare arcu. Integer enim neque volutpat ac tincidunt vitae
        semper quis. Proin libero nunc consequat interdum varius sit amet. Leo
        in vitae turpis massa sed elementum tempus egestas. Diam ut venenatis
        tellus in metus vulputate eu. In arcu cursus euismod quis viverra. Leo
        in vitae turpis massa sed. Risus nec feugiat in fermentum. Varius vel
        pharetra vel turpis. Duis ultricies lacus sed turpis tincidunt id
        aliquet risus. Quam nulla porttitor massa id neque aliquam vestibulum
        morbi blandit. Leo in vitae turpis massa sed elementum tempus egestas.
      </p>

      <p>
        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Urna duis
        convallis convallis tellus. Pulvinar neque laoreet suspendisse interdum
        consectetur libero. Etiam sit amet nisl purus in mollis. Odio eu feugiat
        pretium nibh ipsum consequat nisl vel pretium. Turpis tincidunt id
        aliquet risus. Nisl tincidunt eget nullam non nisi. Viverra maecenas
        accumsan lacus vel facilisis. Ullamcorper eget nulla facilisi etiam
        dignissim. Arcu cursus vitae congue mauris. Senectus et netus et
        malesuada fames ac turpis egestas integer. Elementum nibh tellus
        molestie nunc non blandit massa enim nec. Ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at augue. Eget velit aliquet sagittis
        id consectetur purus ut. Massa massa ultricies mi quis hendrerit dolor
        magna eget est. Nunc eget lorem dolor sed viverra.
      </p>
      <v-btn x-large icon @click="$vuetify.goTo($refs.contact, options)"><v-icon>mdi-arrow-down</v-icon></v-btn>
    </v-card>

    <v-card 
      tile 
      flat
      ref="contact"
      color="light-blue lighten-2" 
      class="px-8 px-sm-16 pb-16 pt-5 text-body-1" 
      :style="$vuetify.breakpoint.lgAndUp ? 'height: 100vh;' : null"
      >      
      <h2 class="text-h3 text-sm-h2">Contact</h2>
      <p>
        Dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
        faucibus nisl tincidunt eget nullam non. Arcu cursus euismod quis
        viverra nibh cras pulvinar. Nunc faucibus a pellentesque sit. Commodo
        odio aenean sed adipiscing diam donec. Eget lorem dolor sed viverra.
        Nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et
        tortor consequat id porta nibh. Quam pellentesque nec nam aliquam sem et
        tortor consequat. Morbi leo urna molestie at elementum. Ac turpis
        egestas sed tempus urna et pharetra. Iaculis eu non diam phasellus.
      </p>

      <p>
        A condimentum vitae sapien pellentesque habitant morbi tristique
        senectus et. Egestas fringilla phasellus faucibus scelerisque. Ac
        placerat vestibulum lectus mauris ultrices eros. At varius vel pharetra
        vel turpis nunc. Vitae ultricies leo integer malesuada nunc vel. Amet
        consectetur adipiscing elit duis tristique sollicitudin. Lorem dolor sed
        viverra ipsum nunc. Amet nisl suscipit adipiscing bibendum. Morbi
        tristique senectus et netus et malesuada fames. Tellus at urna
        condimentum mattis pellentesque. In hendrerit gravida rutrum quisque
        non. Lectus arcu bibendum at varius vel. Ac ut consequat semper viverra
        nam libero justo laoreet. Enim neque volutpat ac tincidunt vitae.
      </p>

      <p>
        Nulla facilisi nullam vehicula ipsum. Integer feugiat scelerisque varius
        morbi enim nunc. Donec enim diam vulputate ut. Quis blandit turpis
        cursus in hac habitasse platea. Vel facilisis volutpat est velit egestas
        dui id ornare arcu. Integer enim neque volutpat ac tincidunt vitae
        semper quis. Proin libero nunc consequat interdum varius sit amet. Leo
        in vitae turpis massa sed elementum tempus egestas. Diam ut venenatis
        tellus in metus vulputate eu. In arcu cursus euismod quis viverra. Leo
        in vitae turpis massa sed. Risus nec feugiat in fermentum. Varius vel
        pharetra vel turpis. Duis ultricies lacus sed turpis tincidunt id
        aliquet risus. Quam nulla porttitor massa id neque aliquam vestibulum
        morbi blandit. Leo in vitae turpis massa sed elementum tempus egestas.
      </p>

      <p>
        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Urna duis
        convallis convallis tellus. Pulvinar neque laoreet suspendisse interdum
        consectetur libero. Etiam sit amet nisl purus in mollis. Odio eu feugiat
        pretium nibh ipsum consequat nisl vel pretium. Turpis tincidunt id
        aliquet risus. Nisl tincidunt eget nullam non nisi. Viverra maecenas
        accumsan lacus vel facilisis. Ullamcorper eget nulla facilisi etiam
        dignissim. Arcu cursus vitae congue mauris. Senectus et netus et
        malesuada fames ac turpis egestas integer. Elementum nibh tellus
        molestie nunc non blandit massa enim nec. Ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at augue. Eget velit aliquet sagittis
        id consectetur purus ut. Massa massa ultricies mi quis hendrerit dolor
        magna eget est. Nunc eget lorem dolor sed viverra.
      </p>
      <v-btn x-large icon @click="$vuetify.goTo($refs.home, options)"><v-icon>mdi-home</v-icon></v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() { 
    return {       
      drawer: false,
      selector: '#scroll-with-options',
      duration: 600,
      offset: 0,
      easing: 'easeInOutCubic',
      navLinks: [
        {
          icon: 'mdi-home',
          label: 'Home',
          go: 'home'
        },
        {
          icon: 'mdi-book',
          label: 'About',
          go: 'about'
        },
        {
          icon: 'mdi-tools',
          label: 'Services',
          go: 'services'
        },
        {
          icon: 'mdi-phone',
          label: 'Contact',
          go: 'contact'
        },
      ]
    }   
  },

  computed: {    
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    }
  },
}
</script>

<style scoped>
 .blue {
   background: blue;
 }
</style>
