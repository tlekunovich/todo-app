<template>
    <div class="homePage">
        <h2> Home page </h2>
        <p class="description">One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.</p>
        <button class="btn" >
            <a href="/todos">let's start</a>
        </button>
    </div>
</template>

<style scoped>
.homePage{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
}
    .description{
    min-width: 200px;
    max-width: 900px;
    padding: 10px;
    text-align: justify;
    margin-top: 10px;
    margin-bottom: 10px;
   }

   .btn a{
    text-decoration: none;
    color: black;
  }

  .btn{
    height: 25px;
  padding: 0 5px;
  background-color: #EFEFEF(142, 178, 232,0.5);
  border:1px solid #d0d0d0;
  border-radius: 2px;
  }

</style>