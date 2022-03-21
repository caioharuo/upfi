<div align="center">
  <h1>UpFi</h1>
  <h2>ReactJS - Ignite - Rocketseat</h2>
  <h3>Chapter #04</h3>
  <div>
    <a href="https://github.com/caioharuo/upfi#project-">Project</a>  |  
    <a href="https://github.com/caioharuo/upfi#layout-">Layout</a>  |  
    <a href="https://github.com/caioharuo/upfi#tools-%EF%B8%8F">Tools</a>  |  
    <a href="https://github.com/caioharuo/upfi#features-">Features</a>  |  
    <a href="https://github.com/caioharuo/upfi#how-to-execute-">How to execute</a>  |  
    <a href="https://github.com/caioharuo/upfi#license-">License</a>  
  </div>
</div> 

<hr />


![](https://i.ibb.co/0ZvsY3V/upfi-roan-vercel-app.png)

## Project 💻

UpFi is a web platform designed to host images in a free image hosting service ([ImgBB](https://imgbb.com/)). 
This application was developed during the second challenge of **Chapter 04** of ReactJS track on **[Rocketseat's](https://www.linkedin.com/school/rocketseat/)** ***Ignite*** plataform.

## Layout 🔖
You can view the project layout through [this link](https://github.com/rocketseat-education/ignite-template-reactjs-upload-de-imagens). You must have a Figma account to access it.

## Tools 🛠️

This project was developed using the following technologies:

- [ReactJS](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Query](https://react-query.tanstack.com/)
- [React Hook Form](https://react-hook-form.com/)
- [FaunaDB](https://fauna.com/)
- [ImgBB API](https://api.imgbb.com/)

## Features 💡
- [x] Render image cards;
- [x] Render a button if it has more pages to load;
- [x] Add a new image on database.

## How to execute 🚀

- Clone this repository;
- Create a new database in [FaunaDB](https://fauna.com/) and a new **collection** called ``images``;
- Create an account in ImgBB and generate a [API Key](https://api.imgbb.com/);
- Configure environment variables: `FAUNA_API_KEY` and `NEXT_PUBLIC_IMGBB_API_KEY` on `.env.local` on project root;
- Install all the dependencies with `yarn` or `npm install`;
- Run the application with `yarn dev` or `npm run dev`;
- Access [`localhost:3000`](http://localhost:3000/) in your browser;
- Enjoy 

## License 📄

This project is under the MIT license. See the [LICENSE](https://github.com/caioharuo/spacetraveling/blob/master/LICENSE) file for more details.

Developed with 💜 by [Caio Hatai](https://www.linkedin.com/in/caio-haruo/) and [Rocketseat](https://www.linkedin.com/school/rocketseat/).
