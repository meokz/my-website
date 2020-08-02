<template>
  <div class="link">
    <h2>Link</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul>
          <li :style="{'background-image': `url(${require('~/assets/profile/img/mail.png')})`}">
            <a href="#">kaootao"@"gmail.com</a>
          </li>
          <li :style="{'background-image': `url(${require('~/assets/profile/img/twitter.png')})`}">
            <a href="https://twitter.com/0MeO" target="_blank">Twitter</a>
          </li>
          <li :style="{'background-image': `url(${require('~/assets/profile/img/github.png')})`}">
            <a href="https://github.com/meokz" target="_blank">Github</a>
          </li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <ul>
          <li :style="{'background-image': `url(${require('~/assets/profile/img/blog.png')})`}">
            <a href="http://meokz.hatenablog.com/" target="_blank">Blog</a>
          </li>
          <!-- <li class="facebook"><a href="https://www.facebook.com/kaootao" target="_blank">Facebook</a></li> -->
          <li :style="{'background-image': `url(${require('~/assets/profile/img/slideshare.png')})`}">
            <a href="https://www.slideshare.net/kaootao" target="_blank">SlideShare</a>
          </li>
          <li :style="{'background-image': `url(${require('~/assets/profile/img/blog.png')})`}">
            <a href="https://www.wantedly.com/users/18420731" target="_blank">Wantedly</a>
          </li>
          <!-- <li class="skype"><a href="#">meokz_</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

.link li{
    margin: 20px 10px 20px 10px;
    padding: 2px;
    background-size:contain;
    background-repeat:no-repeat;
}

.link li > a{
    padding-left: 40px;
}
</style>

<script>
export default {

}
</script>
