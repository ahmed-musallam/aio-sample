<template >
  <coral-shell>
    <coral-shell-header>
      <coral-shell-header-home>
        <a
          is="coral-shell-homeanchor"
          icon="adobeExperienceManagerColor"
          href="#"
        >Greeter App</a>
      </coral-shell-header-home>
      <coral-shell-header-content>
        <coral-shell-workspaces>
          <a is="coral-shell-workspace" href="#workspace1" selected>Workspace 1</a>
          <a is="coral-shell-workspace" href="#workspace2">Workspace 2</a>
          <a is="coral-shell-workspace" href="#workspace3">Workspace 3</a>
        </coral-shell-workspaces>
      </coral-shell-header-content>
        <coral-shell-header-actions>
          <!-- Normal quiet button is used here if necessary -->
          <!--<a is="coral-anchorbutton" variant="quiet" href="#">Beta Feedback</a>-->
          <coral-shell-menubar>
            <coral-shell-menubar-item menu="#menu_organizations">Microsoft</coral-shell-menubar-item>
            <coral-shell-menubar-item menu="#menu_solutions" icon="apps"></coral-shell-menubar-item>
            <coral-shell-menubar-item menu="#menu_help" icon="helpOutline"></coral-shell-menubar-item>
            <coral-shell-menubar-item menu="#menu_pulse" icon="bell" badge="5"></coral-shell-menubar-item>
            <coral-shell-menubar-item menu="#menu_user" iconsize="M" iconvariant="circle" icon="userCircleColor"></coral-shell-menubar-item>
          </coral-shell-menubar>
        </coral-shell-header-actions>
    </coral-shell-header>
    <coral-shell-menu id="menu_organizations">
      <coral-shell-orgswitcher>
        <coral-shell-organization selected name="microsoft" icon="windows8">Microsoft</coral-shell-organization>
        <coral-shell-organization name="facebook" icon="facebook">Facebook</coral-shell-organization>
        <coral-shell-organization name="flickr" icon="flickr">Flickr</coral-shell-organization>
        <coral-shell-organization name="newsgator" icon="newsgator">Newsgator</coral-shell-organization>
      </coral-shell-orgswitcher>
    </coral-shell-menu>
    <coral-shell-menu id="menu_help">
      <coral-shell-help id="help">
        <a is="coral-shell-help-item" href="/learn">Marketing Cloud Help</a>
        <a is="coral-shell-help-item" href="/community">Community</a>
        <a is="coral-shell-help-item" href="/customercare">Customer Care</a>
        <a is="coral-shell-help-item" href="/news">What's new</a>
        <a is="coral-shell-help-item" href="/status">Adobe Marketing Cloud Status</a>
        <coral-shell-help-separator></coral-shell-help-separator>
        <a is="coral-shell-help-item" href="/getstarted">Getting Started</a>
        <a is="coral-shell-help-item" href="/getstarted">Feedback</a>
      </coral-shell-help>
    </coral-shell-menu>
    <coral-shell-menu id="menu_pulse">
      <h2 class="coral-Heading coral-Heading--4 u-coral-margin">Pulse notifications</h2>
    </coral-shell-menu>
    <coral-shell-menu id="menu_solutions" placement="top" from="top" full top>
      <coral-shell-solutionswitcher>
        <coral-shell-solutions>
          <a
            is="coral-shell-solution"
            icon="adobeExperienceCloudColor"
            linked
            href="#"
          >Experience Cloud</a>
        </coral-shell-solutions>
        <coral-shell-solutions>
          <a is="coral-shell-solution" icon="adobeAdvertisingCloud" href="#">Advertising Cloud</a>
          <a is="coral-shell-solution" icon="adobeAnalytics" href="#">Analytics</a>
          <a is="coral-shell-solution" icon="adobeAudienceManager" href="#">Audience Manager</a>
          <a is="coral-shell-solution" icon="adobeCampaign" href="#">Campaign</a>
          <a
            is="coral-shell-solution"
            icon="adobeExperienceManagerColor"
            linked
            href="#"
          >Experience Manager</a>
          <a is="coral-shell-solution" icon="magentoCommerce" href="#">Magento Commerce</a>
          <a is="coral-shell-solution" icon="adobePrimetime" href="#">Primetime</a>
          <a is="coral-shell-solution" icon="adobeSocial" href="#">Social</a>
          <a is="coral-shell-solution" icon="adobeTarget" href="#">Target</a>
        </coral-shell-solutions>

        <coral-shell-solutions secondary>
          <a
            is="coral-shell-solution"
            icon="adobeExperiencePlatformColor"
            linked
            href="#"
          >Experience Platform</a>
          <a is="coral-shell-solution" href="#">Exchange</a>
          <a is="coral-shell-solution" href="#">Launch</a>
          <a is="coral-shell-solution" href="#">People</a>
          <a is="coral-shell-solution" linked href="#">Assets</a>
        </coral-shell-solutions>
      </coral-shell-solutionswitcher>
    </coral-shell-menu>
    <coral-shell-menu id="menu_user">
      <coral-shell-user
        avatar="https://wwwimages2.adobe.com/content/dam/acom/en/leaders/photos/shantanu-narayen.jpg"
      >
        <coral-shell-user-name>Shantanu Narayen</coral-shell-user-name>
        <coral-shell-user-heading>CEO</coral-shell-user-heading>
        <coral-shell-user-content>
          <div style="display:flex;justify-content:center">
            <a is="coral-anchorbutton" variant="quiet" href="#profile">Edit Profile</a>
          </div>
        </coral-shell-user-content>
        <coral-shell-user-footer>
          <a is="coral-anchorbutton" href="#signout">Sign Out</a>
        </coral-shell-user-footer>
      </coral-shell-user>
    </coral-shell-menu>
    <coral-shell-content>
      <!-- Main application goes here -->
      <section class="u-coral-padding-horizontal u-coral-margin">
        <Greeter></Greeter>
        <br>
        <coral-alert>
          <coral-alert-header>Info</coral-alert-header>
          <coral-alert-content>This app is running with Vue version: {{version}}.</coral-alert-content>
        </coral-alert>
      </section>
    </coral-shell-content>
  </coral-shell>
</template>

<script lang="ts">
import Vue from "vue";
import Greeter from "./Greeter.vue";

export default Vue.extend({
  data() {
    return {
      version: Vue.version
    };
  },
  components: {
    Greeter
  }
});
</script>
<style lang="scss" scoped>
/* yeah, it's empty. */
</style>