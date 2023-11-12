<script setup></script>

<template>
  <!-- body -->
  <div class="container">
    <!--navbar  -->
    <nav class="header">
      <div class="navbar-content">
        <img src="./assets/icons/Icon(1).png" alt="" />
        <a class="" href="#">Nexcent</a>
      </div>
      <div class="right">
        <ul class="links">
          <li><a class="">Home</a></li>
          <li><a class="" href="#">Features</a></li>
          <li><a class="" href="#">Community</a></li>
          <li><a class="" href="#">Blog</a></li>
          <li><a class="" href="#">Pricing</a></li>
        </ul>
        <button class="btn">
          Register Now <img src="./assets/icons/Down.svg" alt="" />
        </button>
      </div>
    </nav>
    <!-- hero -->
    <div class="page1">
      <div class="page1-title">
        <span class="title1">Lessons and insights</span>
        <span class="title2">from 8 years</span>
        <p class="subtitle">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button class="page1-btn btn">Register</button>
      </div>

      <div class="page1-img">
        <img src="./assets/icons/Illustration(1).png" alt="" />
      </div>
    </div>
    <div class="dot">
      <img src="./assets/icons/Dot.svg" alt="" />
    </div>
    <!-- page 2 -->
    <div class="page2 page1">
      <div class="page2-img">
        <img src="./assets/icons/Frame 35(1).png" alt="" />
      </div>
      <div class="page2-subtitle">
        <h2 class="page2-title">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p class="text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button class="btn">Learn More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:wght@800&display=swap");
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.navbar-content {
  color: #263238;
  font-size: larger;
  width: 107.54px;
  height: 16.71px;
  gap: 5.57px;
  padding-left: 35px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 1px;
}
.right {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 50%;
  color: #4d4d4d;
  font-size: small;
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
  font: Inter;
}

.btn {
  background: #4caf4f;
  color: aliceblue;
  font-size: 10px;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.page1 {
  display: flex;
  align-items: center;
  background: #f5f7fa;
  width: 100%;
  height: 400px;
  justify-content: space-around;
}

.dot {
  display: flex;
  justify-content: center;
  width: 100%;
  background: #f5f7fa;
}
.page1-title {
  width: 50%;
  height: 20;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}
.title1 {
  color: #4d4d4d;
  font-family: Inter;
  font-size: 50px;
}

.title2 {
  color: #4caf4f;
  font-family: Inter;
  font-size: 57px;
}

.page1-img {
  width: 272.16px;
  height: 283.3px;
  padding-left: 80px;
}

.subtitle {
  color: #717171;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 1px;
  letter-spacing: 0em;
  width: 457.32px;
  height: 17px;
}

.page1-btn {
  text-align: center;
}


.page2 {
  width: Fixed (480.77px);
  height: Hug (144.56px);
  padding: 30px, 48.08px, 0px, 48.08px;
  justify-content: space-between;
  border: 1px solid black;
  background: white
}

.page2-img {
  width: 147.57px;
  height: 144.56px;
  padding: 30.36px, 50.16px, 17.36px, 0px;
  padding-left: 60px;
  border: 1px solid black;
}
.page2-subtitle {
  width: 70%;
  height: 250px;
  display: flex;
  padding-right: 34px;
  align-items: start;
  justify-content: center;
  border: 1px solid black;
  flex-direction: column;
}

.page2-title {
  width: 450.65px;
  height: 30px;
  font-family: Inter;
  font-size: 26px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #4D4D4D;
}

.text2 {
  width: 500.65px;
  height: 37px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #717171;
}

.btn2 {
  width: Hug (50.37px);
  height: Hug (18.35px);
  padding: 4.67px, 10.68px, 4.67px, 10.68px;
  border-radius: 1.34px;
  gap: 3.34px;

}
</style>
