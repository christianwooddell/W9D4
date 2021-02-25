const FollowToggle = require("./follow_toggle.js");

$(function(){
    $("button.follow-toggle").each((idx, btn) => new FollowToggle(btn));
    $(".users-search").each((idx, search) => new UsersSearch(search)); 
})


