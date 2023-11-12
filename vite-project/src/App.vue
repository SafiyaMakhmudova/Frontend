<script setup>
import Header from './components/partials/Header.vue';

</script>

<template>
  <!-- body -->
  <div class="container">
    <!--navbar  -->
    <Header/>
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
        <img src="./assets/images/Illustration(1).png" alt="" />
      </div>
    </div>
    <div class="dot">
      <img src="./components/icons/Dot.svg" alt="">
    </div>
    
    <!-- page 2 -->
    <div class="page2 page1">
      <div class="page2-img">
        <img src="./assets/images/Frame 35(1).png" alt="">
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
    
    <!-- page3 -->
    <div class="page3 page1">
      <div class="page3-subtitle">
        <span class="page3-title1">Helping a local</span><br>
        <span class="page3-title2">business reinvent itself</span>
        <p class="page3-text">We reached here with our hard work and dedication</p>
      </div>
      <div class="page3-text page1">
        <div class="page3-text1">
          <div>
            <img src="./components/icons/Icon.svg" alt="">
          </div>
          <h1 class="number"></h1>
          <p class="number-text">Members</p>
          <div>
            <img src="./components/icons/Icon2.svg" alt="">
          </div>
          <h1 class="number">828,867</h1>
          <p class="number-text">Event Bookings</p>
        </div>
        <div>
          <img src="./components/icons/Icon33.svg" alt="">
          <h1 class="number">46,328</h1>
          <p class="number-text">Clubs</p>

          <img src="./components/icons/Icon4.svg" alt="">
          <h1 class="number">1,926,436</h1>
          <p class="number-text">Payments</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.page3-title1 {
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  color: #4D4D4D;
}

.page3-subtitle {
  width: Fixed (180.29px);
  height: Hug (41.67px);
  gap: 2.67px;
  padding-left: 50px;
}

.number {
  color: #4D4D4D;
  font-family: Inter;
  font-size: 19px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
}
.number-text{
  color: #717171;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 8px;
  letter-spacing: 0em;
  text-align: left;


}
.page3-title2 {
  font-family: Inter;
  font-size: 26px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #4CAF4F;
}

.page3-text {
  width: 300.29px;
  height: 19px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0em;
  text-align: left;
  color: #18191F;

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
  background: white
}

.page2-img {
  width: 147.57px;
  height: 144.56px;
  padding: 30.36px, 50.16px, 17.36px, 0px;
  padding-left: 60px;
}
.page2-subtitle {
  width: 70%;
  height: 250px;
  display: flex;
  padding-right: 34px;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
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
