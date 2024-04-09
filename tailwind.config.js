/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./store/templates/store/base.html",
   "./store/templates/store/home.html",
   "./store/templates/store/item_detail.html",
   "./store/templates/store/contact.html",
   "./store/templates/store/about.html",
   "./users/templates/users/register.html",
   "./users/templates/users/login.html",
   "./users/templates/users/logout.html",
   "./users/templates/users/register.html",
   "./users/templates/users/profile.html",
   "./users/templates/users/personal-info.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
