<template>
  <div class="home">
    <div class="container-fluid bg-image">
      <div class="row justify-content-center align-items-center mainRow">
        <div class="col-lg-10 d-flex justify-content-center">
          <h1 class="text-center text-light">
            <strong>
              Full-Stack Software Developer
            </strong>
          </h1>
        </div>
      </div>
      <div class="row justify-content-center aboutRow">
        <div class="col-lg-10 text-center text-light">
          <h2 class="mb-0">About Me</h2>
          <h2>_____</h2>
          <h5 class="mt-4">
            Joe is a Software Developer who was born and raised in Idaho. His
            background in Escrow has ingrained a strong sense of importance when
            it comes to communication, meeting deadlines, thoroughly completing
            tasks, and providing client satisfaction by keeping them informed
            while managing hundreds of thousands of their dollars. While Escrow
            provided a sense of accomplishment when helping people buy or sell
            property, Joe has never been able to escape the curiousity for
            software development that comes with being a long time gamer, and
            growing up watching computers and the internet grow exponentially.
            Alongside Software Development and video games, Joe also loves
            animals, cars, clothes, sneakers and fitness. Joe also holds an
            Associates of Arts Degree in Information Technology from The
            University of Phoenix.
          </h5>
        </div>
      </div>
      <div class="row justify-content-center skillsRow">
        <h2 class="mb-4"><u>Technologies and Tools</u></h2>
        <img src="../assets/Icons.png" alt="" />
      </div>
      <div class="row justify-content-around appRow text-light">
        <h2 class="col-12 mb-4 text-center"><u>Applications</u></h2>
        <div class="col-3">
          <img class="appImg" src="../assets/BugLogImg.png" alt="" />
        </div>
        <div class="col-3">
          <img class="appImg" src="../assets/KeeprImg.png" alt="" />
        </div>
        <div class="col-3">
          <img class="appImg" src="../assets/PetPalImg.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
<style>
strong {
  font-size: 4rem;
  text-shadow: 2px 2px black;
}
.mainRow {
  height: 100vh;
  background-image: url("../assets/kb-bg.jpg");
  background-position: center center;
  background-size: cover;
}
.aboutRow {
  background-color: rgb(34, 6, 54);
  padding-top: 5rem;
  padding-bottom: 6rem;
}
.skillsRow {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
img {
  max-width: 80%;
}
.appRow {
  background-color: rgb(0, 59, 87);
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.appImg {
  max-height: 9rem;
}
</style>
