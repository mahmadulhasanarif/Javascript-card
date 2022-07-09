const postsData = [
    {
        title: "This is title 2",
        desc: "Lorem, ipsum dolor sit amet  dolor aliquam praesentium quos accusantium?"
    },
    {
        title: "this is title 3",
        desc: "Lorem, ipsum dolor sit amet  dolor aliquam praesentium quos accusantium?"
    },
    {
        title: "This is title 4",
        desc: "Lorem, ipsum dolor sit amet  dolor aliquam praesentium quos accusantium?"
    },
    {
        title: "this is title 5",
        desc: "Lorem, ipsum dolor sit amet  dolor aliquam praesentium quos accusantium?"
    },
    {
        title: "This is title 6",
        desc: "Lorem, ipsum dolor sit amet  dolor aliquam praesentium quos accusantium?"
    },
    {
        title: "this is title 7",
        desc: "Lorem, ipsum dolor sit amet  dolor aliquam praesentium quos accusantium?"
    },
    {
        title: "This is title 8",
        desc: "Lorem, ipsum dolor sit amet  dolor aliquam praesentium quos accusantium?"
    }
];

const PostsElements = document.querySelector(".posts");

const loadData = () =>{
    postsData.map((post)=>{
        const addElement = document.createElement("div");
        addElement.classList.add("post");
        addElement.innerHTML = `<h2 class="title">${post.title}</h2>
        <p class="desc">${post.desc}</p>`;

        PostsElements.appendChild(addElement);
    })
}
loadData();
